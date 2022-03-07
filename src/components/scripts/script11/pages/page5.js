import { Component } from 'react';

import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';



class Page5 extends Component {

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: null,
        words_that_appear_when_you_click_red_x: ''
        }
    }

    handleClick = (e, letter) => {
        if (letter === 'c'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
            <p>
                A lot of people have challenges. <br/>
                I'm here to support you! <br/> 
                Today we'll work on making sure that you have an easier time with your coping strategy this week. We'll brainstorm together.<br/>
                Go to next page 

            </p>, 
            words_that_appear_when_you_click_red_x: ''}})
        }
        else if (letter === 'x'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x:
                    <div>
                    <p>
                        That's great that you had no challenges using your coping strategy!<br/>
                        We'll practice it together!
                    </p>
                    [Skip to making a plan for practice]
                    </div>
                }})
        }
    }

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.mentee_id, script: this.props.script})
    
    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }
    
    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
  
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">How did it go?</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Last week you practiced your new coping strategy <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_11" defaultValue={this.getValue("text_box_number_1_page_5_script_11")} />.
                    </p>
                    <div id="instruction_box_number_1_page_5_script_11" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Try to learn about how it was for your mentee to do the coping strategies. Ask questions such, as the questions in the list:<br/>
                            <em>Remember to provide positive feedback and validation.</em>
                        </p>
                            <ul>
                                <li>How was it do use your coping strategy?</li>
                                <li>How did it make you feel? </li>
                                <li>When did you do it?</li>
                                <li>Did you try using it when you felt <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_11" defaultValue={this.getValue("text_box_number_2_page_5_script_11")} /> (feeling they are addressing)</li>
                                <li>Did you have any challenges using your coping strategy?</li>
                                <li>Is there anything else you want to share about using your coping strategy?</li>
                            </ul>
                        
                    </div>
                   
                   <div className='container_for_medium_margin'>
                        <p>Did you have any challenges doing your coping strategy this week?</p>
                        <br/><br/>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                   </div>
                </div>   
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
