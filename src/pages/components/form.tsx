interface Form {
	label: string;
	misc?: string;
	type: string;
}

export function FormInput({ label, type, misc }: Form) {
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
				/>
			</div>
		</>
	);
}
