import { connect } from 'react-redux';

import { useState, useEffect } from 'react';

import { getTexts, changeTexts } from './actions/text';
import { userLogout, autoLogin } from './actions/user';
import { flushMenteeList,changeMentee, changeScript, changePage } from './actions/mentee';
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


const App = props => {
  
  const componentList = [<Script1List />, <Script2List />, <Script3List />, <Script4List />, <Script5List />, <Script6List />, <Script7List />, <Script8List />, <Script9List />, <Script10List />, <Script11List />, <Script12List />, <Script13List />, <Script14List />, <Script15List />, <Script16List />];
  const [currComponent, setCurrComponent] = useState(null);
  const [buttonList, setButtonList] = useState([]);
  const [hamburger_is_clicked, setHamburgerClicked] = useState(false);
  const [options, setOptions] = useState(null);

  const [currMen, setCurrMen] = useState(-1)

  // eslint-disable-next-line
  useEffect (() => {startFunction()}, []);

  useEffect(() => {
    setCurrMen(props.currentMentee)
  }, [props.currentMentee])

  useEffect(() => {
    if (currMen !== -1 ){
      props.changePage(props.page, props.currentMentee)
    }
    // eslint-disable-next-line
  }, [props.page])

  
  // const changeThePage = (pageNumber) => {
  //   //The reason this exists is useEffect can't have props functions so
  // }
  const startFunction = () => {
    if (localStorage.getItem("token")){
      props.autoLogin();
    }
    makeButtons();
    window.addEventListener('scroll', onScrollCloseHamburger);
    // setState({windowWidth: window.innerWidth})
  }

  const onScrollCloseHamburger = () => {
    //I want to make it so that when you scroll the hamburger menu closes so this function does that
    setHamburgerClicked(false);
    setOptions(null);
  }

  

  const hamburgerClick = (event) => {
    //Opens and closes the hamburger menu through spinning it as well as if the menu is opened through this adds options to click
    if (hamburger_is_clicked === true){
      setHamburgerClicked(false);
      setOptions(null);
    }
  
    else if (hamburger_is_clicked === false){
      if (props.user.user_id === 5){
        setHamburgerClicked(true);
        setOptions(
          <div id="hamburger_menu_ps_div">
            <p onClick={event => menuItemHandleClick(event, 1)}>Change Script    |</p>
            <p onClick={event => menuItemHandleClick(event, 2)}>Change Mentee    |</p>
            <p onClick={event => menuItemHandleClick(event, 3)}>Logout    |</p>
            <p onClick={event => menuItemHandleClick(event, 4)}>Add a comment</p>
          </div>
        )
      }
      else {
        setHamburgerClicked(true);
        setOptions(
          <div id="hamburger_menu_ps_div">
              <p onClick={event => menuItemHandleClick(event, 1)}>Change Script    |</p>
              <p onClick={event => menuItemHandleClick(event, 2)}>Change Mentee    |</p>
              <p onClick={event => menuItemHandleClick(event, 3)}>Logout</p>
          </div>
        )
      }  
    }
  }
  
  const menuItemHandleClick = (e, choice) => {
    //For the hamburger menu
    if (choice === 1){
      setHamburgerClicked(false);
      setOptions(null);
      makeButtons();
      props.changeTexts();
      props.changeScript(-1, props.currentMentee);
      props.changePage(-1, props.currentMentee);
    }
    else if (choice === 2){
      setHamburgerClicked(false);
      setOptions(null);
      makeButtons();
      props.changeTexts();
      props.changeMentee();
      
    }
    else if (choice === 3){
      setHamburgerClicked(false);
      setOptions(null);
      makeButtons();
      props.changeTexts();
      props.flushMenteeList();
      props.userLogout();
    }
    else if (choice === 4) {
      setHamburgerClicked(false);
      setOptions(null);
      props.toggleCommentMode();
    }
  }
  
  const handleClick = (script_number, origin) => {//Once a button is clicked, it takes you to the coresponding component. Origin determines if it was a button or in render
    setButtonList([]);
    console.log(props)
    setCurrComponent(componentList[script_number]);
    props.getTexts({script_number: parseInt(script_number) + 1, mentee_id: props.mentees.current_mentee_id});
    if (origin === "button"){
      props.changeScript(script_number, props.currentMentee)
    }
  }


  const makeButtons = () => {//Makes the button list depending on the componenents present in the componenet list
    for (let i = 1; i < componentList.length + 1; i++){
      setButtonList(buttonList => [...buttonList, <button key={i-1} onClick={() => handleClick((i-1).toString(), "button")}>Script {i}</button>])
    } 
  }
  
  if (localStorage.getItem("token")){
      if (props.currentMentee === -1){
        if (props.mentees.mentees === null){
          return(<h1>Loading</h1>)
        }
        else{
          
          return(
            <Mentees />
          )
        }
      }
      else if ((props.texts_loading)){
        return(
          <h1>Loading</h1>
        )
      }

      else {
        if ((props.texts.curatedTextsFromCurrentScript === null)){
          if ((props.lastMenteeScript === -1)){
            return (
              <div>
                {buttonList}
              </div>
            )
          }
          else{
            handleClick(props.lastMenteeScript, "render")
            props.goToSpecificPage(props.lastMenteePage)
            return(
              <div>
                {currComponent}
                <div className="hamburger_menu_div">
                  {options}
                  <img className={hamburger_is_clicked ? "rotate" : "no_rotate"} src={hamburgerMenu} alt="Hamburger menu icon" onClick={(event) => hamburgerClick(event)} />
                </div>
              </div>
            )
          }
        
      }
      else{
        return(
          <div>
            {currComponent}
            <div className="hamburger_menu_div">
                  {options}
                  <img className={hamburger_is_clicked ? "rotate" : "no_rotate"} src={hamburgerMenu} alt="Hamburger menu icon" onClick={(event) => hamburgerClick(event)} />
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


const mapStateToProps = state => {
  return{
    page: state.pages.pageNumber,
    texts: state.texts,
    user: state.user,
    mentees: state.mentees,
    texts_loading: state.texts.loading, 
    comments: state.comments.comments,
    commentMode: state.comments.commentMode,
    currentMentee: state.mentees.current_mentee_id,
    lastMenteePage: state.mentees.lastPage,
    lastMenteeScript: state.mentees.lastScript
    
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
      changeScript: (script_number, mentee_id) => dispatch(changeScript(script_number, mentee_id)),
      changePage: (page_number, mentee_id) => dispatch(changePage(page_number, mentee_id)),
      goToSpecificPage: (page_number) => dispatch(goToSpecificPage(page_number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
