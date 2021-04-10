import React from 'react';
import { Form, Field } from 'react-final-form';
import { autorizationUser } from './../../Redux/auth-reducer';
import Input from './../Common/FormsControls/Input';
import { required } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './../Common/FormsControls/FormsControls.module.css';
import loginClasses from './Login.module.css';



const LoginForm = (props) => (
   <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div className={classes.item}>
               Email: <Field name="Email" component={Input} placeholder="Email"
                  validate={required} />
            </div>
            <div className={classes.item}>
               Password: <Field name="Password" component={Input} type="password" placeholder="Password"
                  validate={required} />
            </div>
            <div className={classes.itemCheckbox}>
               <Field name="RememberMe" component={Input} type="checkbox" /> <span>Remember me</span>
            </div>
            {(props.authError)
               ? <span className={classes.formAuthError}> {props.authError} </span>
               : undefined
            }
            { props.captchaUrl && <div><img src={props.captchaUrl}/></div>}
            { props.captchaUrl && 
               <Field name="captcha" component={Input} placeholder="Symbols from image"  validate={required}/>}
            <div>
               <button className={classes.button} type="submit" >Sign in</button>
            </div>
         </form>
      )}
   />
)

const Login = (props) => {
   const onSubmit = (formData) => {
      props.autorizationUser(
         formData.Email, 
         formData.Password, 
         formData.RememberMe, 
         formData.captcha
      );
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <div className={loginClasses.container}>
      <div className={loginClasses.title}>Authorization</div>
      <LoginForm 
         onSubmit={onSubmit} 
         authError={props.authError}
         captchaUrl={props.captchaUrl} />
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   authError: state.auth.authError,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { autorizationUser })(Login);