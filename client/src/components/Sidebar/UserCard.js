import { Fragment } from "react";
import classes from './UserCard.module.css';
import redditCharacter from '../imgs/redditChar.jpg';
import user_icon from  './user_icon.png';

const UserCard = (props) => {
  return (
      <div className={classes.gen_container}> 
        <img className={classes.image_style} src={user_icon}/>
        <div className={classes.details}>
            <h3>User</h3>
            <p>User's Name<span></span></p>
        </div>
        <div className={classes.statistics_user}>
          <div><h5>Posts:</h5><p>200</p></div> 
          <div><h5>Birthday:</h5><p>7th April</p></div>
          <div><h5>Followers:</h5><p>5</p></div>
        </div>
      </div>
  );
}

export default UserCard;