import React from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }


handleChange = (evt) => {
   
        this.setState({
            [evt.target.name]:(evt.target.value)
        })
     
  console.log(evt.target.value)
}

handleLogin = (evt) => {
    evt.preventDefault()
    //In here make fetch once there is a database user info from database  
    this.props.handleUser(this.state.username)
}

render() {
  

    return (
        
        <div className="login-container">
            <div className="login">
            {/* <form>
                <input 
                    placeholder="Username"
                    className="username"
                    name='username'
                    value = {this.state.username}
                    onChange = {this.handleChange}
                ></input>
                <input 
                    placeholder="Password"
                    className="username"
                    name='password'
                    value = {this.state.password}
                    onChange = {this.handleChange} 
                ></input>
                    <br></br>
                    </form> */}
                <input type="submit" value="Enter" className="login-btn" onClick ={this.handleLogin} />
          
            </div>
        </div>
    )
}
}


export default Login;