import React from 'react';
import { Form, Field } from 'react-final-form';
import {autorizationUser} from './../../Redux/auth-reducer';
import Input from './../Common/FormsControls/Input';
import {required} from './../../utils/validators/validators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import classes from './../Common/FormsControls/FormsControls.module.css';



const LoginForm = (props) => (
   <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               Email: <Field name="Email" component={Input} placeholder="Email" 
               validate={required} />
            </div>
            <div>
               Password: <Field name="Password" component={Input} type="password" placeholder="Password" 
               validate={required} />
            </div>
            <div>
               <Field name="RememberMe" component={Input} type="checkbox" /> remember me
            </div>
               {(props.authError) 
                  ? <span className={classes.formAuthError}>{props.authError}</span> 
                  : undefined
               }
            <div>
               <button type="submit" >Sign in</button>
            </div>
         </form>
      )}
   />
)

const Login = (props) => {
   const onSubmit = ( formData ) => {
      props.autorizationUser(formData.Email, formData.Password, formData.RememberMe);
   }

   if(props.isAuth) {
      return <Redirect to={"/profile"}/>
   }

   return <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} authError={props.authError} />
   </div>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   authError: state.auth.authError
})

export default connect(mapStateToProps, {autorizationUser})(Login);