
import classes from './SubHeader.module.css';
import leadit from './leadit.png';

const SubHeader = (props) => {
  return (
      <div className={classes.subHeader}>
          <img className={classes.logo} src={leadit} alt="Logo"/>
          <div className={classes.subTitle}>
            <h1>Welcome to r/subreddit!</h1>
            <p>r/subreddit</p>
          </div>
      </div>
  );
}

export default SubHeader;
