import { Component } from 'react';

import axios from 'axios';

import body from '../../../pictures/body.png';
import phone from '../../../pictures/phone.png';

class Step1 extends Component{

    state = {
        text: {}
        }

       
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "9"){
                    this.setState({
                        text: {...this.state.text, [txt.id_tag]: txt}
                    })
                }
            }
              
    })
}

    handleChange = (event) => {
        this.setState({text: {...this.state.text, [event.target.id]: {value: event.target.value, id_tag: event.target.id}}})
        if (event.target.id in this.state.text){
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "9"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "9" })
        }
    }

    getValue = (id) => {
        for (const i in this.state.text){
            if (this.state.text[i].id_tag === id){
                return this.state.text[i].value;
            }
        }
        return ""
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
                    <div className="bodyScanImageDiv_step_1">
                        <img src={body} alt="Body diagram" id="body_step_1_script_9" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_step_1_script_9")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_head_step_1_script_9")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_step_1_script_9")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_step_1_script_9")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_step_1_script_9")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_step_1_script_9")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_step_1_script_9")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_step_1_script_9")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_step_1_script_9")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_step_1_script_9")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_step_1_script_9" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_step_1_script_9")} placeholder='Change in energy level' />
                    </div>
                    
                    <div id="instruction_box_number_1_step_1_script_9" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee use the body scan worksheet or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            <strong>Write how your mentee is feeling</strong><br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_step_1_script_9" defaultValue={this.getValue("text_box_number_1_step_1_script_9")} />
                        </p>
                    </div>
                    <div className='container_for_large_margin'></div>
                    <img src={phone} alt="Phone with emojis" id="phone_step_1_script_9" />
                </div>
            </div>
            
        )
    }
}

export default Step1;