import { Component } from 'react';

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page9 from './pages/page9';
import Page10 from './pages/page10';
import Page11 from './pages/page11';

import larrow from "../pictures/larrow.png";
import rarrow from "../pictures/rarrow.png";
import './script5.css';
import '../allScripts.css';


class Script5List extends Component {

    state = {button_use: {button_back: false, button_forward: true}, 
    component_list: [<Page1 />, <Page2/>, <Page3/>, <Page4/>, <Page5/>, <Page6/>, <Page7/>, <Page8/>, <Page9/>, <Page10/>, <Page11/>], 
    pagePos: 0}
    
    handleClick = (letter) => {//This determines which button was pressed
      window.scroll({top:0,behavior:'smooth'});
      if (letter === 'b'){
        this.setState((prevState) => ({pagePos: prevState.pagePos - 1}))
      }
      else {
        this.setState((prevState) => ({pagePos: prevState.pagePos + 1}))
      }
      
    }
    render() {
      return(
      <div className="Script5">{this.state.component_list[this.state.pagePos]}
        <div id="buttonDiv">
          {this.state.pagePos === 0 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handleClick('b')} className="left page_button"/>}
          {this.state.pagePos === this.state.component_list.length - 1 ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handleClick('f')} className="right page_button"/>}
        </div>
        <h3 className="page_num">{this.state.pagePos + 1}</h3>
      </div>
      )
    }
  }

export default Script5List;
