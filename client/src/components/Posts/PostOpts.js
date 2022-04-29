import { useState } from 'react';
import classes from './PostOpts.module.css';

const PostOpts = (props) => {
  // B/c whole component gets re-rendered when state change, this should init the 'selected's.
  let pSelected = "", IVSelected = "", lSelected = "";
  switch(props.formType) {
    case "TEXT":
      pSelected = classes.selected;
      break;
    case "IV":
      IVSelected = classes.selected;
      break;
    case "LINK":
      lSelected = classes.selected;
      break;
    default:
      // continue
  }
  const optionChangedHandler = (event) => {
    if (event.target.name == "TEXT") {
      props.onSetFormType("TEXT")
    } else if (event.target.name == "IV") {
      props.onSetFormType("IV")
    } else if (event.target.name == "LINK") {
      props.onSetFormType("LINK")
    }
  }
  return (
    <div className={classes.container}>
        <button name="TEXT" type="button" className={classes.button} id={pSelected} onClick={optionChangedHandler}>Post</button>
       
    </div>
  );
}

export default PostOpts;
