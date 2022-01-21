import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import body from '../../pictures/body.png';
import phone from '../../pictures/phone.png';

class Page8 extends Component{

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
    
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

    render(){
        return(
            <div className="sheet">
                <div className='container_for_small_margin'>
                    <p>
                        We'll practice your new strategy together.<br/>
                        <strong>Step 1: Identify how you are feeling</strong><br/>
                        Let's practice thinking about how you are feeling. We do this to check-in before using the coping strategy.<br/>
                        Do you want to use the body scan or mood log?
                    </p>
                    <div className="bodyScanImageDiv_page_8">
                        <img src={body} alt="Body diagram" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_page_8_script_10")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_head_page_8_script_10")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_page_8_script_10")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_page_8_script_10")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_page_8_script_10")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_page_8_script_10")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_page_8_script_10")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_page_8_script_10")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_page_8_script_10")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_page_8_script_10")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_page_8_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_page_8_script_10")} placeholder='Change in energy level' />
                    </div>
                    <div id="instruction_box_number_1_page_8_script_10" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee use the body scan worksheet or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            <strong>Write how your mentee is feeling</strong><br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_8_script_10" defaultValue={this.getValue("text_box_number_1_page_8_script_10")} />
                        </p>
                    </div>
                    <div className='container_for_large_margin'></div>
                    <img src={phone} alt="Phone with emojis" id="phone_page_8_script_10" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);