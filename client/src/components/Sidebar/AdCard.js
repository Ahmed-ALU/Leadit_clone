
import classes from './AdCard.module.css';
import Alu_students from './Alu_students.jpg'
import  Graduate from './Graduate.webp';
const AdCard = (props) => {
  return (
      <img className={classes.wrapper} src={Graduate} alt="Logo"/>
  );
}

export default AdCard;