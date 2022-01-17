import { Component } from 'react';

import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";

import axios from 'axios';


class Page5 extends Component {

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
                    Today we'll work on making sure that you have an easier time with your coping strategy this week. We'll brainstorm together<br/>
                    First, we'll think about what other people do when they have challenges.<br/>
                    (go to page 9, hyperlink)


                </p>, 
                words_that_appear_when_you_click_red_x: ''}})
            }
            else if (letter === 'x'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x:
                     <p>
                        That's great that you had no challenges using your coping strategy!<br/>
                        Everyone has challenges sometimes. So we will talk through some examples of challenges<br/><br/>
                        Go to next page
                     </p>
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
  
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">How did it go?</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Last week you practiced your new coping strategy <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_7" defaultValue={this.getValue("text_box_number_1_page_5_script_7")} />.
                    </p>
                    <div id="instruction_box_number_1_page_5_script_7" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Try to learn about how it was for your mentee to do the coping strategies. Ask questions such, as the questions in the list:<br/>
                            <em>Remember to provide positive feedback and validation.</em>
                        </p>
                            <ul>
                                <li>How was it to use your coping strategy?</li>
                                <li>How did it make you feel? </li>
                                <li>When did you do it?</li>
                                <li>Did you try using it when you felt <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_7" defaultValue={this.getValue("text_box_number_2_page_5_script_7")} /> (feeling they are addressing)</li>
                                <li>Did you have any challenges using your coping strategy?</li>
                                <li>Is there anything else you want to share about using your coping strategy?</li>
                            </ul>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            This week we are going to talk about solving challenges you might have using coping your strategies.<br/>
                            It is common for people to have challenges with coping strategies. For example, sometimes I <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_5_script_7" defaultValue={this.getValue("text_box_number_3_page_5_script_7")} /><br/>
                            Some other examples of challenges some people have are:
                        </p>
                        <ul>
                            <li>Not knowing when to do the coping strategy</li>
                            <li>Not having the things you need for your coping strategy</li>
                            <li>Feeling worried about doing the coping strategy</li>
                            <li>Feeling worried about what other people will think about your coping strategy</li>
                        </ul>
                    </div>
                
                    <div className='container_for_medium_margin'>
                        <p>Did you have any challenges doing your coping strategy this week?</p>
                        <br/><br/>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                    </div>
                </div>   
            </div>
        )
    }
}


export default Page5;
