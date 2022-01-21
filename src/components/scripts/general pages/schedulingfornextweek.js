import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../actions/text';

class SchedulingForNextWeek extends Component {

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
                <h1 className="bold center">Scheduling for next week</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Thanks for meeting with me today!<br/>
                        We will meet again on:<textarea className="scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_1_schedule_for_next_week_script_${this.props.script}`}defaultValue={this.getValue(`text_box_number_1_schedule_for_next_week_script_${this.props.script}`)} /><br/>
                        This week we will <textarea className="scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_2_schedule_for_next_week_script_${this.props.script}`}defaultValue={this.getValue(`text_box_number_2_schedule_for_next_week_script_${this.props.script}`)} />.<br/>
                        <span className='small' id='text_call_email'>(text/call/email—the way you agreed on being in touch)</span>
                        <br/>
                        Let's decide when we will be in touch.
                    </p>
    
                    <div id="instruction_box_number_1_schedule_for_next_week" className="custom_svg demo_box container_for_medium_margin">
                        <p className="in_inst ital">
                            Schedule a time to get in touch with your mentee.<br/>
                            Here are times you will offer your mentee:<br/>
                            <textarea className="large_scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_3_schedule_for_next_week_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_3_schedule_for_next_week_script_${this.props.script}`)} />
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SchedulingForNextWeek);

