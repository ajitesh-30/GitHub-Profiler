import React, { Component } from 'react';
import Button from './components/Button.js';
import Form from './components/Form.js';
import SortedList from './components/SortedList.js';
import ProfileDetails from './components/ProfileDetails.js';
import axios from 'axios';
class App extends Component {
	constructor() {
		super();
		this.state = {
			gitrun : 'No username',
			infoclean : '',
			formData: {
				username : '',
			}
			repitems : null,
			staritems:null,
		}
		this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
		this.handleFormChange= this.handleFormChange.bind(this);
	}

	handleUserFormSubmit(event) {
		event.preventDefault();
		axios.get('https://api.github.com/users/'+this.state.formData.username)
		.then(response => this.setState({
			gitrun : response.data.login,
			infoclean : response.data,
		})).catch((err) => { console.log(err); });
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
        		<Form
          			formData={this.state.formData}
          			handleUserFormSubmit={this.handleUserFormSubmit}
          			handleFormChange={this.handleFormChange}
        		/>
        		  <hr></hr>
       			 Profile Details:
        			<ProfileDetails infoclean={this.state.infoclean}/>
      		</div>
    	);
  	}
}

export default App;
