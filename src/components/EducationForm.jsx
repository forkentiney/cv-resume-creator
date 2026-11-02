import '../styles/form.css';
export default function EducationForm( { addEducation, }) {
	return (
		<div>
			<h2>Education</h2>
			<form onSubmit={addEducation}>
				<label>
					Institution: 
					<input
						type="text"
						name="school"
						id="school"
						placeholder="Louisiana State University"
					/>
				</label>
				<label>
					Field of study:
					<input
						type="text"
						name="fieldOfStudy"
						id="fieldOfStudy"
						placeholder="Philosophy"
					/>
				</label>
				<label>
					Degree or certificate:
					<input
						type="text"
						name="degree"
						id="degree"
						placeholder="M.A."
					/>
				</label>
				<label>
					Date completed:
					<input
						type="month"
						name="dateFinished"
						id="dateFinished"
						placeholder="MM/YYYY"
					/>
				</label>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};
