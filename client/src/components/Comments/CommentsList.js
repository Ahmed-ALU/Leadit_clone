import classes from './CommentsList.module.css';
import CommentItem from './CommentItem';


const CommentsList = ({commentsData}) => {
  return (
    <div className={classes.container}>
        {/* List of "root" comments */}
        <CommentItem/>
        <CommentItem/>
        <CommentItem/>
    </div>
  );
}

export default CommentsList;
