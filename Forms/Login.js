import  Link  from '@mui/material/Link';
import React, {useState} from 'react'
import "./Login.css"


function Login() {
  const [Username,setUsername]=useState('');/*State creation*/
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  const [error,setError]=useState(false);
  const formhandler=(event)=>
  {
    event.preventDefault();//For auto submit//
    if(Username.length===0 && Password.length===0 && Email.length===0)
    {
      setError(true);
    }
    if(Username && Password)
    {
    const loginObj={
      name:Username,
      pwd:Password,
      email:Email
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    //axios.post(url/obj)//
    }
  }
  return (
    <div>
    <div class="img">
    <div class="log">
    <h1>Login</h1>
    </div>
    <div class="form">
    <form onSubmit={formhandler}>
    <div class="c1">
    <br/>
   Username:<input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
   <br/><br/>
   {error && Username.length===0?
   <label style={{color:'red'}}>
   Username is required</label>:""}
   </div>
    <div class="c2">
    E-mail-Id: <input type="text" placeholder="Email" on onChange={(e)=>setEmail(e.target.value)}/>
    <br/><br/>
    {error && Email.length===0?
    <label style={{color:'red'}}>
    Email is required</label>:""}
    </div>
    <div class="c3">
        Password:<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be minimum 8 characters required</label>:""}
    </div>
    <div class="for">
    <Link href='/forgot'>Forgot password</Link>
    </div>
    <br/>
    <button type="submit"><h3>Submit</h3></button>
    <br/><br/>
    </form>
    </div>
    <div class="sig">
    <br/>
    <Link href="/sign">New User?</Link>
    </div>
    </div>
  </div>
  )
}

export default Login