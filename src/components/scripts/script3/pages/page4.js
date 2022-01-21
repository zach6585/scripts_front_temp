import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page4 extends Component {

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
                <h1 className="bold center">Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We are going to do a scavenger hunt show! <br/>
                        Let's take up to 5 minutes to find something in our room or house that makes you feel happy.  For example, I want to show you <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_3" defaultValue={this.getValue("text_box_number_1_page_4_script_3")} /> because when I feel stressed and I use/look at this, it makes me slow down and relax.<br/>
                        Once you find something in your home that makes you calm or relaxed, bring it back to the screen.<br/>
                        I'll put my timer on for 5 minutes and I'll call out when our time is up.<br/>
                        If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time!
                    </p>
                    
                    <div id="instruction_box_number_1_page_4_script_3" className="ital custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Thank your mentee for sharing.<br/>
                            Ask your mentee questions to learn about what they showed you. Some ideas for questions are:
                        </p>
                        <ul>
                            <li>What is it?</li>
                            <li>Where did you get it from / how did you make it</li>
                            <li>Where is this usually kept in your house?</li>
                            <li>Have you had it for a long time?</li>
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page4);

