import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{border:'1px solid #d9d9d9', marginTop:'3px', backgroundColor:'#e6e6e6'}}>
        <Link to={{pathname:'/contact/${id}', state:{contact: props.contact}}}>


        <div className="content" style={{display:'flex', justifyContent:'space-between'}}>
        <img className="ui avatar image" style={{height:'50px', width:'50px', marginLeft:'30px'}} src={user} alt="user" />
            
            <div className="header" style={{fontSize:'15px', marginTop:'20px'}}>    
              {name}
            </div>

            <div style={{fontSize:'15px', marginTop:'20px'}}>
              {email}
            </div> 

            <i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "20px", paddingRight:'50px' }}
              onClick={() => props.clickHander(id)}
            >
            </i>
        </div>
        </Link>
    </div>
  );
};

export default ContactCard;
