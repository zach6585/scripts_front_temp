import { Component } from 'react';

import axios from 'axios';

import pause from '../../../pictures/pause.png';
import allEars from '../../../pictures/allears.png';


class Step2 extends Component{

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
                if (txt.script === "10"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "10"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "10" })
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
                        <strong>Step 2: Practicing coping strategies</strong>
                    </p>
                    <div id="instruction_box_number_1_step_2_script_10" className="custom_svg demo_box container_for_extra_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Practice the coping strategy together. <br/>
                            You should do the activity for 10-20 minutes.
                        </p>
                    </div>

                    <div className='container_for_medium_margin' id="ul_div_step_2_script_10">
                        <p>Practice the coping strategy together.</p>
                        <ul>
                            <li>Do the activity with your mentee</li>
                            <li>Help your mentee figure out the steps</li>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_step_2_script_10" defaultValue={this.getValue("text_box_number_1_step_2_script_10")} />
                            <br/><br/><br/>
                            <li>Help your mentee self-reflect, you can ask questions, such as:</li>
                            <ul>
                                <li className='open_circles_bullets'>“How is this making you feel right now?”</li>
                                <li className='open_circles_bullets'>“Do you feel like doing this activity is helping you?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“Do you like the way you feel as you do this activity?” Why? Or Why not?</li>
                                <li className='open_circles_bullets'>“This activity makes me feel <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_step_2_script_10" defaultValue={this.getValue("text_box_number_2_step_2_script_10")} />. How does it make you feel?” </li>
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

                    <div id="image_div_step_2_script_10">
                        <img src={pause} className='pause' id="pause_step_2_script_10" alt="Pause" />
                        <img src={allEars} className='allEars' id="allEars_step_2_script_10" alt="Listen" />
                    </div>

                
                </div>
            </div>
            
        )
    }
}

export default Step2;


