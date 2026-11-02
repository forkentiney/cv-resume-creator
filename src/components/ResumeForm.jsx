import { useState } from 'react';
import Header from './Header.jsx';
import PersonalForm from './PersonalForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import Print from './Print.jsx';
import '../styles/resumeForm.css';

export default function ResumeForm({title}) {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [education, setEducation] = useState([])
	const [experience, setExperience] = useState([])

	function onName(e) {
		setName(e.target.value);
	};

	function onEmail(e) {
		setEmail(e.target.value);
	};

	function onPhone(e) {
		setPhone(e.target.value);
	};

	function addEducation(e) {
		e.preventDefault();
		const newEducation = {
			school: e.target.school.value,
			field: e.target.fieldOfStudy.value,
			degree: e.target.degree.value,
			date: e.target.dateFinished.value,
			key: crypto.randomUUID(),
		};
		if (newEducation.school) {
			setEducation([...education, newEducation]);
			e.target.reset();
		};
	};

	function addExperience(e) {
		e.preventDefault();
		const newExperience = {
			company: e.target.company.value,
			position: e.target.position.value,
			responsibilities: e.target.responsibilities.value,
			jobStart: e.target.jobStart.value,
			jobEnd: e.target.jobEnd.value,
			key: crypto.randomUUID(),
		};
		if (newExperience.company) {
			setExperience([...experience, newExperience]);
			e.target.reset();
		};
	};

	return (
		<>
			<Header 
				title={title}
			/>
			<main>
				<PersonalForm 
					onName={onName}
					onEmail={onEmail}
					onPhone={onPhone}
				/>
				<EducationForm 
					addEducation={addEducation}
				/>
				<ExperienceForm 
					addExperience={addExperience}
				/>
				<Print
					name={name}
					email={email}
					phone={phone}
					education={education}
					experience={experience}
				/>
			</main>
		</>
	);
};
