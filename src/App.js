import React, { Component } from 'react';
import Button from './components/Button.js';
import Form from './components/Form.js';
import axios from 'axios';
class App extends Component {
	constructor() {
		super();
		this.state = {
			gitrun : 'No username',
			info : '',
			formData: {
				username : '',
			}
		}
		this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleUserFormSubmit(event) {
		event.preventDefault();
		axios.get('https://api.github.com/users/ajitesh-30')
		.then(response => this.setState({
			username: response.data.login,
			info : JSON.stringify(response.data,undefined,2)
		})).catch((err) => { console.log(err) });
	};

	handleFormChange(event) {
		const obj = this.state.formData;
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	};
  	render() {
    	return (
     	 	<div className="App">
        		<header className="App-header">
          			<h1 class="App-title">GitHub Analytics</h1>
        		</header>
        		<p class="App-intro">
        			Content Coming Up
        		</p>
        			<Button handleClick={this.handleClick}/>
        			<p>Username : <b/></p>
        			<p>{this.state.username}</p>
        			<b>Information : </b>
        			<pre>{this.state.info}</pre>
      		</div>
    	);
  	}
}

export default App;
