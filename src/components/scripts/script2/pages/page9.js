import { Component } from 'react';

import allEars from "../../pictures/allears.png"
import pause from "../../pictures/pause.png"
import axios from 'axios';


class Page9 extends Component {

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
                if (txt.script === "2"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "2"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "2" })
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
                <div className="left container_for_small_margin">
                    <p>
                        Today we talked about a lot!<br/>
                        We mostly focused on symptoms.<br/><br/>
                        Some of my symptoms are: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_2" defaultValue={this.getValue("text_box_number_1_page_9_script_2")} /><br/>
                        Do you remember what some of your symptoms are?
                    </p>
                    <img src={pause} alt="Pause" className="pause" />
                    <img src={allEars} alt="All ears" className="allEars" />
                    <br/><br/><br/><br/>
                    <div id="instruction_box_number_1_page_9_script_2" className="ital custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box">
                            Help your mentee look at the symptom cards. [will insert link]<br/>
                            Share your screen to show them the card sort.
                        </p>
                    </div>
                    <div className='container_for_large_margin'>
                        <p>
                            This week, try to pay attention to how you feel. <br/>
                            If you have any symptoms, try to notice when they happen. We can talk about them next week. This is an important first step for helping you with your mental health and working together.
                        </p>  
                    </div>
                </div>
            </div>
        )
    }
}
export default Page9;
