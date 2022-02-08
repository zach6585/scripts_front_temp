import { Component } from 'react';

import {goForward, goBack} from '../../../actions/page';

import { connect } from 'react-redux';

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
import Page12 from './pages/page12';
import Page13 from './pages/page13';
import Page14 from './pages/page14';

import larrow from "../pictures/larrow.png";
import rarrow from "../pictures/rarrow.png";
import './script11.css'; 
import '../allScripts.css';



class Script11List extends Component {

    state = {button_use: {button_back: false, button_forward: true}, 
    component_list: [<Page1 />, <Page2/>, <Page3 />, <Page4/>, <Page5 />, <Page6/>, <Page7 />, <Page8/>, <Page9 />, <Page10 />, <Page11 />, <Page12 />, <Page13 />, <Page14 />]}
    
      
    handleClick = (letter) => {//This determines which button was pressed
      window.scroll({top:0,behavior:'smooth'});
      if (letter === 'b'){
        this.props.goBack();
      }
      else {
        this.props.goForward();
      }
      
    }
    render() {
      return(
      <div>{this.state.component_list[this.props.pageNum-1]}
        <div id="buttonDiv">
          {this.props.pageNum === 1 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handleClick('b')} className="left page_button"/>}
          {this.props.pageNum === this.state.component_list.length  ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handleClick('f')} className="right page_button"/>}
        </div>
        <h3 className="page_num">{this.props.pageNum}</h3>
      </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    pageNum: state.pages.pageNumber,
    texts: state.texts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goForward: () => dispatch(goForward()),
    goBack: () => dispatch(goBack())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Script11List);
