import classes from './CreateButton.module.css';
import { Link } from 'react-router-dom';
import plus from './plus.png';

const CreateButton = (props) => {
  return (
    <div className={classes.wrapper}>
      <Link to="/new">
      <img src={plus} ></img>        
      </Link>
    </div>
  );
}

export default CreateButton;
