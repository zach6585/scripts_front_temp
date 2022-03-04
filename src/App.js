import { Component } from 'react';
import { connect } from 'react-redux';


import { getTexts, changeTexts } from './actions/text';
import { userLogout, autoLogin } from './actions/user';
import { flushMenteeList,changeMentee } from './actions/mentee';
import { toggleCommentMode } from './actions/comment';
import { goToSpecificPage } from './actions/page';


import hamburgerMenu from "./components/scripts/pictures/hamburger_menu.png";


import './App.css';
import './components/scripts/allScripts.css';



import Script1List from './components/scripts/script1/componentlist';
import Script2List from './components/scripts/script2/componentlist';
import Script3List from './components/scripts/script3/componentlist';
import Script4List from './components/scripts/script4/componentlist';
import Script5List from './components/scripts/script5/componentlist';
import Script6List from './components/scripts/script6/componentlist';
import Script7List from './components/scripts/script7/componentlist';
import Script8List from './components/scripts/script8/componentlist';
import Script9List from './components/scripts/script9/componentlist';
import Script10List from './components/scripts/script10/componentlist';
import Script11List from './components/scripts/script11/componentlist';
import Script12List from './components/scripts/script12/componentlist';
import Script13List from './components/scripts/script13/componentlist';
import Script14List from './components/scripts/script14/componentlist';
import Script15List from './components/scripts/script15/componentlist';
import Script16List from './components/scripts/script16/componentlist';

import Users from './components/users/users.js';
import Mentees from './components/mentees/mentees';


class App extends Component {
  
  state = {
    componentList: [<Script1List />, <Script2List />, <Script3List />, <Script4List />, <Script5List />, <Script6List />, <Script7List />, <Script8List />, <Script9List />, <Script10List />, <Script11List />, <Script12List />, <Script13List />, <Script14List />, <Script15List />, <Script16List />], 
    currComponent: null,
    buttonList: [],
    pageList: [],
    hamburger_is_clicked: false,
    options: '',
    page_counts: {"1": 18, "2": 13, "3": 13, "4": 13, "5": 11, "6": 15, "7": 17, "8": 12, "9": 18, "10": 17, "11": 14, "12": 17, "13": 14, "14": 13, "15": 12, "16": 12}
  }

  onScrollCloseHamburger = () => {
    //I want to make it so that when you scroll the hamburger menu closes so this function does that
    this.setState({hamburger_is_clicked: false, options: ''});
  }

  componentDidMount = () => {
    if (localStorage.getItem("token")){
      this.props.autoLogin();
    }
    this.makeButtons("button");
    window.addEventListener('scroll', this.onScrollCloseHamburger);
  }

  hamburgerClick = (event) => {
    //Opens and closes the hamburger menu through spinning it as well as if the menu is opened through this adds options to click
    if (this.state.hamburger_is_clicked === true){
        this.setState({hamburger_is_clicked: false, options: ''})
    }
  
    else if (this.state.hamburger_is_clicked === false){
      // if (this.props.user.user_id === 5 || this.props.user.user_id === 1){
      //   this.setState({hamburger_is_clicked: true,
      //       options: 
      //       <div id="hamburger_menu_ps_div">
      //           <p onClick={event => this.menuItemHandleClick(event, 1)}>Change Script    |</p>
      //           <p onClick={event => this.menuItemHandleClick(event, 2)}>Change Mentee    |</p>
      //           <p onClick={event => this.menuItemHandleClick(event, 3)}>Logout    |</p>
      //           <p onClick={event => this.menuItemHandleClick(event, 4)}>Add a comment</p>
      //       </div>
      //     })
      // }
      // else {
        this.setState({hamburger_is_clicked: true,
          options: 
          <div id="hamburger_menu_ps_div">
              <p onClick={event => this.menuItemHandleClick(event, 1)}>Change Script    |</p>
              <p onClick={event => this.menuItemHandleClick(event, 2)}>Change Mentee    |</p>
              <p onClick={event => this.menuItemHandleClick(event, 3)}>Logout    |</p>
              <p onClick={event => this.menuItemHandleClick(event, 4)}>Pick specific page</p>
          </div>
        })
      }  
    // }
  }
  
