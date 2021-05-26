import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Dialog, DialogContent } from '@material-ui/core';

const Login = (props) => {
  const {setUsername, updateStatus} = props
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // const updateStatus = (newState) => {
  //   props.updateStatus(newState)
  // }

  const handleToggle = () => {
    setOpen(!open);
  };

  const login = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/users/login', {
      // https://plant-server.vercel.app/users/login
      email: email,
      password: pass
    }).then((res) => {

      if(res.data.message){
        console.log("failure", props, res)
      } else {
        updateStatus(true)
        setUsername(res.data[0].name)
        handleToggle()
        console.log("success", props, res)
      }
    })
  }



  return (
    <div>
      <Button color="primary" onClick={handleToggle}>
        Login
      </Button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
          <h1 className='header'>LOGIN</h1> 
        <DialogContent dividers>
        <form className='form'
          // onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
          <label>Email</label>
          <input 
              id="email" 
              // value={this.state.mpg} 
              onChange={(e) => {setEmail(e.target.value)}} 
              required />
          <label>Password</label>
          <input 
              id="passowrd" 
              type="password"
              // value={this.state.cylinders} 
              onChange={(e) => {setPass(e.target.value)}} 
              required />
          <br />
          <button onClick={login} type="submit">Login</button>
      </form>
      {/* <p>{setLoggedIn}</p> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login
