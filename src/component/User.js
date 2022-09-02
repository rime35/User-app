import React, { Component } from 'react'
import Proptypes from "prop-types";
import UserConsumer from '../context';
import axios from 'axios';
 class User extends Component {
  constructor(props){
    super(props)
    this.state={
      test :"text",
      isVisible:false
    }

  }
  
  onClickEvent = (e) =>{
    
    this.setState({
      isVisible : !this.state.isVisible
    })
}
onDeleteUser= async (dispatch,e)=>{
  const {id}=this.props;
  await axios.delete(`http://localhost:3004/users/${id}`);
  dispatch({type : "DELETE_USER",payload:id});
}
  render() {
    const {name,surname,mail,phone}=this.props;
    const {isVisible}=this.state;
    return(
      <UserConsumer>
        {
          value =>{
            const {dispatch}=value;
            return (
              <div className = "col-md-8 mb-4">
                <div className="card-header d-flex justify-content-between">
                 <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this,34)} >{name} {surname}</h4>
                 <i onClick={this.onDeleteUser.bind(this,dispatch)} className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                 </div>
                {
       
                  isVisible ?   <div className="card-body">
                       <p className="card-text"> E-MAİL: {mail}</p>
                    <p className="card-text">PHONENUMBER : {phone}</p>
                      </div>:null
                 }
                
                 
         
              </div>
            )
          }
        }

      </UserConsumer>
    )
     
    
  }
}
User.defaultProps={
  name:"bilgi yok",
  surname:"bilgi yok",
  mail:"bilgi yok",
  phone:"bilgi yok",
  
}
User.propTypes = {
  name:Proptypes.string.isRequired,
  surname:Proptypes.string.isRequired,
  mail:Proptypes.string.isRequired,
  phone:Proptypes.string.isRequired,
  id:Proptypes.string.isRequired
  
}
export default User;
