import React from 'react';

const Form = (props) => {
	return (
		<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
			<label>
				<p>Search:</p>
				<input name="username" 
				type="text"
				placeholder="Github Username"
				required
				value={props.formData.username}
				onChange={props.handleFormChange}
			/>
			</label>
			<div>
			<input 
				type="submit"
				value="submit"
			/>
			</div>
		</form>
	)
}