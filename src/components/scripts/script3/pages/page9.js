import { Component } from 'react';

import allEars from "../../pictures/allears.png"
import pause from "../../pictures/pause.png"

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

class Page9 extends Component {

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
                <h1 className="bold center">Review</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Today we talked about a lot!<br/>
                        We mostly focused on symptoms and self-monitoring.<br/><br/>
                        Some of my symptoms are: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_3" defaultValue={this.getValue("text_box_number_1_page_9_script_3")} /><br/>
                        Do you remember what some of your symptoms are?
                    </p>
                    <div id="instruction_box_number_1_page_9_script_3" className="ital custom_svg demo_box ">
                    <p className="top_line_in_instruction_box">If your mentee does not remember, share the card sort link: [insert link]</p>
                    </div>
                    <br/><br/>
                    <p>
                        Self-monitoring is thinking about how we feel. What are some reasons that you think self-monitoring can help with your mental health? 
                    </p>
                    <br/><br/>
                    <img src={pause} alt="Pause" className="pause" />
                    <img src={allEars} alt="All ears" className="allEars" />
                    <br/><br/><br/>
                    <p>
                        What are some ways that your body feels when you are  [say an emotion they have told you about].
                        <br/><br/><br/>
                        Remember to practice self-monitoring this week. You can use the body scan worksheet app or the worksheets we mailed you. 
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page9);
