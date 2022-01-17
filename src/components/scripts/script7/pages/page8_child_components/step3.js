import { Component } from 'react';

import axios from 'axios';

import body from '../../../pictures/body.png';
import phone from '../../../pictures/phone.png';
import check from '../../../pictures/check.png';
import redX from '../../../pictures/redx.png';


class Step3 extends Component{

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: null,
        words_that_appear_when_you_click_red_x: ''
        },
        text: {}
    }

        handleClick = (e, letter) => {
            if (letter === 'c'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
                <p>
                    Go to step 4
                </p>, 
                words_that_appear_when_you_click_red_x: ''}})
            }
            else if (letter === 'x'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x:
                    <div id='image_and_p_div_page_6_script_7'>
                        <p>Go to time for questions</p>
                    </div>
                    }})
            }
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
                if (txt.script === "7"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "7"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "7" })
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
                <h1 className='bold'>Step 3: Identify how you are feeling</h1>
                <div className='container_for_small_margin'>
                    <div className="bodyScanImageDiv_step_3">
                        <img src={body} alt="Body diagram" id="body_step_1_script_7" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_step_1_script_7")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_head_step_1_script_7")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_step_1_script_7")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_step_1_script_7")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_step_1_script_7")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_step_1_script_7")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_step_1_script_7")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_step_1_script_7")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_step_1_script_7")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_step_1_script_7")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_step_1_script_7" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_step_1_script_7")} placeholder='Change in energy level' />
                    </div>
                    <div id="next_to_image_text_number_1_step_3_script_7"></div>
                    <p>
                        When we did the body scan earlier, you said you were feeling <span className='underline_text'>{this.getValue('text_box_number_1_step_1_script_7')}</span>.<br/><br/>
                        Has anything changed?
                    </p>
                   
                    <div className='left'>
                        <p><i>Prompts:</i></p>
                        <ul>
                            <li>Do any parts of your body feel different? </li>
                            <li>What are you noticing in your body?</li>
                        </ul>
                    </div>
                    
                    
                
                    <div id="instruction_box_number_1_step_3_script_7" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee review their body scan worksheet or mood log.<br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            Link: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_step_3_script_7" defaultValue={this.getValue("text_box_number_1_step_3_script_7")} />
                        </p>
                    </div>

                    <div className='container_for_large_margin'>
                        <div id="next_to_image_text_number_2_step_3_script_7">
                            <p>
                                Now that we have thought about how your body feels, let's use the mood log to see how you are feeling. It is good to use the mood log after you do a coping strategy to see if using the coping strategy changed how you feel.<br/><br/>
                                We are doing the mood log again, because the best way to learn if a coping strategy is helping is to see if you feel better after using it. A mood log can help you know if your mood has changed. 
                            </p>
                        </div>
                        <img src={phone} alt="Phone" id="phone_step_3_script_7" />
                    </div>

                    <div id="instruction_box_number_2_step_3_script_7" className="custom_svg demo_box container_for_medium_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee use the mood log to rate how they are feeling. <br/>
                            Put the link in the chat and ask your mentee to screen share<br/>
                            Link: <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_step_3_script_7" defaultValue={this.getValue("text_box_number_2_step_3_script_7")} />
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">You and your mentee worked on solving a challenge today</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">You and your mentee did not work on solving a challenge today</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                   </div>
                </div>
            </div>
            
        )
    }
}

export default Step3;


