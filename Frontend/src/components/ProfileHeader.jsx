import React from "react";
import { BiEdit } from "react-icons/bi";

const Profile=() =>{
  return <div>
    <div className="profile--header">
      <h2 className="header--title">Profile</h2>
      <div className="edit">
        <BiEdit className='icon'></BiEdit>
      </div>
    </div>
  </div>;
}

export default Profile;