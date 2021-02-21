import React from 'react';
import { Form, Field } from 'react-final-form';
import {autorizationUser} from './../../Redux/auth-reducer';


const LoginForm = (props) => (
   <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               <Field name="Email" component="input" placeholder="Email" />
            </div>
            <div>
               <Field name="Password" component="input" placeholder="Password" />
            </div>
            <div>
               <Field name="RememberMe" component="input" type="checkbox" /> remember me
            </div>
            <div>
               <button type="submit" >Sign in</button>
            </div>
         </form>
      )}
   />
)

const Login = (props) => {
   const onSubmit = ( formData ) => {
      autorizationUser(formData.Email, formData.Password, formData.RememberMe);
   }
   return <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
   </div>
}

export default Login;