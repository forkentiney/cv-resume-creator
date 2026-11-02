import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from './components/Index.jsx';
import ResumeForm from './components/ResumeForm.jsx';
import './styles/app.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Index title="Résumés and CVs"/>
	},
	{
		path: 'resume',
		element: <ResumeForm title="Résumé Creator"/>
	},
]);

export default function App() {
	return (
		<RouterProvider router={router} />
	);
};
