import { GetServerSideProps } from 'next';

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
