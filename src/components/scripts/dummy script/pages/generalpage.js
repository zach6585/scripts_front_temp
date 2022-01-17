import {Component} from 'react';
import ContentEditable from 'react-contenteditable';

import { connect } from 'react-redux';

import { submitButtonClicked } from '../../../../actions/page';
import { postOrPatchTexts } from '../../../../actions/text';
import '../../allScripts.css';

import larrow from "../../pictures/larrow.png";
import rarrow from "../../pictures/rarrow.png";

class GeneralPageRenderer extends Component{
    
    state = {
        page: null,
        page_content: null,
        submitButton: null,
        pageNum: 1,
        texts: this.props.texts,
        pages: this.props.pages
    }
    componentDidMount(){
        this.getPageDetails(1)
        
    }

    getPageDetails = (pageNumber) => {
        this.setState({page: null, page_content: null})
        let pageData = this.state.pages.find(page_data => {return page_data.page_number === pageNumber.toString()})
        this.setState({page: pageData, page_content: pageData.content})
    }

    handleContentClicked = (event) => {
        this.setState({submitButton: <button onClick={event => this.handleContentEditedSubmit(event)} className="website_change_submit_button">Submit Changes</button>})
    }

    handlePageButtonClick = (letter) => {//This determines which page change button was pressed
        if (letter === 'b'){
            this.getPageDetails(this.state.pageNum - 1)
            this.setState((prevState) => ({pageNum: prevState.pageNum - 1}))
          
        }
        else {
            this.getPageDetails(this.state.pageNum + 1)
            this.setState((prevState) => ({pageNum: prevState.pageNum + 1}))
        }
        
      }
    

    handleContentEditedSubmit = (event) => {
        event.preventDefault();
        this.props.submitButtonClicked({page: this.state.page, content: this.state.page_content});
        this.setState({submitButton: null})
    }

    handleTextChange = (event) => {
        //When the texts change, this is where it goes
        this.props.postOrPatchTexts({text: this.state.texts, current_text: event.target})
    }

    handleChangeInContentEditable = (event) => {
        this.setState({page_content: event.target.value})
    }

    getValue = (id) => {
        //Gets the value of the textbox.
        for (const i in this.state.texts){
            if (this.state.texts[i].id_tag === id){
                return this.state.texts[i].value;
            }
        }
        return ""
    }

    render(){
        console.log(this.state.page_content)
        if (this.state.page_content === null){
            return(
                <h1>Loading</h1>
            )
        }
        else{
        return(
            <div>
                <ContentEditable onClick={event => this.handleContentClicked()} onChange={event => this.handleChangeInContentEditable(event)} html={this.state.page_content} />
                {this.state.submitButton}
                <div id="buttonDiv">
                    {this.state.pageNum === 1 ? null :  <img alt="left arrow back" src={larrow} onClick={() => this.handlePageButtonClick('b')} className="left arrow button"/>}
                    {this.state.pageNum === this.state.pages.length ? null :  <img alt="right arrow forward" src={rarrow} onClick={() => this.handlePageButtonClick('f')} className="right arrow button"/>}
                </div>
                <h3 className="page_num">{this.state.pageNum}</h3>
            </div>
        )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitButtonClicked: (page_details) => dispatch(submitButtonClicked(page_details)),
        postOrPatchTexts: (texts_details) => dispatch(postOrPatchTexts(texts_details))
    }
}






export default connect(null, mapDispatchToProps)(GeneralPageRenderer);

/* 
Notes for this page: Need to make it so that textboxes are ignored for the content editable thing since we need those to be entered.
I can ask Ariel next time I see her which one of my two ideas (which are coming after this) she wants:
1) I pass an argument in to the handleContentClicked function that determines the type of the element so it doesn't proc when on certain things or
2) I make a menu in the top left (Honestly I think ultimately this is what I want since the whole flow would make more sense this way) that
gives the option to make changes so that it isn't just the second you click anywhere

- If I choose number 2 (which I think I will), I will make it so that there's an if else in the render that determines if it's
content editable or not

- So my issue that comes up is that when pasing info to the db, it doesn't save things like "onChange" and "onClick." 
    - Okay here's what I think I'm going to do. I'm going to make a function that gives the text boxes the needed stuff. 
*/


  