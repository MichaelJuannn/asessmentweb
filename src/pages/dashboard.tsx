import { GetServerSideProps } from 'next';
import { useState, ReactNode } from 'react';

export default function Dashboard({
	question,
	error,
}: {
	question: any;
	error?: string;
}) {
	if (error) return <ErrorPage msg={error} />;
	const notAnswered: string[] = question.not_yet_answered;
	const [comment, setComment] = useState('');
	const [type, setType] = useState('');
	const handleComment = (formbody: string) => {
		setComment(formbody);
	};
	const handleType = (formbody: string) => {
		setType(formbody);
	};
	console.log(type + comment);
	return (
		<>
			<div className='flex items-center p-2 w-full bg-main'>
				<a className='btn btn-ghost normal-case text-xl text-white'>
					TaskBloom
				</a>
			</div>
			<Alert count={notAnswered.length}>
				{notAnswered.map((element: any, index) => {
					return (
						<div key={index} className='inline-block m-4'>
							<QuestionBox
								handleComment={handleComment}
								handleType={handleType}
								id={element.id}
								question={element.text_question}
								validator={element.validator}
							/>
						</div>
					);
				})}
			</Alert>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.query.bearer;
	if (!token)
		return {
			props: { error: 'Expected a string' },
		};

	const question = await fetch(
		'https://deployasslink.pythonanywhere.com/api/tanya/',
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}
	).then((question) => question.json());
	if (question.code)
		return {
			props: { error: question.code },
		};
	return {
		props: { question },
	};
};

function QuestionBox({
	question,
	validator,
	id,
	handleComment,
	handleType,
}: any) {
	return (
		<>
			<div className='card w-96 bg-base-300 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>
						{id} {validator}
					</h2>
					<p>{question}</p>
					<div className='card-actions justify-end'>
						<label htmlFor={id} className='btn btn-primary'>
							answer
						</label>
					</div>
				</div>
			</div>
			<div>
				<input type='checkbox' id={id} className='modal-toggle' />
				<div className='modal'>
					<div className='modal-box'>
						<h3 className='font-bold text-lg'>{validator}</h3>
						<p className='py-4'>{question}</p>
						<input
							type='text'
							className='input input-bordered w-full max-w-xs'
							onChange={(e) => handleComment(e.target.value)}
						/>
						<select
							className='select select-bordered w-full max-w-xs mt-5'
							onChange={(e) => handleType(e.target.value)}
							defaultValue='Type'
						>
							<option disabled value='Type'>
								Type
							</option>
							<option value={'C1_Faktual'}>C1_Faktual</option>
							<option value={'C2_Faktual'}>C2_Faktual</option>
							<option value={'C3_Faktual'}>C3_Faktual</option>
							<option value={'C4_Faktual'}>C4_Faktual</option>
						</select>
						<div className='modal-action'>
							<label htmlFor={id} className='btn'>
								Answer
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function ErrorPage({ msg }: { msg: string }) {
	return (
		<>
			<div className='flex items-center p-2 w-full bg-main'>
				<a className='btn btn-ghost normal-case text-xl text-white'>
					TaskBloom
				</a>
			</div>
			<div>
				ERROR {msg}, please
				<a href='/login' className='text-blue-700'>
					login
				</a>
				again to solve this issue
			</div>
		</>
	);
}

function Alert({ count, children }: { count: number; children: ReactNode }) {
	const [isActive, setActive] = useState(false);
	return (
		<>
			<div className='alert alert-error shadow-lg w-max m-4 '>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stroke-current flex-shrink-0 h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<span>{count} Not Answered Questions</span>
				</div>
				<div className='flex-none'>
					<button className='btn btn-ghost' onClick={() => setActive(true)}>
						View Details
					</button>
					<button className='btn btn-ghost' onClick={() => setActive(false)}>
						Ignore
					</button>
				</div>
			</div>
			{isActive && children}
		</>
	);
}
