import { Component } from 'react';

import body from '../../pictures/body.png'
import axios from 'axios';


class Page7 extends Component {

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
                if (txt.script === "5"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "5"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "5" })
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
                        <img src={body} alt="Body diagram" id="body_page_7_script_5" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_page_7_script_5")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_head_page_7_script_5")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_page_7_script_5")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_page_7_script_5")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_page_7_script_5")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_page_7_script_5")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_page_7_script_5")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_page_7_script_5")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_page_7_script_5")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_page_7_script_5")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_page_7_script_5" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_page_7_script_5")} placeholder='Change in energy level' />
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>Is any part of it hard?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_7_script_5" defaultValue={this.getValue("text_box_number_1_page_7_script_5")} className='textarea' />
                            <br/><br/><br/><br/><br/><br/><br/>
                            Is there anything you don't like about it?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_7_script_5" defaultValue={this.getValue("text_box_number_2_page_7_script_5")} className='textarea' /><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/>
                            Is there any way I can help make it easier for you?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_7_script_5" defaultValue={this.getValue("text_box_number_3_page_7_script_5")} className='textarea' /><br/><br/>
                            
                            Let's practice using it again together. 
                        </p>
                    </div>
                    
                    <div className='container_for_small_margin'>
                        <p>How are you feeling right now?</p>
                    </div>
                   
                    <div id="instruction_box_number_1_page_7_script_5" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            Help your mentee review their body scan worksheet.<br/>
                            Put the link in the chat and ask your mentee to screen share
                        </p>
                    </div>
                    <p>
                        Let's think about how each part of your body feels.
                    </p>
                    <div id="instruction_box_number_2_page_7_script_5" className="custom_svg demo_box">
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
                        
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_4_page_7_script_5" defaultValue={this.getValue("text_box_number_4_page_7_script_5")} />
                        <br/><br/><br/>
                        
                        You can keep practicing this week to learn more about your mental health. 
                    </p>
                </div>
            </div>
        )
    }
}
export default Page7;
