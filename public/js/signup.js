
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {MusicApp} from './music-app.js';

class Signup extends React.Component{
	//var that=this;
	constructor(props){
		super(props);
		this.state={
			isLoggedin:false
		}
		
		this.changePage=this.changePage.bind(this);
	}
	changePage(){
		//console.log('eefr');
		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;
		//
		var that=this;
		// if(username && password){
			
		// 	that.setState({
		// 		isLoggedin:true
		// 	})
		// }

		$.ajax({
			type:'POST',
			url:'/newuser',
			data:{
				username:username,
				password:password
			},
			success:function(){

				that.setState({
					isLoggedin:true
				})
			}
		})
		
	}
	render(){
		if(this.state.isLoggedin){
			return(
				<MusicApp/>
				)
		}else{
			return(
				<div>
				<input type='text' id='username' placeholder='username'/>
				<input type='password' id='password' placeholder='password'/>
				<input type='button' id='signup' value='Signup' onClick={this.changePage}/>
				</div>

				)
		}
	}
}

ReactDOM.render(<Signup />,document.getElementById('container'));