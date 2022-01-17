import { Component } from 'react';

import axios from 'axios';

import body from '../../../pictures/body.png';
import phone from '../../../pictures/phone.png'


class Step3 extends Component{

    state = {
        text: {}
        }

    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        console.log('here');
        this.handleScroll()
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "10"){
                    this.setState({
                        text: {...this.state.text, [txt.id_tag]: txt}
                        
                    })
                    
                }
            }
              
    })

    
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
                <h1 className='bold'>Step 3: Identify how you are feeling</h1>
                <div className='container_for_small_margin'>
                    <p>
                        When we checked in earlier, you said you were feeling <span className='underline_text'>{this.getValue('text_box_number_1_step_1_script_10')}</span>.
                        <br/><br/>
                        Let's think about how you feel again. It's good to think about how you are feeling after you do a coping strategy to see if using the coping strategy changed how you feel.
                    </p>
                
                    <div id="instruction_box_number_1_step_3_script_10" className="custom_svg demo_box container_for_extra_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee review their body scan workscript or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share
                        </p>
                    </div>
                
                    <div id="image_div_step_3_script_10">
                        <img src={phone} id="phone_step_3_script_10" alt="Phone with emojis" />
                        <img src={body} alt="Body diagram" id="body_step_3_script_10" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_step_3_script_10")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_head_step_3_script_10")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_step_3_script_10")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_step_3_script_10")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_step_3_script_10")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_step_3_script_10")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_step_3_script_10")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_step_3_script_10")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_step_3_script_10")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_step_3_script_10")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_step_3_script_10" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_step_3_script_10")} placeholder='Change in energy level' />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Step3;


