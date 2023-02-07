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
	if (!response.ok) return res.redirect('/login?isError=1');

	res.json(await response.json());
}
