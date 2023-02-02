import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data = req.body;

	const response = await fetch(
		'https://deployasslink.pythonanywhere.com/auth/signup/validator/',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	);
	res.status(200).redirect('/');
}
