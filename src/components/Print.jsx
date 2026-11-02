import PersonalForm from './PersonalForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import '../styles/print.css';

export default function Print( { name, email, phone, education, experience, } ) {
	function edit() {

	};
	return (
		<div id="print">
			<div id="personal-print">
				<h1>{name}</h1>
				<p>{email}</p>
				<p>{phone}</p>
			</div>

			<div id="education-print">
				<h2>Education</h2>
				<ul>
					{education.map((edu) => {
						return (
							<li key={edu.key}>
								<h3>{edu.school}</h3>
								<p>{edu.date}</p>
								<p>{edu.field}</p>
								<p>{edu.degree}</p>
							</li>
						);
					})}
				</ul>
			</div>

			<div id="experience-print">
				<h2>Experience</h2>
				<ul>
					{experience.map((job) => {
						return (
							<li key={job.key}>
								<h3>{job.company}</h3>
								<p>{job.position}</p>
								<div className="date-range">
									<p>{job.jobStart}</p>
									<p>{job.jobEnd}</p>
								</div>
								<p>{job.responsibilities}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
