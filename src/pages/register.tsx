import { FormInput } from './components/form';

export default function Register() {
	return (
		<>
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
										<button className='btn btn-primary' type='submit'>
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
