import { useState } from 'react';

export default function PersonalForm({onName, onEmail, onPhone,}) {
	return (
		<div>
			<h2>Personal Information</h2>
			<form>
				<label>
					Name:
					<input 
						type="text" 
						name="name" 
						id="name"
						placeholder="Charlie Smith" 
						onChange={onName}
					/>
				</label>
				<label>
					Email:
					<input 
						type="email" 
						name="email" 
						id="email"
						placeholder="email@example.com"
						onChange={onEmail}
					/>
				</label>
				<label>
					Phone:
					<input
						type="tel"
						name="phone"
						id="phone"
						placeholder="+1 (555) 555-5555"
						onChange={onPhone}
					/>
				</label>
			</form>
		</div>
	);
};
