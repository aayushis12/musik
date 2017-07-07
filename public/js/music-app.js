// //console.log("bite me");

// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import {Playlist} from './playlist.js'

// class MusicApp extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			message:'',
// 			apikey:'',
// 			playlist:[]
// 		}

// 		this.fetchArtist=this.fetchArtist.bind(this);
// 	}

// 	componentDidMount(){
// 		this.fetchArtist();
// 	}
// 	fetchArtist(){
// 		var artistName=document.getElementById('artistName').value;
// 		console.log(artistName);
// 		var that = this;

// 		if(artistName){
// 			$.ajax({
// 				type:'GET',
// 				url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+artistName+'&api_key=eff1df4e758b0a2f134e0a4ee238d9ed&format=json',
// 				datatype:'json',
// 				success:function(data){
// 					//console.log('bite me');
// 					console.log(data);

// 					that.setState({
// 						playlist:data.toptracks.track,
// 						message:''
// 					})
					
// 				}
// 			})
// 		}
// 		else{
// 			this.setState({
// 				message:"Please enter artist's name"
// 			})
// 		}
// 	}

// 	render(){
// 		var playlist=[];
// 		for(var i=0;i<this.state.playlist.length;i++){
// 			playlist.push(
// 			<Playlist name={this.state.playlist[i].name} image={this.state.playlist[i].image[1]['#text']} key={i}/>
// 			)
// 		}
// 		return(
// 				<div>
// 					Welcome to FCC!
// 					<input type='text' id="artistName"/>
// 					<button onClick={this.fetchArtist}>Search</button>
// 					{playlist}
// 					{this.state.message}
// 				</div>
// 			)
// 	}
// }

// ReactDOM.render(<MusicApp/>,document.getElementById('container'));



