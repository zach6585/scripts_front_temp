import { Component } from 'react';
import axios from 'axios';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';
import stopShare from '../../pictures/stopshare.png';


class Page5 extends Component {
    
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
                <h1 className="bold center">Reviewing symptoms</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Last week, we talked about symptoms. You shared that you sometimes feel <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_3" defaultValue={this.getValue("text_box_number_1_page_5_script_3")} /><br/>
                        Last week some symptoms I noticed I had were <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_3" defaultValue={this.getValue("text_box_number_2_page_5_script_3")} /><br/>
                        I noticed that I felt <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_5_script_3" defaultValue={this.getValue("text_box_number_3_page_5_script_3")} /><br/>
                        when I was at <textarea onChange={event => this.handleChange(event)} id="text_box_number_4_page_5_script_3" defaultValue={this.getValue("text_box_number_4_page_5_script_3")} />.<br/>
                        When I was at home, some of the symptoms I had were <textarea onChange={event => this.handleChange(event)} id="text_box_number_5_page_5_script_3" defaultValue={this.getValue("text_box_number_5_page_5_script_3")} />.<br/>
                        When I was feeling <textarea onChange={event => this.handleChange(event)} id="text_box_number_6_page_5_script_3" defaultValue={this.getValue("text_box_number_6_page_5_script_3")} />.<br/>
                        When I was at home, some of the symptoms I had were <textarea onChange={event => this.handleChange(event)} id="text_box_number_7_page_5_script_3" defaultValue={this.getValue("text_box_number_7_page_5_script_3")} />,<br/>
                        I used a coping strategy to make me feel less/more <textarea onChange={event => this.handleChange(event)} id="text_box_number_8_page_5_script_3" defaultValue={this.getValue("text_box_number_8_page_5_script_3")} />. <br/>
                        We can look at the card sort to think of the other symptoms you have.<br/>
                    </p>
                    <div id="instruction_box_number_1_page_5_script_3" className="ital custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box ">
                            Send your mentee this link [link to be inserted]<br/>
                            Ask your mentee to click on the link and share their screen. <br/>
                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <p>
                            Are there any other symptoms that you thought of during the week? <br/>
                            If you want, you can move the cards show the symptoms you had this week. <br/>
                        </p>
                        <img className="pause" src={pause} alt="pause" />
                        <img className="allEars" src={allEars} alt="All ears" />
                        <br/><br/><br/><br/>
                    </div>
                    <div id="instruction_box_number_2_page_5_script_3" className="ital custom_svg demo_box">
                        <p className="top_line_in_instruction_box">Show that you understand what your mentee is saying. Some things you can say are:</p>
                        <ul>
                            <li>Thank you for sharing</li>
                            <li>I appreciate you telling me about how you felt</li>
                            <li>That sounds kind of hard</li>
                            <li>I understand</li>
                        </ul>
                        <p>You can also ask questions to learn more about when and where they had those symptoms. Some example questions are:</p>
                        <ul>
                            <li>When did you have that symptom? </li>
                            <li>Where were you when you felt that way?</li>
                            <li>What did you do when you had that symptom?</li>
                        </ul>
                        <br/><br/>
                        <p>
                            <strong>If your mentee didn't notice any symptoms</strong>, say:<br/><br/>
                            That's ok! Sometimes you might not have symptoms. It can also be really hard to notice symptoms when they happen.
                        </p>
                    </div>
                    <div id="instruction_box_number_3_page_5_script_3" className="ital custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box small">When you are done, ask your mentee to stop screen sharing</p><br/>
                        <img id="stop_sharing_screen_page_5_script_3" alt="Stop share" src={stopShare} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Page5;
