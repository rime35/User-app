import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';
const Animation=posed.div({
    visible : {
        opacity:1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden :{
        opacity:0,
        applyAtEnd :{
        display : "none"
        }
    }
})

 class AddUser extends Component {
    state={
        visible:true,
        name:"",
        surname:"",
        phone:"",
        mail:""



    }
    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
        
        
    }

    changeVisibility=(e) =>{
        this.setState({
            visible :!this.state.visible
        })
    }
    
      
    AddUser= async(dispatch,e)=>{
        e.preventDefault(); 
        const {name,surname,phone,mail}=this.state;
        const newUser={
            name, 
            surname,
            phone,
            mail
        } 
        const response= await axios.post("http://localhost:3001/users",newUser)

        dispatch({type :"ADD_USER",payload:response.newUser});
    }
  
  render() {
    const {visible,name,surname,phone,mail}=this.state;
    return(
        <UserConsumer>
            {
                value=>{
                    const{dispatch}=value;
                    return (
                        <div className="col-md-8 mb-4">
                          <button onClick={this.changeVisibility} class=" btn btn-dark btn-block mb-1 ">{visible ? "Open form":"Close form"}</button>
                          <Animation pose={visible ? "visible" :"hidden" }>
                          <div className="card ">
                  
                          </div>
                          <div className="card-header">
                              <h4>ADD USER FORM</h4>
                              <div className="card-body">
                                  <form onSubmit={this.AddUser.bind(this,dispatch)}>
                                      <div className="form-group">
                                          <label htmlFor="name" >NAME</label>
                                          <input 
                                          type="text"
                                          name="name"
                                          id="id"
                                          placeholder="Enter name"
                                          class="form-control"
                                          value={name}
                                          onChange={this.changeInput}
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="surname" >SURNAME</label>
                                          <input 
                                          type="text"
                                          name="surname"
                                          id="surname"
                                          placeholder="Enter surname"
                                          class="form-control"
                                          value={surname}
                                          onChange={this.changeInput}
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="phone" >PHONE</label>
                                          <input 
                                          type="text"
                                          name="phone"
                                          id="phone"
                                          placeholder="Enter phone number"
                                          class="form-control"
                                          value={phone}
                                          onChange={this.changeInput}
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="mail" >E-MAİL</label>
                                          <input 
                                          type="text"
                                          name="mail"
                                          id="mail"
                                          placeholder="Enter E-MAİL "
                                          class="form-control"
                                          value={mail}
                                          onChange={this.changeInput}
                                          />
                                      </div>
                                      <button class="btn btn-danger btn-block " type="submit">ADD USER</button>
                                      
                                  </form>
                  
                              </div>
                          </div>
                          </Animation>
                  
                  
                  
                        </div>
                      )

                }
            }
        </UserConsumer>
    )

    

    
  }
}
export default AddUser;
