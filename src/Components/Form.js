import React, { Component } from 'react'

export default class Contact extends Component{
	state = {
		thoughts:'',
		name: '',
		email: ''
	}
	handleOnSubmit = (event)=>{
        event.preventDefault()
        // eslint-disable-next-line
		let userEmail = {
			thoughts:this.state.thoughts,
			name:this.state.name,
			email:this.state.email
		}
	}
	handleOnChange = (event)=>{
		this.setState({
			//This line essentially listens to changes on wherever the event is placed. It looks at the name of the input and
			//adjusts to the current value that is being input. Since it's being called on setState, whatever is entered
			//into the value will appear "on screen" (or whever you have it console.logged)
            [event.currentTarget.name]: event.currentTarget.value
        })
	}
	render(){
		return(
			<form onSubmit={this.handleOnSubmit} action='http://localhost:5000/' method="POST" className="form">
			<h3>Contact me</h3>
			<p>If you like what you've learned please feel free to reach out to me</p>
			<textarea onChange = {this.handleOnChange} placeholder="What are you thoughts?" className="thoughts" name="thoughts" rows="10" cols="33"></textarea>

			  <div className="form-example">
			    <label form="name">Enter your name: </label>
			    <input onChange = {this.handleOnChange} placeholder="name" type="text" name="name" id="name" required/>
			  </div>

			  <div className="form-example">
			    <label form="email">Enter your email: </label>
			    <input onChange = {this.handleOnChange} placeholder="email" type="email" name="email" id="email" required/>
			  </div>

			  <div className="form-example">
			    <input type="submit" value="Subscribe!" onClick={this.props.email}/>
			  </div>
			</form>
		)
	}
}