import { Component } from 'react';


import axios from 'axios';

import body from '../../pictures/body.png';
import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';



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
                if (txt.script === "3"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "3"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "3" })
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
                <h1 className="bold center">Body scan</h1>
                <div className="left container_for_medium_margin">
                    <p>Now we will practice thinking about how your body feels using something called a body scan.</p>
                    <div id="bodyScanImageDiv">
                        <p>Our bodies can help us learn about our feelings and emotions. I will show you an example.</p>
                        <img src={body} alt="Body diagram" id="body_page_7_script_3" />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_feelings_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_feelings_page_7_script_3")} placeholder='Feeling' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_head_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_head_page_7_script_3")} placeholder='Head' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_chest_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_chest_page_7_script_3")} placeholder='Chest' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_mouth_and_jaw_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_mouth_and_jaw_page_7_script_3")} placeholder='Mouth and jaw' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_breathing_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_breathing_page_7_script_3")} placeholder='Breathing'/>
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_shoulders_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_shoulders_page_7_script_3")} placeholder='Shoulders' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_stomach_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_stomach_page_7_script_3")} placeholder='Stomach' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_hands_and_arms_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_hands_and_arms_page_7_script_3")} placeholder='Hands and arms' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_legs_and_feet_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_legs_and_feet_page_7_script_3")} placeholder='Legs and feet' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_fidgeting_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_fidgeting_page_7_script_3")} placeholder='Fidgeting' />
                        <textarea onChange={event => this.handleChange(event)} id="body_image_text_change_in_energy_level_page_7_script_3" className="body_text_box" defaultValue={this.getValue("body_image_text_change_in_energy_level_page_7_script_3")} placeholder='Change in energy level' />

                    </div>
                    <br/>
                    <div id="instruction_box_number_1_page_7_script_3" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">Click on the [link to be inserted] and share your screen. </p>
                        <br/><br/><br/>
                        <img src={shareScreen} alt="Share screen" id="share_your_screen_page_7_script_3"/>
                        <br/><br/>
                        <p>Explain your example </p>
                    </div>
                    <br/>
                    <div id="instruction_box_number_2_page_7_script_3" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>When you are done, stop screen sharing</p>
                        <img src={stopShare} alt="Stop sharing screen" id="stop_sharing_screen_page_7_script_3"/>
                    </div>
                </div>
            </div>
        )
    }


}
export default Page7;

