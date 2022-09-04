import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import './asosiy.css'
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
import Part6 from "./Part6";


class Main extends React.Component{
    render(){
        return(
            <div className="asosiy">
                <Navbar/>
                <Body/>
                <Part2/>
                <Part3/>
                <Part4/>
                <Part5/>
                <Part6/>
    
            </div>
        ) 
    }
}


export default Main 