import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super();
        this.state={
            username:'',
            password:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
      handleClick(event){
        console.log("in handleClick");
        this.setState({username:event.target.value})
    }

    handleSubmit =e =>{
        console.log(e.target.value);
        e.preventDefault();
    }
    render(){
        const {username,password} =this.state;
        return(
            <form onSubmit={this.handleSubmit}>           
            <h2>Login Page</h2>
            <h3>User Name</h3>
            <input type="text" value={username} name="username" onChange={this.handleClick}/>
            <h3>password</h3>
            <input type="password" value={password} name="password" onChange={this.handleClick}/>
            <button>Submit</button>
        </form>
        )
    }
}

export default Login;