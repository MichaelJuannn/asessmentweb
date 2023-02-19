import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	username: string;
	email: string;
	password: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data: Data = req.body;

	const response = await fetch(
		`${process.env.API_HOST}/auth/signup/validator/`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	);

	if (!response.ok) return res.redirect(302, `/register?isError=1`);
	res.redirect(302, '/login?isSuccess=1');
}
