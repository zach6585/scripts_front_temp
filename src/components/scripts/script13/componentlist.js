import { Component, lazy, Suspense } from 'react';

import {goForward, goBack} from '../../../actions/page';
import { goToSpecificPage } from '../../../actions/page';

import { connect } from 'react-redux';

import larrow from "../pictures/larrow.png";
import rarrow from "../pictures/rarrow.png";
import retToBeg from "../pictures/backtobeginning.svg";
import './script13.css';
import '../allScripts.css';

const Page1 = lazy(() => import('./pages/page1'));
const Page2 = lazy(() => import('./pages/page2'));
const Page3 = lazy(() => import('./pages/page3'));
const Page4 = lazy(() => import('./pages/page4'));
const Page5 = lazy(() => import('./pages/page5'));
const Page6 = lazy(() => import('./pages/page6'));
const Page7 = lazy(() => import('./pages/page7'));
const Page8 = lazy(() => import('./pages/page8'));
const Page9 = lazy(() => import('./pages/page9'));
const Page10 = lazy(() => import('./pages/page10'));
const Page11 = lazy(() => import('./pages/page11'));
const Page12 = lazy(() => import('./pages/page12'));
const Page13 = lazy(() => import('./pages/page13'));
const Page14 = lazy(() => import('./pages/page14'));

class Script13List extends Component {

  state = {
    component_list: [<Page1 />, <Page2/>, <Page3 />, <Page4/>, <Page5 />, <Page6/>, <Page7 />, <Page8/>, <Page9 />, <Page10 />, <Page11 />, <Page12 />, <Page13 />, <Page14 />]
  }
  
    
  handleClick = (letter) => {//This determines which button was pressed
    window.scroll({top:0,behavior:'smooth'});
    if (letter === 'b'){
      this.props.goBack();
    }
    else if (letter === "f") {
      this.props.goForward();
    }
    else if (letter === "r"){
      this.props.goToSpecificPage(1);
    }
    
  }
  render() {
    return(
      <Suspense fallback={<h1>Loading...</h1>}>
        {this.state.component_list[this.props.pageNum-1]}
        <div id="buttonDiv">
          {this.props.pageNum === 1 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handleClick('b')} className="left page_button"/>}
          {this.props.pageNum === this.state.component_list.length  ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handleClick('f')} className="right page_button"/>}
          {this.props.pageNum === this.state.component_list.length ? <img alt="Back to beginning" src={retToBeg} onClick={() => this.handleClick("r")} className="right page_button" /> : null} 
        </div>
        <h3 className="page_num">{this.props.pageNum}</h3>
      </Suspense>
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
  goBack: () => dispatch(goBack()),
  goToSpecificPage: (pageNumber) => dispatch(goToSpecificPage(pageNumber))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Script13List);
