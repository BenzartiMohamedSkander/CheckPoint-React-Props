import React from 'react'
import PropTypes from "prop-types";


 function Profile(props) {
   const styleObject = {color:"blue"}
    return (
        <div>
            







  <div className="container" >
  <h2 style={styleObject}>Profile Page</h2>
  <br/><br/>
  <div className="card" style={{width:"400px"}}>
    <img className="card-img-top" src={props.children} alt="Card" style={{width:"100%"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.fullName}</h4>
      <h6 className="card-title">{props.profession}</h6>
      <p className="card-text">{props.bio}</p>
      <a href="#" className="btn btn-primary" onClick= {()=>props.handelName(props.fullName)}>See Profile</a>
    </div>
  </div>
  <br/>
  

</div>
        </div>
    )
}

Profile.defaultProps ={
    bio: "No Data Description",
}

Profile.propTypes = {
  
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio: PropTypes.string,
    handelName: PropTypes.func
    
   };
export default Profile