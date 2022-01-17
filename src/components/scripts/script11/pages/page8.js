import { Component } from 'react';

import shareScreen from "../../pictures/sharescreen.png";

import stopShare from "../../pictures/stopshare.png";

import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";



import axios from 'axios';


class Page8 extends Component {

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
                if (txt.script === "11"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "11"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "11" })
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
                <h1 className="bold center">Getting help when you need it</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Everyone needs help with their mental health sometimes. Having help from other people can make dealing with mental health easier. It can also help your mental health to be around people you like and feel safe with. <br/><br/>
                        We are going to watch a video about asking for help when you need it. Feel free to ask me to stop the video if you have questions. <br/>
                        You can also let me know me if you are starting to have a feeling you don't like while watching the video. We can stop the video at any time.
                    </p>
                    <a id="video_link_page_8_script_11" href="https://drive.google.com/file/d/18EeRXFORyLuGCyC8wG81Cs7HxQ1He9AY/view?usp=sharing">Video link</a>
                    
                    <div id="instruction_box_number_1_page_8_script_11" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Share your screen<br/>
                            -Share sound<br/>
                            -Optimize for video
                         </p>
                    </div>
                        <img src={shareScreen} alt="Share screen" id="shareScreen_number_1_page_8_script_11" />
                        
                        <img src={optimizeVideo} alt="Optimize video" id="optimize_video_page_8_script_11" />
                    <div id="instruction_box_number_2_page_8_script_11" className="custom_svg demo_box container_for_extra_large_margin">
                        <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                    </div>
                    <img src={stopShare} alt="Stop sharing" id="stopShare_number_1_page_8_script_11" />
                    <div className='container_for_medium_margin'>
                    <p>
                        One thing I really liked in the video was <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_8_script_11" defaultValue={this.getValue("text_box_number_2_page_8_script_11")} />.<br/>
                        How did watching the video make you feel?
                    </p>
                        <img src={allEars} alt="All ears" className="allEars" />
                        <img src={pause} alt="Pause" className="pause" />
                    </div>

                    <div id="instruction_box_number_3_page_8_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">If your mentee had a hard feeling while watching the video, ask if they would like to take a 8 minute break or listen to a favorite song. </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>Did you learn anything new in the video? </p>
                        <img src={allEars} alt="All ears" className="allEars" />
                        <img src={pause} alt="Pause" className="pause" />
                    </div>

                    <div className='container_for_large_margin'>
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_8_script_11" defaultValue={this.getValue("text_box_number_3_page_8_script_11")} placeholder='Share your example of when you have asked for support.' />
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            Today, we are going to think about all of the people who can support you with your mental health.<br/>
                            We will work together to make a page in your coping strategy toolkit so you can always remember who can help you out. <br/><br/>
                            I'll show you mine!
                        </p>
                    </div>

                    <div id="instruction_box_number_4_page_8_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box"> 
                            Share your screen and show your support map
                        </p>
                    </div>
                    <img src={shareScreen} alt="Share screen" id="shareScreen_number_2_page_8_script_11" />

                    <div className='container_for_medium_margin'>
                        <p>
                            Your support map doesn't have to look this way. You can have words or pictures, or both. I thought about who helps me with different things, but you could come up with a different way to make your map. 
                        </p>
                    </div>

                    <div id="instruction_box_number_5_page_8_script_11" className="custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                    </div>
                    <img src={stopShare} alt="Stop sharing" id="stopShare_number_2_page_8_script_11" />

                    <div className='container_for_medium_margin'>
                        <p>Now it's your turn. Let's work on making your map together.</p>
                    </div>

                    <div id="instruction_box_number_6_page_8_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                        Send your mentee the link to their toolkit in the chat<br/>
                        Link: [able to insert this]<br/>
                        Ask them to share their screen or you can both look at the toolkit on your own screens if you don't want to do screen share<br/>

                        </p>
                    </div>
                    
                    <div id="instruction_box_number_6_page_8_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">Help your mentee brainstorm their support network. <br/>
                            You can ask questions such as:<br/>
                        </p>
                        <ul>
                            <li>Who are people you really trust?</li>
                            <li>Who makes you feel comfortable? </li>
                            <li>Who are the best listeners?</li>
                            <li>Who help you feel better when you are sad or anxious?</li>
                            <li>Who is best at making you laugh or smile?</li>
                        </ul>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            Great job working on this. <br/>
                            Now, you have a reminder of who can help you when you need help.  
                        </p>
                    </div>
                </div>   
            </div>
        )
    }


}
export default Page8;

