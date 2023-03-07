import { GetServerSideProps } from 'next';
import Alert from '@/components/alert';
import { useState } from 'react';

export default function Dashboard({ question }: any) {
	const notAnswered: string[] = question.not_yet_answered;
	const answered: string[] = question.already_answered;
	console.log(notAnswered);
	return (
		<>
			<div className='flex items-center p-2 w-full bg-main'>
				<a className='btn btn-ghost normal-case text-xl text-white'>
					TaskBloom
				</a>
			</div>
			<Alert count={notAnswered.length}>
				{notAnswered.map((element: any) => {
					return (
						<div className='inline-block m-4'>
							<QuestionBox
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

	const question = await fetch(
		'https://deployasslink.pythonanywhere.com/api/tanya/',
		{
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		}
	).then((question) => question.json());

	return {
		props: { question },
	};
};

function QuestionBox({ question, validator }: any) {
	return (
		<>
			<div className='card w-96 bg-base-300 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>{validator}</h2>
					<p>{question}</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Answer</button>
					</div>
				</div>
			</div>
		</>
	);
}
