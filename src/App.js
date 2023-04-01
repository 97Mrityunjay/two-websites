import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
const App = ()=>{
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <CardSection/>
            <AppSection/>
        </div>
    )
}
export default App;