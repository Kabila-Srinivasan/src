import  Link  from '@mui/material/Link';
import React from 'react';
import "./hstyle.css"
export default function Home() {
  return (
    <div> 
    <div
    class="bg_image">
    <div class="container">
        
    <Link href="/aboutus">Aboutus</Link>
    
        
</div> 
    <h1>MAKE MY TRAVEL</h1><br/>
    <h2>To Travel is to live!</h2> <br/> <br/>
    <p>The journey of thousand miles begins with a single step.Once the Travel bug bites there is no known antidote,and I know that I shall be happily infected until the end of my life</p>
    <br/> 
    <br/> 
    <button classsName="Mybutton"><Link href="/login">Get Started</Link></button> 
    
    </div>
    </div> 

  )
}