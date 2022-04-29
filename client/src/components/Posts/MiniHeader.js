
import classes from './MiniHeader.module.css';
import EditOrRemoveBtns from '../EditNRemoveOps/EditOrRemoveBtns';
import UserContext from '../../store/user-context';
import { useContext } from 'react';
import Persona from "./persona.png";

const MiniHeader = (props) => {
  const userContext = useContext(UserContext);
  let subredditColor;
  switch(props.subreddit) {
    case "funny":
      subredditColor = classes.green;
      break;
    case "memes":
      subredditColor = classes.orange;
      break;
    case "cute":
      subredditColor = classes.pink;
      break;
    default:
      
      subredditColor = '';
  }
  return (
    <div className={classes.container}>
      <div className={classes.t_container}>
          <img className={classes.persona_img} id={subredditColor} src={Persona} alt="temp"/>
          <p className={classes.miniHdrTxt}>r/Subleadit | Posted by  Myra</p>
          {/* possible temporary placement...*/}
      </div>
      {/* Also need to make sure this Post's author ID is the same as the current logged in user's */}
      {userContext.isLoggedIn && userContext.user_id === props.author_id && <EditOrRemoveBtns post_id={props.post_id} onRemovePost={props.onRemovePost}/>}
    </div>
  );
}

export default MiniHeader;
