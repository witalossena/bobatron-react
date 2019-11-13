import React from 'react';

const Signup = () => {
  const onSubmit = values => console.log(values)

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" required />      
      </div>   
      <div>
        <label>Password</label>
        <input type="password" name="password1"/>
      </div>
  
      <button type="submit">Sign Up</button>
    </form>
  )
}
export default Signup;