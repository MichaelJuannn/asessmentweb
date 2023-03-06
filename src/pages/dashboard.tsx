import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export default function Dashboard({ question }: any) {
	console.log(question.not_yet_answered);
	return (
		<>
			<div className='flex items-center p-2 w-full bg-main'>
				<a className='btn btn-ghost normal-case text-xl text-white'>
					TaskBloom
				</a>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.query.bearer;

	const question = await fetch(
		'https://deployasslink.pythonanywhere.com/api/tanya/',
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}
	).then((question) => question.json());

	return {
		props: { question },
	};
};
