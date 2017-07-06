//console.log("bite me");

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MusicApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			message:'',
			apikey:'',
			playlist:[]
		}

		this.fetchArtist=this.fetchArtist.bind(this);
	}

	fetchArtist(){
		var artistName=document.getElementById('artistName').value;

		if(artistName){
			$.ajax({
				type:'GET',
				url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+artistName+'&api_key=6fe7366cda5e26916ef364c433386f08&format=json',
				dataType:'json',
				success:function(data){
					console.log(data.toptracks.track);
					this.setState({
						playlist:data.toptrack.track
					})
				}
			})
		}
	}

	render(){
		return(
				<div>
					Welcome to FCC!
					<input type='text' id="artistName"/>
					<button onClick={this.fetchArtist}>Search</button>
				</div>
			)
	}
}

ReactDOM.render(<MusicApp/>,document.getElementById('container'));