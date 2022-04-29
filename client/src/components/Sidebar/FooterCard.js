import classes from './FooterCard.module.css';
import footer_logo from './Alu_logo.png';
const FooterCard = (props) => {
  return (
    <div className={classes.gen_container}>
      <div className={classes.linksContainer}>
        <div>
          <p>Help</p>
          <p>ALU</p>
          <p>Leading Africa Forward</p>
          <p>Computer Science</p>
          <p>Web Development</p>
          <p>ReactJS</p>
          <p>MERN</p>
        </div>
        <div style={{marginLeft: "25px"}}>
          <p>About</p>
          <p>Careers</p>          
          <p>Terms</p>
          <p>Content Policy</p>
          <p>Privacy Policy</p>
          <p>Mod Policy</p>
        </div>
      </div>
      <div className = {classes.logo_img}>
        <img src={footer_logo} alt="Footer Logo" /> 
        leadit @ ALU © 2022.        
      </div>
      

    </div>
  );
}

export default FooterCard;
