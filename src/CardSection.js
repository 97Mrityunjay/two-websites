import React from "react";
import Card from "./Card";
const CardSection = ()=>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
              <Card title="LearnCodeOnline" subTitle="Quality content at affordable pricing. Home for programmers. Video Courses on latest tech in easy understandable language." buttonText="My LCO App"/>
            </div>
            <div className="col-4">
              <Card title = "iNeuron" subTitle="A leading education platform for tech education spread across multiple domains and technologies." buttonText = "My iNeuron App"/>
            </div>
            <div className="col-4">
              <Card title="MySirG Premium" subTitle="It provides awesome courses of computer programming languages. Video lessons are delivered in Hindi and explained concept in simplest way possible." buttonText="MySirG App"/>
            </div>
          </div>
        </div>
      </section>
    )
}
export default CardSection;