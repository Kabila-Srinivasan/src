import  Link  from '@mui/material/Link';
import React, {useState} from 'react'
import "./hstyle.css"


function Forgot() {
  const [Email,setEmail]=useState('');//State creation//
  const [Password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const formhandler=(event)=>
  {
    event.preventDefault();//For auto submit//
    if(Email.length===0 && Password.length===0)
    {
      setError(true);
    }
    if(Email && Password)
    {
    const forgotObj={
      email:Email,
      pwd:Password
    }
    console.log(forgotObj);
    alert("Passsword is changed successfully");
    //axios.post(url/obj)//
    }
  }
  return (
    <div>
    <div class="imge">
    <br/>
    <div class="loginin">Reset Your Password</div>
    <div class="formii">
    <form onSubmit={formhandler}>
    <div class="b1">
    E-mail-Id: <br/><input type="text" placeholder="Email" on onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    {error && Email.length===0?
    <label style={{color:'red'}}>
    Email is required</label>:""}
    </div>
    <div class="b2">
    New Password:<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be min 8 characters required</label>:""}
    </div>
    <br/>
    <div class="b3">
    Confirm Password:<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be min 8 characters required</label>:""}
    </div>
    <br/>
    <div class="kb">
    <button type="submit"><h3>Reset</h3></button>
    </div>
    <br/><br/>
    </form>
    </div>
    <div class="sigii">
    <h4>
    <br/>
    <Link href="/login">Login</Link>
    </h4>
    </div>
    </div>
  </div>
  )
}

export default Forgot;