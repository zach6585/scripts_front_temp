import { Component } from 'react';

import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";
import pause from "../../pictures/pause.png";
import allEars from "../../pictures/allears.png";

import axios from 'axios';

class Page5 extends Component {
    state = {
        handleclick: {
            words_that_appear_when_you_click_green_check: null,
            words_that_appear_when_you_click_red_x_: null
        },
        text: {}
        }

            handleClick = (e, letter) => {
                if (letter === 'c'){
                    this.setState({handleclick: {words_that_appear_when_you_click_green_check: <GreenCheckOrRedXClicked x_or_check_picked={"check"} />, words_that_appear_when_you_click_red_x: null}})
                }
                else if (letter === 'x'){
                    this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x: <GreenCheckOrRedXClicked x_or_check_picked={"x"} />}})
                }
            }
    
        handleScroll=()=>{
            window.scroll({top:0,behavior:'smooth'})
        
        }
        componentDidMount = () => {
            axios.get("http://localhost:3001/texts")
            .then(res => {
                const texts = res.data;
                for (const txt of texts){
                    if (txt.script === "4"){
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
                axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "4"})
        }
            else {
                axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "4" })
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
                    <h1 className="bold center">Learning about coping strategies</h1>
                    <div className="left container_for_medium_margin">
                        <p>
                            Last time we talked about mental health symptoms. 
                            Symptoms are the things that get in the way of your mood, thoughts, or behavior.  
                            You also mentioned that symptoms are: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_4" defaultValue={this.getValue("text_box_number_1_page_5_script_4")} /> 
                        </p>
                        <div className='container_for_large_margin'>
                            <p>
                                You also worked on knowing how your body feels when you're having symptoms.  
                                What are some of the feelings you have been noticing in your body?
                            </p>
                        </div>

                        <div className='container_for_medium_margin custom_svg demo_box' id='instruction_box_number_1_page_5_script_4'>
                            <p className='top_line_in_instruction_box'>If your mentee has a hard time identifying feelings you can:</p>
                            <ul>
                                <li>share an example from your life </li>
                                <li>ask them questions about different body parts</li>
                            </ul>
                        </div>

                        <div className='container_for_small_margin'>
                            <p>
                                Today we will talk about coping strategies to help you feel better when you have symptoms. <br/> 
                                Lowering stress in life is a really important part of mental health.  That means finding ways to keep your stress low as possible at home, at school or work, in the community, and when you are around other people.<br/><br/> 
                                We are going to work together to find activities that make you feel good or help lower stress. These are called “coping strategies.” <br/><br/>
                                Coping strategies are what people do to deal with stress.  We take care of our mental health by using coping tools that help us notice our emotions, find ways to relax, and ways to make peace with upsetting feelings and thoughts.  
                            </p>
                        </div>

                        <div className='container_for_large_margin'>
                            <p>
                                Have you ever heard of a coping strategy? If not, it's okay. It is a new idea.
                            </p>
                        </div>
                        <div className='container_for_small_margin'>
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

class GreenCheckOrRedXClicked extends Component {

    state = {
        text: {},
        x_or_check_lines: {
            first_line: '',
            second_line: '',
            last_line: ''
        }
    }

    componentDidMount = () => {
        this.textPicker();
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "4"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "4"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "4" })
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

    textPicker = () => { //If this.props.x_or_check_picked === "check" then we go down the route of the check. If it's x then we go down the x route
        if (this.props.x_or_check_picked === "check"){
            this.setState({x_or_check_lines:
                {first_line: 
                <div>
                    <p>Ask your mentee about how they define coping strategies</p>
                    <img src={pause} className='pause' alt="Pause" /> 
                    <img src={allEars} className='allEars' alt="Listen" />
                </div>,
                second_line: "That's a great way to think about it. The way I think about coping strategies, is that they are things you can do to help you have better mental health. Coping strategies can help people relax and feel better when they have upsetting thoughts or feelings.",
                last_line: ''
                } 
            })
        }
        else if (this.props.x_or_check_picked === "x"){
            this.setState({x_or_check_lines: 
                {first_line: '', 
                second_line: "That's ok. Coping strategies are a new idea for a lot of people. Coping strategies are things you can do to help you have better mental health. ",
                last_line: "Thanks for sharing we will work on finding more coping strategies today."}}) 
        }
    }
    render(){
        return(
            <div>
                {this.state.x_or_check_lines.first_line}
                <div className='container_for_small_margin'>
                    <p>
                        {this.state.x_or_check_lines.second_line} For example, sometimes I feel 
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_4" defaultValue={this.getValue("text_box_number_2_page_5_script_4")} />. When I feel 
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_5_script_4" defaultValue={this.getValue("text_box_number_3_page_5_script_4")} />, 
                        I <textarea onChange={event => this.handleChange(event)} id="text_box_number_4_page_5_script_4" defaultValue={this.getValue("text_box_number_4_page_5_script_4")} />. 
                        Doing this makes me feel better, so it is a coping strategy. Is there anything that you do that helps make you feel better?
                    </p>
                    <img src={pause} className='pause' alt="Pause" /> 
                    <img src={allEars} className='allEars' alt="Listen" /> 
                </div>
                <p>{this.state.x_or_check_lines.last_line}</p>
            </div>
            
        )
    }
}

export default Page5;