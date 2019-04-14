import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super();
        this.state={
            username:'',
            password:'',
            submitted: false,
            loading: false,
            error: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
      handleClick(event){
        console.log("in handleClick");
        debugger;
        const { name, value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit =e =>{
        debugger;
        console.log(e.target.value);
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
    }
    render(){
        const {username, password, submitted} =this.state;
        return(
            <form onSubmit={this.handleSubmit}>           
            <h2>Login Page</h2>
            <h3>User Name</h3>
            <input type="text" value={username} name="username" onChange={this.handleClick}/>
            {submitted && !username &&
                            <div>Username is required</div>
                        }
            <h3>password</h3>
            <input type="password" value={password} name="password" onChange={this.handleClick}/>
            {submitted && !password &&
                            <div>password is required</div>
                        }
            <button>Submit</button>
        </form>
        )
    }
}

export default Login;