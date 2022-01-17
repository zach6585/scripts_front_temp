import { Component } from 'react';

import activities from '../../pictures/activities.png';

import axios from 'axios';

import '../../extcss.scss';

class Page6 extends Component {
    state = {
        
        text: {}
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
                    <h1 className="bold center">Doing the card sort activity</h1>
                    <div className="left container_for_medium_margin">
                        <div className='custom_svg demo_box' id='instruction_box_number_1_page_6_script_4'>
                                <p className='top_line_in_instruction_box'>
                                    Do the card sort activity with your mentee.<br/><br/>
                                    Send your mentee the card sort link: <br/>
                                    Link: <br/><br/>
                                    Ask them to share their screen.
                                </p>
                        </div>
                        <img src={activities} alt="Activities to do" id="activities_page_6_script_4" />

                        <div className='container_for_large_margin'>
                            <p>
                                <span className='underline_text'>Card sort directions</span><br/>
                                First, we will think about activities you do and do not like.<br/> 
                                If you like the type of activity, you will put the card in the “like” pile. <br/>
                                If you do not like the activity, you will put the card in the “do not like” pile.
                            </p>
                        </div>

                        <div className='custom_svg demo_box container_for_small_margin' id='instruction_box_number_2_page_6_script_4'>
                            <p className='top_line_in_instruction_box'>
                                <span className='underline_text'>Prompts-things you can say if your mentee needs help</span> <br/>
                            </p>
                                <ul>
                                    <li>How does the activity make you feel?</li>
                                    <li>Is the activity fun?</li>
                                    <li>Is the activity interesting or boring?</li>
                                </ul><br/>
                            <p>
                                <em>When your mentee is finished, say</em>: Good job! Now we are ready for the next part of the activity!
                            </p>
                        </div>

                        <div className='container_for_large_margin'>
                            <p>
                                Now that we are done thinking about if you like the activities, we will think about how they make you feel.
                            </p>
                        </div>
                        
                        <div className='container_for_medium_margin'>
                            <form>
                                <div className="extcss">
                                    <p>For example, sometimes I do feel<br/><br/></p>
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_1_page_6_script_4")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_1_page_6_script_4"
                                            id="text_box_number_1_page_6_script_4"
                                        />
                                        <label htmlFor="text_box_number_1_page_6_script_4">(a feeling you don't like)</label>
                                    </span>
                                    <span className='side_text'>. I do&nbsp;&nbsp;</span>
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_2_page_6_script_4")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_2_page_6_script_4"
                                            id="text_box_number_2_page_6_script_4"
                                        />
                                        <label htmlFor="text_box_number_2_page_6_script_4">(an activity that makes you feel better)</label>
                                    </span>

                                    <span className='side_text'>&nbsp;&nbsp;to make me feel less&nbsp;&nbsp;</span>

                                    <span className="inline-flex flex-col">
                                    <input
                                        onChange={event => this.handleChange(event)}
                                        defaultValue={this.getValue("text_box_number_3_page_6_script_4")}
                                        className="border-b border-black text_box_inputs"
                                        type="text"
                                        name="text_box_number_3_page_6_script_4"
                                        id="text_box_number_3_page_6_script_4"
                                    />
                                    <label htmlFor="text_box_number_3_page_6_script_4"
                                        >(the feeling you don't like)</label
                                    >
                                    </span>
                                    <span className='side_text'>&nbsp;&nbsp;That means that&nbsp;&nbsp;</span>

                                    <span className="inline-flex flex-col">
                                    <input
                                        onChange={event => this.handleChange(event)}
                                        defaultValue={this.getValue("text_box_number_4_page_6_script_4")}
                                        className="border-b border-black text_box_inputs"
                                        type="text"
                                        name="text_box_number_4_page_6_script_4"
                                        id="text_box_number_4_page_6_script_4"
                                    />
                                    <label htmlFor="text_box_number_4_page_6_script_4"
                                        >(the activity that makes you feel better)</label
                                    >
                                    </span>
                                    <span className='side_text'>&nbsp;&nbsp;is a coping strategy.</span>
                                </div>
                            </form>  
                        </div>

                        <div className='container_for_small_margin'>
                            <p>
                                What are some types of feelings that you have that are sometimes hard to handle?<br/>
                                <span className="left">
                                    <em>Write the feelings they say: </em><br/>
                                    <textarea onChange={event => this.handleChange(event)} id="text_box_number_5_page_6_script_4" defaultValue={this.getValue("text_box_number_5_page_6_script_4")} />
                                </span>
                                <br/>
                                Thanks for sharing. <br/>
                                Together, we will think of activities to make you feel less
                            </p>
                                <div id="text_box_with_text_under_number_1_page_6_script_4">
                                    <textarea onChange={event => this.handleChange(event)} id="text_box_number_6_page_6_script_4" defaultValue={this.getValue("text_box_number_6_page_6_script_4")} />.<br/>
                                    <p className='small' id="text_under_text_box_number_1_page_6_script_4">(the feelings they shared)</p>
                                </div>
                        </div>
                        <div className='container_for_small_margin'>
                            <p>We are only going to talk about some of the activities that you like. We do not need to talk about the types of activities that you do not like.</p>
                        </div>

                        <div className='container_for_medium_margin'>
                            <p>
                            So, let's look at the activities you like. <br/>
                            Next to them, we'll add a post-it note saying the activity you do and how it makes you feel. <br/>
                            I'll show you on the first one. For example, let's say that I enjoy &nbsp;
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_7_page_6_script_4" defaultValue={this.getValue("text_box_number_7_page_6_script_4")} />&nbsp;
                            activities. I would say the type of activity I like is &nbsp;
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_8_page_6_script_4" defaultValue={this.getValue("text_box_number_8_page_6_script_4")} /> 
                            &nbsp; and that it makes me feel &nbsp;
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_9_page_6_script_4" defaultValue={this.getValue("text_box_number_9_page_6_script_4")} />
                            , so I'll write that on the post-it note.<br/><br/>
                            We'll delete my example, because this is about you.
                            </p>
                        </div>

                        <div className='container_for_small_margin'>
                            <p>Let's look at each activity you like and write down the specific activity and how you feel.</p>
                        </div>

                        <div className='container_for_large_margin'>
                            <div className='custom_svg demo_box container_for_small_margin' id='instruction_box_number_3_page_6_script_4'>
                                <p className='top_line_in_instruction_box'>
                                Help your mentee finish the cards sort activity.<br/>
                                You can offer to type or move the post-its, if they need.<br/>
                                You can also give them a list of emotion words if they are having a hard time thinking of how they feel.<br/> 

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
            
        }
        
}   


export default Page6;

