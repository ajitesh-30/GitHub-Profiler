import React from 'react';
import './index.css';
const Form = (props) => {
	return (
		<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
			<label>
				<input class="form" name="username" 
					type="text"
					placeholder="Github Username"
					required
					value={props.formData.username}
					onChange={props.handleFormChange}
			/>
			</label>
			<div>
			<input class="btn"
				type="submit"
				value="submit"
			/>
			</div>
		</form>
	)
};
export default Form;