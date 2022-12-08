import React, {useState} from 'react'


function Login() {
  const [Username,setUsername]=useState('');/*State creation*/
  const [Password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const formhandler=(event)=>
  {
    event.preventDefault();//For auto submit//
    if(Username.length==0 && Password.length==0)
    {
      setError(true);
    }
    if(Username && Password)
    {
    const loginObj={
      name:Username,
      pwd:Password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    //axios.post(url/obj)//
    }
  }
  return (
    <div>
    <h3>Login page</h3>
    <form onSubmit={formhandler}>
    Username:<input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
    <br/>
   <div>
    {error && Username.length==0?
    <label style={{color:'red'}}>
    Username is required</label>:""}
    </div>
    Password:<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <div>
    {error && Password.length>0 && Password.length<8?
    <label style={{color:'red'}}>
    Password must be min * characters required</label>:""}
    </div>
    <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login