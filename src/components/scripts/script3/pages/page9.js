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
                <h1 className="bold center">Review</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Today we talked about a lot!<br/>
                        We mostly focused on symptoms and self-monitoring.<br/><br/>
                        Some of my symptoms are: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_3" defaultValue={this.getValue("text_box_number_1_page_9_script_3")} /><br/>
                        Do you remember what some of your symptoms are?
                    </p>
                    <div id="instruction_box_number_1_page_9_script_3" className="ital custom_svg demo_box ">
                    <p className="top_line_in_instruction_box">If your mentee does not remember, share the card sort link: [insert link]</p>
                    </div>
                    <br/><br/>
                    <p>
                        Self-monitoring is thinking about how we feel. What are some reasons that you think self-monitoring can help with your mental health? 
                    </p>
                    <br/><br/>
                    <img src={pause} alt="Pause" className="pause" />
                    <img src={allEars} alt="All ears" className="allEars" />
                    <br/><br/><br/>
                    <p>
                        What are some ways that your body feels when you are  [say an emotion they have told you about].
                        <br/><br/><br/>
                        Remember to practice self-monitoring this week. You can use the body scan worksheet app or the worksheets we mailed you. 
                    </p>
                </div>
            </div>
        )
    }
}
export default Page9;