  menuItemHandleClick = (e, choice) => {
    //For the hamburger menu
    if (choice === 1){
      this.setState({hamburger_is_clicked: false, options: ''});
      this.makeButtons("button");
      this.props.changeTexts();
      this.props.goToSpecificPage(1);
      // this.props.changeScript(-1, this.props.currentMentee);
      // this.props.changePage(-1, this.props.currentMentee);
    }
    else if (choice === 2){
      this.setState({hamburger_is_clicked: false, options: ''});
      this.makeButtons("button");
      this.props.changeTexts();
      this.props.changeMentee();
      
    }
    else if (choice === 3){
      this.setState({hamburger_is_clicked: false, options: ''});
      this.makeButtons("button");
      this.props.changeTexts();
      this.props.flushMenteeList();
      this.props.userLogout();
    }
    else if (choice === 4) {
      this.setState({hamburger_is_clicked: false, options: ''});
      this.makeButtons("pages");
    }
  }
  
  handleClick = (script_number) => {//Once a button is clicked, it takes you to the coresponding component. Origin determines if it was a button or in render
    this.setState({buttonList: []});
    this.setState({currComponent: this.state.componentList[script_number]})
    this.props.getTexts({script_number: parseInt(script_number) + 1, mentee_id: this.props.mentees.current_mentee_id});
  }

  handlePageButtonClick = (pageNumber) => {
    this.setState({pageList: []});
    this.props.goToSpecificPage(pageNumber);
  }

  makeButtons = (origin) => {//Makes the button list depending on the componenents present in the componenet list
    
    if (origin === "button"){
      for (let i = 1; i < this.state.componentList.length + 1; i++){
        this.setState((prevstate) => ({buttonList: prevstate.buttonList.concat(<button key={i-1} onClick={() => this.handleClick((i-1).toString())}>Script {i}</button>)}));
      } 
    }
    else if (origin === "pages"){
      
      for (let i = 1; i < this.state.page_counts[this.props.texts.currentScript]; i++){
        this.setState((prevstate) => ({pageList: prevstate.pageList.concat(<button key={i-1} onClick={() => this.handlePageButtonClick(i)}>Page {i}</button>)}))
      }
    }
  }

  render() {
    console.log(this.props.pages.pageNumber)
    if (this.state.pageList.length !== 0){
      
      return(
        <div>
          {this.state.pageList}
        </div>
        
      )
    } 
    else if (localStorage.getItem("token")){
      if (this.props.mentees.current_mentee_id === -1){
        if (this.props.mentees.mentees === null){
          return(<h1>Loading</h1>)
        }
        else{
          
          return(
            <Mentees />
          )
        }
      }
      else if ((this.props.texts_loading)){
        return(
          <h1>Loading</h1>
        )
      }

      else {
        if ((this.props.texts.curatedTextsFromCurrentScript === null)){
          return (
              <div>
                {this.state.buttonList}
              </div>
            )
        }
        else{
          return(
            <div>
              {this.state.currComponent}
              <div className="hamburger_menu_div">
                    {this.state.options}
                    <img className={this.state.hamburger_is_clicked ? "rotate" : "no_rotate"} src={hamburgerMenu} alt="Hamburger menu icon" onClick={(event) => this.hamburgerClick(event)} />
              </div>
            </div>
          )
          }
      }
    }
    else{
      return(
        <Users />
        )
      }
  }
} 


const mapStateToProps = state => {
  return{
    pages: state.pages,
    texts: state.texts,
    user: state.user,
    mentees: state.mentees,
    texts_loading: state.texts.loading, 
    comments: state.comments.comments,
    commentMode: state.comments.commentMode
    
    
  }
}

const mapDispatchToProps = dispatch => {
  return{
      getTexts: (script_number) => dispatch(getTexts(script_number)),
      changeTexts: () => dispatch(changeTexts()),
      userLogout: () => dispatch(userLogout()),
      flushMenteeList: () => dispatch(flushMenteeList()),
      autoLogin: () => dispatch(autoLogin()),
      changeMentee: () => dispatch(changeMentee()),
      toggleCommentMode: () => dispatch(toggleCommentMode()),
      goToSpecificPage: (pageNum) => dispatch(goToSpecificPage(pageNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
