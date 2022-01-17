import { Component } from 'react';

import axios from 'axios';


class Page4 extends Component {

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
                <h1 className="bold center">Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We are going to do a scavenger hunt show! <br/>
                        Let's take up to 5 minutes to find something in our room or house that makes you feel happy.  For example, I want to show you <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_3" defaultValue={this.getValue("text_box_number_1_page_4_script_3")} /> because when I feel stressed and I use/look at this, it makes me slow down and relax.<br/>
                        Once you find something in your home that makes you calm or relaxed, bring it back to the screen.<br/>
                        I'll put my timer on for 5 minutes and I'll call out when our time is up.<br/>
                        If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time!
                    </p>
                    
                    <div id="instruction_box_number_1_page_4_script_3" className="ital custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Thank your mentee for sharing.<br/>
                            Ask your mentee questions to learn about what they showed you. Some ideas for questions are:
                        </p>
                        <ul>
                            <li>What is it?</li>
                            <li>Where did you get it from / how did you make it</li>
                            <li>Where is this usually kept in your house?</li>
                            <li>Have you had it for a long time?</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page4;
