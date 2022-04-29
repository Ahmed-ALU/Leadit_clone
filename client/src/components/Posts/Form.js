import { Fragment, useState } from 'react';
import classes from './Form.module.css';
import PostForm from './PostForm';

import PostOpts from './PostOpts';

const Form = (props) => {
  const [formType, setFormType] = useState("TEXT");
	const formChangeHandler = (formChoice) => {
		setFormType(formChoice)
	}
  return (
    <Fragment>
    {/* Takes in the user's input */}
      {(formType == "TEXT") && <PostForm submissionHandlers={props.submissionHandlers} formType={formType} onSetFormType={formChangeHandler}/>}
     
    </Fragment>
  );
}

export default Form;
