
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
		this.loginPage=this.loginPage.bind(this);
	}
	changePage(){
		//console.log('eefr');
		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;
		
		var that=this;

		$.ajax({
			type:'POST',
			url:'/newuser',
			data:{
				username:username,
				password:password
			},
			success:function(result){
				console.log(result);
				if(result===1){

				that.setState({
					isLoggedin:true
				})
			}else{
				alert("We already have someone with the same username.");
			}
			}
		})
		
	}

	loginPage(){
		var username=document.getElementById('username').value;
		var password=document.getElementById('password').value;
		var that=this;
		$.ajax({
			type:'POST',
			url:'/checkuser',
			data:{
				username:username,
				password:password
			},
			success:function(result){
				if(result){
				that.setState({
					isLoggedin:true
				})
			}else{
				alert("try again");
				}
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
				<input type='button' id='login' value='login' onClick={this.loginPage}/>
				</div>

				)
		}
	}
}

ReactDOM.render(<Signup />,document.getElementById('container'));