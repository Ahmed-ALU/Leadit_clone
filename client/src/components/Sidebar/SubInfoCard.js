import classes from './SubInfoCard.module.css';
const SubInfoCard = (props) => {
  return (
    <div className={classes.gen_container}>
			<h4 className={classes.h4}>About Community</h4>
			<p>This is a community of Web Developers at the African Leadership University. This platform is meant to be a quasi-replica of the Reddit platform. For more information, please contact the developers</p>
      <div className={classes.stats}>
        <div>
          <div><b>1.2m</b></div><div>Global Users</div>
        </div>
        <div>
          <div><b>2.3k</b></div><div>ALU Users</div>
        </div>
      </div>
      
      <button className={classes.group_button}>Created By Group 27</button>
    </div>
  );
}

export default SubInfoCard;
