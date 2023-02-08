import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { FormInput } from './components/form';

interface NewValue {
	[key: string]: string;
}

export default function Login() {
	const router = useRouter();
	const [formValue, setFormValue] = useState({});
	const handleChange = (newInputForm: any, inputKey: string) => {
		const newValue: NewValue = { ...formValue };
		newValue[inputKey] = newInputForm;
		setFormValue(newValue);
	};

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		console.log('submit func');

		const response = await fetch(
			'https://deployasslink.pythonanywhere.com/auth/signup/validator/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(formValue),
			}
		);
	};

	return (
		<>
			{router.query.isSuccess && <Success />}
			{router.query.isError && <Error />}
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
								<form onSubmit={submit} method='POST'>
									<FormInput
										label='email'
										type='email'
										handleChange={handleChange}
									/>
									<FormInput
										label='password'
										type='password'
										handleChange={handleChange}
									/>
									<div className='form-control mt-6'>
										<button className='btn bg-main hover:bg-main-2'>
											Login
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

function Success() {
	return (
		<>
			<div className='text-xl text-center bg-success shadow-inner p-2'>
				You successfuly registered your account, Please login to continue
			</div>
		</>
	);
}
function Error() {
	return (
		<>
			<div className='text-xl text-center bg-red-400 shadow-inner p-2'>
				Failed to Login, Check your credentials
			</div>
		</>
	);
}
