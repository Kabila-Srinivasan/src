import  Link  from '@mui/material/Link';
import React, {useState} from 'react'
import "./hstyle.css"


function Signin() {
  const [Username,setUsername]=useState('');//State creation//
  const [Email,setEmail]=useState('');
  const [Mobileno,setMobileno]=useState('');
  const [Password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const formhandler=(event)=>
  {
    event.preventDefault();//For auto submit//
    if(Username.length===0 && Password.length===0 && Email.length===0 && Mobileno.length===0)
    {
      setError(true);
    }
    if(Username && Password)
    {
    const signinObj={
      name:Username,
      email:Email,
      mobileno:Mobileno,
      pwd:Password
    }
    console.log(signinObj);
    alert(JSON.stringify(signinObj));
    //axios.post(url/obj)//
    }
  }
  return (
    <div>
    <div class="imga">
    <div class="loginin">
    Sign in
    </div>
    <div class="formi">
    <form onSubmit={formhandler}>
    <div class="e1">
    <br/>
   Username:<input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
   <br/><br/>
   {error && Username.length===0?
   <label style={{color:'red'}}>
   Username is required</label>:""}
   </div>
    <div class="e2">
    E-mail-Id: <input type="text" placeholder="Email" on onChange={(e)=>setEmail(e.target.value)}/>
    <br/><br/>
    {error && Email.length===0?
    <label style={{color:'red'}}>
    Email is required</label>:""}
    </div>
    <div class="e3">
        Mobile-no:<input type="number" placeholder="Number" onChange={(e)=>setMobileno(e.target.value)}/>
    <br/><br/>
    {error && Mobileno.length>0 && Mobileno.length<10?
    <label style={{color:'red'}}>
    Mobileno must be minimum 10 numbers required</label>:""}
    </div>
    <div class="e4">
        Password: <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be min 8 characters required</label>:""}
    </div>
    <br/>
    <button type="submit"><h3>Submit</h3></button>
    <br/><br/>
   
    </form>
    </div>
    <div class="sigi">
    <h4>
    <br/>
    Already have an account?
    <Link href="/login">Login</Link>
    </h4>
    </div>
    </div>
  </div>
  )
}

export default Signin