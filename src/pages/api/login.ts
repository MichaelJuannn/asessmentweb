import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = req.body;
	const response = await fetch(
		'https://deployasslink.pythonanywhere.com/auth/login/validator/',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	);
	const userJson = await response.json();
	if (!response.ok) return res.redirect('/login?isError=1');

	res.setHeader('Set-Cookie', 'access=' + userJson.tokens.access);
	res.redirect(`/dashboard?bearer=${userJson.tokens.access}`);
}
