import classes from './PostViewOpts.module.css';
import { CgComment } from "react-icons/cg";


const PostViewOpts = (props) => {
	return (
		<div className={props.className}>
			<button className={classes.comments_btn}>
				
				<CgComment size={18} className={classes.icon}/><p>Comments</p>
			</button>
			
		</div>
	);
}

export default PostViewOpts;