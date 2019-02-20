import React, { Component } from 'react';
import Button from './components/Button.js';
import axios from 'axios';
class App extends Component {
	constructor() {
		super();
		this.state = {
			username : 'No username',
			info : ''
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		axios.get('https://api.github.com/users/ajitesh-30')
		.then(response => this.setState({
			username: response.data.login,
			info : JSON.stringify(response.data,undefined,2)
		}));
	}
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
