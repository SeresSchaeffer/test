import React,{Component} from "react";


export default class MsgBox extends Component{
    /*
    constructor(props){
        super(props)
    }
    */

    render(){
        const divStyle = {
            margin:'10px',
            padding:'5px',
            color:this.props.color,
            backgroundColour:this.props.bgcolor,
            frontSize:this.props.frontSize,
            border:this.props.border
        }

        return <div style={divStyle}>{this.props.text}</div>
    }
}
/*
export default function MsgBox2(props){
    
    constructor(props){
        super(props)
    }
    

        const divStyle = {
            margin:'10px',
            padding:'5px',
            color:this.props.color,
            backgroundColour:this.props.bgcolor,
            frontSize:this.props.frontSize,
            border:this.props.border
        }

        return <div style={divStyle}>{this.props.text}</div>
}
*/