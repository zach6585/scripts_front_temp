import { Component } from 'react';

import axios from 'axios';
import shareScreen from '../../pictures/sharescreen.png';

class Page6 extends Component {
    state = {
        text: {}
    }

        handleScroll=()=>{
            window.scroll({top:0, behavior:'smooth'})
        }
        
        componentDidMount() {
            this.handleScroll()
            axios.get("http://localhost:3001/texts")
            .then(res => {
                const texts = res.data;
                for (const txt of texts){
                    if (txt.script === "8"){
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
                axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "8"})
        }
            else {
                axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "8" })
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
                <h1 className="bold center">Making a coping strategy toolkit</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Sometimes it can be hard to remember the coping strategies that work well for you.<br/>
                        We are going to make a coping strategy toolkit together.<br/>
                        This will be something that you can use when you need to use a coping strategy. <br/>
                        Here is an example of my toolkit
                    </p>
                    <div className='container_for_large_margin'>
                        <div id="instruction_box_number_1_page_6_script_8" className="custom_svg demo_box">
                            <p className='top_line_in_instruction_box'>
                                Share your screen<br/>
                                Insert link: 
                            </p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" id="share_your_screen_page_6_script_8" />
                    </div>

                    <div className='container_for_small_margin'>
                        <p>I use my toolkit when <textarea id='text_box_number_1_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_1_page_6_script_8")} /></p>
                    </div>

                    <div id="instruction_box_number_2_page_6_script_8" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>Show your mentee a few slides and talk to them about how you can use your toolkit and what you put in it.</p>
                    </div>

                    <div className='container_for_extra_large_margin'>
                        <p>Today we will start making a toolkit for you. I'll send you a link so you can get started.</p>
                    </div>
                    
                    <div id="instruction_box_number_3_page_6_script_8" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Send your mentee the link<br/>
                            Link: <br/>
                            <strong>Stop screen sharing and ask your mentee to screen share.</strong>
                        </p>
                        
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            So far, we have talked about one strategy that works well for you. Do you remember that strategy? <br/>
                            We'll put that strategy in the toolkit. You can write the words or add a picture.
                        </p>
                    </div>
                

                    <div id="instruction_box_number_4_page_6_script_8" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee pick out a picture. <br/>
                            Help them complete the slides on the toolkit. You can give suggestions. If they need help for thinking of how they will solve challenges, you can suggest that they use the solutions website
                            (link: <textarea id='text_box_number_2_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_2_page_6_script_8")} ></textarea>)<br/>
                            Encourage them!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}



export default Page6;

