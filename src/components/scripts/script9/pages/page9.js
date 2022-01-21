import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';


class Page9 extends Component{

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
                        <strong>Step 2: Practicing coping strategies</strong>
                    </p>
                    <div id="instruction_box_number_1_step_2_script_9" className="custom_svg demo_box container_for_extra_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Practice the coping strategy together. <br/>
                            You should do the activity for 10-20 minutes.
                        </p>
                    </div>

                    <div className='container_for_medium_margin' id="ul_div_step_2_script_9">
                        <p>Practice the coping strategy together.</p>
                        <ul>
                            <li>Do the activity with your mentee</li>
                            <li>Help your mentee figure out the steps</li>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_step_2_script_9" defaultValue={this.getValue("text_box_number_1_step_2_script_9")} />
                            <br/><br/><br/>
                            <li>Help your mentee self-reflect, you can ask questions, such as:</li>
                            <ul>
                                <li className='open_circles_bullets'>“How is this making you feel right now?”</li>
                                <li className='open_circles_bullets'>“Do you feel like doing this activity is helping you?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“This activity makes me feel <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_step_2_script_9" defaultValue={this.getValue("text_box_number_2_step_2_script_9")} />. How does it make you feel?” </li>
                            </ul>
                            <br/><br/><br/>
                            <li>Encourage your mentee by saying things like:</li>
                            <ul>
                                <li className='open_circles_bullets'>“You're doing great!”</li>
                                <li className='open_circles_bullets'>“I can see you are working really hard.”</li>
                                <li className='open_circles_bullets'>“Keep trying!”</li>
                                <li className='open_circles_bullets'>“Wow, you are doing such an awesome job!”</li>
                                <li className='open_circles_bullets'>“It might feel (hard/uncomfortable/weird), and I know you can do it.”</li>
                            </ul>
                        </ul>
                    </div>

                    <div id="image_div_step_2_script_9">
                        <img src={pause} className='pause' alt="Pause" />
                        <img src={allEars} className='allEars' alt="Listen" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page9);