import React, { Component } from 'react'
import './CSS/todo.css'
// const validate=(e) =>{if (!values.Name){
//     errors.Name="User name is required"
// }
// return errors;
// };
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            PhoneNo: "",
            email: "",
            gender: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    Namehandler = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    PhoneNohandler = (event) => {
        this.setState({
            PhoneNo: event.target.value
         })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.Name}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            Name: "",
            PhoneNo: "",
            email: "",
            gender: "",
        })
     event.preventDefault()
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Registration  Form</h1>
                    <label>Name :</label> <input type="text" value={this.state.Name} onChange={this.Namehandler} placeholder="Full Name..." /><br />
                    <label> PhoneNo. :</label> <input type="text" value={this.state.PhoneNo} onChange={this.PhoneNohandler} placeholder=" PhoneNo..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email Address..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>          
        )
    }
}

export default Form