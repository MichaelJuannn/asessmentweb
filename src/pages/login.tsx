import { useRouter } from 'next/router';
import { FormInput } from './components/form';

export default function Login() {
	const router = useRouter();

	return (
		<>
			{router.query.isSuccess && <Success />}
			<div>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<h1 className='text-5xl font-bold'>Masuk Sekarang!</h1>
							<p className='py-6'>
								Gunakan akun anda yang terdaftar untuk masuk ke aplikasi
								Assessment Link
							</p>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<div className='card-body'>
								<FormInput label='email' type='email' />
								<FormInput label='password' type='password' />
								<div className='form-control mt-6'>
									<button className='btn bg-main hover:bg-main-2'>Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Success() {
	return (
		<>
			<div className='text-xl text-center bg-success shadow-inner p-2'>
				You successfuly registered your account, Please login to continue
			</div>
		</>
	);
}
