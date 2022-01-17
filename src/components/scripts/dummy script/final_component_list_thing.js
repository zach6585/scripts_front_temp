import { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import axios from 'axios';

import larrow from "../pictures/larrow.png";
import rarrow from "../pictures/rarrow.png";
import './dummy.css';
import '../allScripts.css';



class ScriptDummyList extends Component {

    state = {
        button_use: {button_back: false, button_forward: true}, 
    pagePos: 1,
    submitButton: null,
    scriptID: '', allPages: {}, allTexts: {}, dataIsLoaded: false, currComponent: null } 
    
    async componentDidMount() {
      this.setState({allPages: this.props.scripts, allTexts: this.props.texts, dataIsLoaded: true, currComponent: <ThingsRendered individual_script_that_will_be_rendered={this.props.scripts.find(script => {return script.page_number === "1"})} />} ) 
    }


    
    handlePageButtonClick = (letter) => {//This determines which button was pressed
      if (letter === 'b'){
        this.setState((prevState) => ({pagePos: prevState.pagePos - 1, 
            currComponent: <ThingsRendered script={this.state.allPages.find(element => {
                return element.page_number === (prevState.pagePos-1).toString();
            }).content} /> }))
      }
      else {
        this.setState((prevState) => ({pagePos: prevState.pagePos + 1, 
          currComponent: <ThingsRendered script={this.state.allPages.find(element => {
              return element.page_number === (prevState.pagePos+1).toString();
          }).content} /> }))
      }
      
      
    }

    render() {

      return(
        <div>
          {this.state.dataIsLoaded ? this.state.currComponent : <h1>loading</h1>}
            <div id="buttonDiv">
            {this.state.pagePos === 1 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handlePageButtonClick('b')} className="left arrow button"/>}
            {this.state.pagePos === 2 ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handlePageButtonClick('f')} className="right arrow button"/>}
            </div>
            <h3 className="page_num">{this.state.pagePos}</h3>
        </div>
      )
    }
  }


class ThingsRendered extends Component{
  state = {
    content: '',
    submitButton: null,
    scriptID: ''
  }

  componentDidMount() {
    this.setState({content: this.props.individual_script_that_will_be_rendered.content, scriptID: this.props.individual_script_that_will_be_rendered.id})
  }

  handleContentEditableClick = (event) => {
    if (this.state.submitButton === null){
        this.setState({submitButton: <button onClick={event => this.handleSubmit(event)} className="website_change_submit_button">Submit Changes</button>});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.scriptID)
    axios.patch(`http://localhost:3001/scripts/${this.state.scriptID}`, {content: this.state.content})
    this.setState({submitButton: null })
  }

  handleChange = (event) => {
    this.setState({content: event.target.value})
  }

  render(){
    return(
      <div>
          <ContentEditable onClick={event => this.handleContentEditableClick(event)} onChange={event => this.handleChange(event)} html={this.state.content} />
          {this.state.submitButton}
      </div>
    )
  }
}




export default ScriptDummyList;
