import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { FormInput } from '../components/form';

interface NewValue {
	[key: string]: string;
}

export default function Register() {
	const router = useRouter();
	const [formValue, setFormValue] = useState({});
	const handleChange = (newInputForm: any, inputKey: string) => {
		const newValue: NewValue = { ...formValue };
		newValue[inputKey] = newInputForm;
		setFormValue(newValue);
		console.log(JSON.stringify(formValue));
	};

	return (
		<>
			{router.query.isError && <Error />}
			<div>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content flex-col lg:flex-row-reverse'>
						<div className='text-center lg:text-left'>
							<h1 className='text-5xl font-bold'>Daftar Sekarang!</h1>
							<p className='py-6'>
								Daftarkan Diri Anda untuk mengakses Assessment Link menggunakan
								Email dan Username
							</p>
						</div>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<div className='card-body'>
								<form action='api/register' method='POST'>
									<FormInput
										label='username'
										type='text'
										handleChange={handleChange}
									/>
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
