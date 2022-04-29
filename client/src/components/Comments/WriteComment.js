import classes from './WriteComment.module.css';
import UserContext from '../../store/user-context';
import { useContext, useState } from 'react';

const WriteComment = (props) => {
  const [enteredComment, setEnteredComment] = useState('');
  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value)
  }
  const addCommentHandler = (event) => {
    event.preventDefault();
    // props.submissionHandlers.onAddPost(enteredTitle, enteredText, author_id, author_username)

    props.onAddComment(enteredComment)
  }
  const userContext = useContext(UserContext);
  return (
    <div className={classes.container}>
        {!props.hideCommentAs && <p>Comment as <span className={classes.username}>{userContext.username}</span></p>}
        {props.hideCommentAs && <span className={classes.tempHack}/>}
        <form>
            <textarea type="text" className={classes.comment_area} placeholder="Write here" value={enteredComment} onChange={commentChangeHandler}/>
        </form>
        <button className={classes.post_button} onClick={addCommentHandler}>Post Comment</button>
        {props.showCancelOpt && <button className={classes.postCmt} onClick={props.onCancel}>Cancel</button>}
    </div>
  );
}

export default WriteComment;
