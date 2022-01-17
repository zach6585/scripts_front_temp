import { Component } from 'react';

import shareScreen from "../../pictures/sharescreen.png";
import stopShare from "../../pictures/stopshare.png";
import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";


import axios from 'axios';


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
                if (txt.script === "9"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "9"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "9" })
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
                <h1 className="bold center">Anxiety</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Anxiety is a really common mental health condition. Almost 20% of people in the United States have anxiety. That means for every 10 people, 2 people have anxiety. <br/><br/>
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_9" defaultValue={this.getValue("text_box_number_1_page_5_script_9")} /><br/><br/>
                        We are going to watch a video to learn more about anxiety. Feel free to ask me to stop the video if you have questions. <br/>
                        You can also let me know me if you are starting to have a feeling you don't like while watching the video. We can stop the video at any time.
                    </p>
                    <a id="video_link_page_5_script_9" href="https://drive.google.com/file/d/1eL579y48gDxodAhq1SHGuTAhAc2HAhTi/view?usp=sharing">Video link</a>
                        <br/>
                    <div id="div_for_controlling_wrapping">
                        <div id="instruction_box_number_1_page_5_script_9" className="custom_svg demo_box container_for_extra_small_margin">
                            <p className="top_line_in_instruction_box"> 
                                Share your screen<br/>
                                -Share sound<br/>
                                -Optimize for video
                            </p>
                        </div>
                    
                        <img src={shareScreen} alt="Share screen" id="share_your_screen_page_5_script_9" />
                    </div>
                        <img src={optimizeVideo} alt="Optimize video" id="optimize_video_page_5_script_9" />
                    <div id="instruction_box_number_2_page_5_script_9" className="custom_svg demo_box container_for_extra_large_margin">
                        <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                    </div>
                    <img src={stopShare} alt="Stop sharing" id="stop_sharing_screen_page_5_script_9" />
                    <div className='container_for_medium_margin'>
                        <p>How did watching the video make you feel?</p>
                        <img src={allEars} alt="All ears" className="allEars" />
                        <img src={pause} alt="Pause" className="pause" />
                    </div>

                    <div id="instruction_box_number_3_page_5_script_9" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">If your mentee had a hard feeling while watching the video, ask if they would like to take a 5 minute break or listen to a favorite song. </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>Did you learn anything new in the video? </p>
                        <img src={allEars} alt="All ears" className="allEars" />
                        <img src={pause} alt="Pause" className="pause" />
                    </div>

                    <div className='container_for_large_margin'>
                        <p>
                            Something I thought was interesting was <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_9" defaultValue={this.getValue("text_box_number_2_page_5_script_9")} /><br/><br/>
                            Do you have any questions about information in the video?
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_5_script_9" defaultValue={this.getValue("text_box_number_3_page_5_script_9")} />
                        </p>
                        
                    </div>
                </div>   
            </div>
        )
    }


}
export default Page5;
