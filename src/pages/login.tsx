import { FormInput } from './components/form';

export default function Login() {
	return (
		<>
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
									<button className='btn btn-primary'>Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
