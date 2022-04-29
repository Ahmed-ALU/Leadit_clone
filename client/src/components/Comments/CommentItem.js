import logo from '../imgs/rl2.png';
import classes from './CommentItem.module.css';
import CommentInfo from './CommentInfo';
import chat_icon from './chat_icon.png';
const CommentItem = (props) => {
  return (
    <div className={classes.container}>
        <img className={classes.chat_logo} src={chat_icon} alt="Chat Logo"/>
        {/* map its children into new comment item? can this be done recursively? */}
        <CommentInfo/>
    </div>

  );
}

export default CommentItem;
