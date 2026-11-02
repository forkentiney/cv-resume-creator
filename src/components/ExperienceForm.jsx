export default function ExperienceForm( { addExperience, } ) {
	return (
		<div>
			<h2>Experience</h2>
			<form onSubmit={addExperience}>
				<label>
					Company name:
					<input
						type="text"
						name="company"
						id="company"
						placeholder="Example Inc."
					/>
				</label>
				<label>
					Position:
					<input
						type="text"
						name="position"
						id="position"
						placeholder="Job Title"
					/>
				</label>
				<label>
					Responsibilities:
					<textarea
						type="text"
						name="responsibilities"
						id="responsibilities"
						placeholder="I worked on this project and that project. I used some technology and spoke with people."
					/>
				</label>
				<div id="jobDatesForm">
					<label>
						From:
						<input
							type="month"
							name="jobStart"
							id="jobStart"
							placeholder="MM/YYYY"
						/>
					</label>
					<label>
						To:
						<input
							type="month"
							name="jobEnd"
							id="jobEnd"
							placeholder="MM/YYYY"
						/>
					</label>
				</div>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};
