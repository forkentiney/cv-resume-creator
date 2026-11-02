import { Link } from 'react-router';
import '../styles/index.css';
import Header from './Header.jsx';

function Index( { createResume, createCV, title } ) {
	return (
		<>
			<Header 
				title={title}
			/>
			<main>
				<div className="cardContainer">
					<div className="card">
						<h2>Résumé</h2>
						<p>Résumé is word borrowed from the French meaning "to summarize". A good résumé should therefore summarize your life's experiences as they are relevant for the job or position you are applying for. A résumé includes your education, work experience, and sometimes even your interests. It should give someone a concise overview of who you are and should help your argument that you are suited for a given position or role. As a summary, it is customary that a résumé be at maximum a single page.</p>
						<Link to="/resume"><button>Create a Résumé</button></Link>
					</div>
					<div className="card">
						<h2>CV</h2>
						<p>CV stands for Curriculum Vitæ, Latin for "course of life". Its name, however, is misleading. A CV is a document that collects only education and professional achievements such as publications. It should, however, provide all relevant information about these things including in some cases your grade point average (GPA) and detailed information about areas studied and areas of proficiency. A CV does not have a customary length requirement except to be as long as it needs. I.e., it should not be reduced to a single page for the sake of being only a page.</p>
						<Link to="/resume"><button>Create a CV</button></Link>
					</div>
				</div>
			</main>
		</>
	);

};

export default Index;
