import { Component } from 'react';
// import axios from 'axios';

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
// import Page5 from './pages/page5';
// import Page6 from './pages/page6';
// import Page7 from './pages/page7';
// import Page8 from './pages/page8';
// import Page9 from './pages/page9';
// import Page10 from './pages/page10';
// import Page11 from './pages/page11';
// import Page12 from './pages/page12';
// import Page13 from './pages/page13';

import larrow from "../pictures/larrow.png";
import rarrow from "../pictures/rarrow.png";
import './dummy.css';
import '../allScripts.css';


class ScriptDummyList extends Component {

  state = {
    submitButton: null,
    pagePos: 0,
    component_list: [<Page1 />, <Page2 />, <Page3 />, <Page4 />]
  }   

    handleClick = (letter) => {//This determines which button was pressed
    if (letter === 'b'){
      this.setState((prevState) => ({pagePos: prevState.pagePos - 1}))
    }
    else {
      this.setState((prevState) => ({pagePos: prevState.pagePos + 1}))
    }
    
  }

  componentDidMount(){
    console.log(this.state.component_list)
  }

    render() {
      return(
        <div className="Script2">
         {this.state.component_list[this.state.pagePos]}
         <div id="buttonDiv">
           {this.state.pagePos === 0 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handleClick('b')} className="left arrow button"/>}
           {this.state.pagePos === this.state.component_list.length - 1 ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handleClick('f')} className="right arrow button"/>}
         </div>
         <h3 className="page_num">{this.state.pagePos + 1}</h3>
       </div>
      )
    }
  }



export default ScriptDummyList;

// componentPropsAssigner = () => {
    //   //This assigns the needed props to each child component so I don't have to write it out every time
    //   let component_list_before_adding_props = 
    //   let final_component_list = component_list_before_adding_props.map((child, i) => {
    //      return (
    //       React.cloneElement(
    //         child, 
    //           {
    //             // handleChangeInContentEditable: this.handleChangeInContentEditable, 
    //             // handleContentEditableClick: this.handleContentEditableClick, 
    //             // handleSubmit: this.handleSubmit, 
    //             // handleChange: this.handleChange, getValue: this.getValue, 
    //             //All of the above functions should be taken care of through redux instead so we'd use connect
    //             // submitButton: this.state.submitButton,
    //             // pages: this.props.pages.pagesChosen,
    //             // texts: this.props.texts.curatedTextsFromCurrentScript
    //           }
    //         ))
    //       })
    //       return final_component_list
    //   }

      /*      Functions passed as props      */


 
  
  // handleContentEditableClick = (event) => {
  //   if (this.state.submitButton === null){
  //       this.setState({submitButton: <button onClick={event => this.handleSubmit(event)} className="website_change_submit_button">Submit Changes</button>});
  //   }
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.patch(`http://localhost:3001/pages/${this.state.PageID}`, {content: this.state.content})
  //   this.setState({submitButton: null })
  // }

  // handleChange = (event) => {
  //   //Handles change in text data 
  //   this.setState({text: {...this.state.text, [event.target.id]: {value: event.target.value, id_tag: event.target.id}}})
  //   if (event.target.id in this.state.text){
  //       axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: this.state.script})
  // }
  //   else {
  //       axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: this.state.script })
  //   }
  // }


  // getValue = (id) => {
  //     for (const i in this.state.text){
  //         if (this.state.text[i].id_tag === id){
  //             return this.state.text[i].value;
  //         }
  //     }
  //     return ""
  // }






  
// class ThingsRendered extends Component{
//   //The purpose of this class is to allow for a ternary operator to be used to determine when to load the components
//   constructor(props){
//     super(props)
//     this.state = {
//       button_use: {button_back: false, button_forward: true},    
//       pagePos: 0,
//       component_list: props.component_list
//     }
//   }




  

//   /*                Render                        */
//   render(){
//     return(
//       <div className="Script2">
//         {this.state.component_list[this.state.pagePos]}
//         <div id="buttonDiv">
//           {this.state.pagePos === 0 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handleClick('b')} className="left arrow button"/>}
//           {this.state.pagePos === this.state.component_list.length - 1 ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handleClick('f')} className="right arrow button"/>}
//         </div>
//         <h3 className="page_num">{this.state.pagePos + 1}</h3>
//       </div>
//     )
//   }
// }