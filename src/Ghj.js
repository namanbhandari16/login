import React from 'react';
import './sign.css'
class Ghj extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Username:'',
            Password:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  	handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }


    
    render(){  
    return(
    <div className="App">
        <div className="App__Aside"></div>

        <div className="App__Form">

            <form className="FormTitle" onSubmit={this.handleSubmit}>
                

                <div className="form-content">
                <h1 id="sign-in">Sign In</h1>

                <p><input required placeholder="Username" tyep="text" className="form-control" name="Username" value={this.state.Username} onChange={this.handleChange}></input></p>

                <p><input required placeholder="Password" type="Password" className="form-control" name="Password" value={this.state.Password} onChange={this.handleChange}></input></p>

                <input type="Submit"  value="Log In" className="btn btn-primary btn-lg btn-block"></input>
                </div>
                <br/><br/><br/><br/>
            </form> 
        <button className="btn btn-primary btn-lg btn-block left" >Sign in with Google</button>
        <button   className="btn btn-primary btn-lg btn-block right" >Login with Facebook</button>
        
        </div>
    </div>
    );
  }
}

export default Ghj;
