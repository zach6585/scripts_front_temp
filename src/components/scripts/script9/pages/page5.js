import { Component } from 'react';

import shareScreen from "../../pictures/sharescreen.png";
import stopShare from "../../pictures/stopshare.png";
import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page5 extends Component {

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
    
    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }
    
    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
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

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
