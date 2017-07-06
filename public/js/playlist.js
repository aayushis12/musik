var React=require('react');
var ReactDOM=require('react-dom');
import $ from 'jquery';


class Playlist extends React.Component{
	constructor(props){
		super(props);
		this.state={
			genres:[]
		}
	}

	render(){
		return(
			<div>
				<div>{this.props.name}</div>
				<img src={this.props.image}/>
			</div>
			)
	}
}

module.exports={
	Playlist:Playlist
}