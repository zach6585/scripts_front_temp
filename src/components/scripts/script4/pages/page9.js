import { Component } from 'react';

import body from '../../pictures/body.png'

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

class Page9 extends Component {

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
  
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Review</h1>
                <div className="left container_for_medium_margin">
                    <div id="bodyScanImageDiv">
                        <p>
                            Last week, we worked on the body scan worksheet. 
                            <br/><br/>
                            Did you try using the body scan worksheet on your own?
                            <br/><br/>
                            What do you think about it?
                            <br/>
                            There are no right or wrong answers.
                        </p>
                        <img src={body} alt="Body diagram" id="body_page_9_script_4" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_page_9_script_4")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_head_page_9_script_4")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_page_9_script_4")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_page_9_script_4")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_page_9_script_4")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_page_9_script_4")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_page_9_script_4")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_page_9_script_4")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_page_9_script_4")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_page_9_script_4")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_page_9_script_4" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_page_9_script_4")} placeholder='Change in energy level' />
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>Is any part of it hard?
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_4" defaultValue={this.getValue("text_box_number_1_page_9_script_4")} />
                            <br/><br/><br/><br/><br/><br/><br/>
                            Is there anything you don't like about it?
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_9_script_4" defaultValue={this.getValue("text_box_number_2_page_9_script_4")} /><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/>
                            Is there any way I can help make it easier for you?
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_9_script_4" defaultValue={this.getValue("text_box_number_3_page_9_script_4")} /><br/><br/>
                            
                            Let's practice using it again together. 
                        </p>
                    </div>
                    
                    <div className='container_for_small_margin'>
                        <p>How are you feeling right now?</p>
                    </div>
                   
                    <div id="instruction_box_number_1_page_9_script_4" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            Help your mentee review their body scan workscript.<br/>
                            Put the link in the chat and ask your mentee to screen share
                        </p>
                    </div>
                    <p>
                        Let's think about how each part of your body feels.
                    </p>
                    <div id="instruction_box_number_2_page_9_script_4" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            If your mentee needs help, ask them some questions. You can use the questions below or use the long list of questions you have in your binder.
                        </p>
                    </div>
                    <br/><br/>
                    <ul>
                        <li>How does your chest feel?</li>
                        <li>How is your breathing?</li>
                        <li>How do your mouth and jaw feel?</li>
                        <li>How do your shoulders feel?</li>
                        <li>How do your legs and feet feel?</li>
                        <li>Do you notice yourself fidgeting?</li>
                        <li>Do you notice a change in your energy level? </li>
                        <li className="open_circles_bullets">Do you feel like you have more or less energy than usual?</li>
                    </ul>
                    <br/><br/><br/>
                    <p>
                        Do you have any questions about using the body scan worksheet?
                        <br/>
                        
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_4_page_9_script_4" defaultValue={this.getValue("text_box_number_4_page_9_script_4")} />
                        <br/><br/><br/>
                        
                        You can keep practicing this week to learn more about your mental health. 
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


