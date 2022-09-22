import { Component } from 'react';
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../actions/text';


import pressrecord from '../pictures/pressrecord.png'; 
import checkButSmaller from "../pictures/checkbutsmaller.png";
import redXButSmaller from "../pictures/redxbutsmaller.png";


class SessionStart extends Component {

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: null,
        words_that_appear_when_you_click_red_x: ''
        }
    }

    handleClick = (e, letter) => {
        if (letter === 'c'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check: <GreenCheckClicked />, words_that_appear_when_you_click_red_x: ''}})
        }
        else if (letter === 'x'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x: "Go to the next page"}})
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
                <img src={pressrecord} alt="Press Record" className="left" />
                <h1 className="bold center">Starting the Session</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Hi, it is good to talk with you again!<br/>
                        As a reminder, I am audio recording this session so I can remember what you say and make sure I am doing a good job. <br />
                        I had a good time talking with you last week. <br/>
                        I enjoyed : <br/>
                        <textarea className='session_start_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_1_session_start_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_1_session_start_script_${this.props.script}`)} /><br/><br/>
                        Was there anything last week you wanted to talk about more? 
                    </p>
                    <div className='container_for_medium_margin'>
                        <img className="check" src={checkButSmaller} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redXButSmaller} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                        <br/>
                        <p className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

class GreenCheckClicked extends Component{
    render(){
        return(
            <div id="instruction_box_number_1_session_start checked" className="custom_svg demo_box container_for_medium_margin">
                <p>Talk to your mentee about this topic for up to 5 minutes.
                <br/><br/>
                Once you and your mentee have talked for about five minutes, you can thank them for sharing.  Politely suggest that it's time to transition to hearing about the plan for the day.  If the mentee still wants to talk, suggest “pausing” for now and coming back to the conversation at the end of the peer mentoring session. </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        script: state.texts.currentScript,
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id
        
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionStart);

