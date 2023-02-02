import { useRouter } from 'next/router';
import { FormInput } from './components/form';

export default function Register() {
	const router = useRouter();

	return (
		<>
			{router.query.isError && <Error />}
			<div>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<h1 className='text-5xl font-bold'>Masuk Sekarang!</h1>
							<p className='py-6'>
								Daftarkan Diri Anda untuk mengakses Assessment Link menggunakan
								Email dan Username
							</p>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<div className='card-body'>
								<form action='/api/register' method='POST'>
									<FormInput label='username' type='text' />
									<FormInput label='email' type='email' />
									<FormInput label='password' type='password' />
									<div className='form-control mt-6'>
										<button
											className='btn bg-main hover:bg-main-2'
											type='submit'
										>
											Daftar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Error() {
	return (
		<>
			<div className='text-xl text-center bg-red-400 shadow-inner p-2'>
				There are some errors in your register information, please try again
			</div>
		</>
	);
}
