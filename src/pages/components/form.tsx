import { FormEventHandler, useState } from 'react';

interface Form {
	label: string;
	handleChange: any;
	type: string;
}

export function FormInput({ label, type, handleChange }: Form) {
	const handleChildChange = (newValue: any) => {
		handleChange(newValue, label);
	};
	return (
		<>
			<div className='form-control'>
				<label className='label'>
					<span className='label-text capitalize'>{label}</span>
				</label>
				<input
					name={label}
					type={type}
					placeholder={label}
					className='input input-bordered'
					onChange={(e) => handleChildChange(e.target.value)}
				/>
			</div>
		</>
	);
}
