import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const response = await fetch(
		'https://deployasslink.pythonanywhere.com/auth/login/validator/'
	);
	const data = await response.json();
	console.log(data);

	return {
		props: { name: 'John Wall' },
	};
};

export default function Dashboard(props: any) {
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
