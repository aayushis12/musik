
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import {music-app} from './music-app.js';

class Signup extends React.Component{
	render(){
		return(
			<div>
				<input type='text' placeholder='username'/>
				<input type='text' placeholder='password'/>
				<input type='button' value='submit'/>
			</div>
			)
	}
}

ReactDOM.render(<Signup />,document.getElementById('container'));