import  Link  from '@mui/material/Link';
import React from 'react'
import './hstyle.css'
export default function Welcome() {
  return (
    <div class="h11">
    <div class="welcome">
    <h1>MAKE MY TRAVEL</h1> 
    <br/> <br/>
    </div> 
    <div class="tour">
    Tour packages exploring South India
    </div> 
    <div class="on">
        <div class="d1">
            
        </div> 
        <div class="d2">
            
            
            </div>
        <div class="d3">
            
            
        </div>
        
    </div> 
    <div class="pack">
    <Link href="/tourpackage">Show Packages</Link>
    </div>
    </div>
  )
}