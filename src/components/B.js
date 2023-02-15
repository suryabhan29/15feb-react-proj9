//1. import area
import React, { Component } from "react"

import C from "./C";



// class defination area
// lets define another component
export class B extends Component{
    //1. properties


    //2. constructor


    //3. Method
    // Every class component must have render method
    // render method is return some html
    render(){
     return (
                <React.Fragment>
                    <div>suryabhan singh sisodiya {this.props.data3}</div>
                    <C data4={this.props.data3}></C>
     
                </React.Fragment>

                );
     
     
     
    }
  }


 // 3. Export area 