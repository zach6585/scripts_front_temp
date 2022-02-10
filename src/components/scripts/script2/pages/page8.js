import { Component } from 'react';

import jake from "../../pictures/jake.png";
import jerome from "../../pictures/jerome.png";
import maggie from "../../pictures/maggie.png";
import shareScreen from "../../pictures/sharescreen.png";
import stopShare from "../../pictures/stopshare.png";
import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";


import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page8 extends Component {

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.mentee_id, script: this.props.script})

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
                <div className="left">
                    <p>Now take a look at these pictures.  Each picture is of a person who has a cold. Some of these people will have the same symptoms.  But some of the symptoms might also be a little bit different. </p>
                    <div id="instruction_box_number_1_page_8_script_2" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>Share your screen</p>
                    </div>

                    <img src={shareScreen} alt="Share Screen" id="share_your_screen_number_1_page_8_script_2" />
                    <div className='container_for_medium_margin'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><img src={jake} alt="Jake" id="jake" /></td>
                                    <td>When Jake starts to get a cold, the first symptom he notices is his stuffy nose. Jakes has to keep blowing his nose over and over. His stuffy nose is a warning sign that he's getting a cold. After he gets his stuffy nose, he gets a stomach. This is another symptom. He drinks ginger ale to help his stomach feel better. </td>
                                </tr>
                                <tr>
                                    <td><img src={jerome} alt="Jerome" id="jerome" /></td>
                                    <td>Every winter, Jerome gets a bad cold. Usually the first symptom he feels is when he gets a really bad headache. His eyes hurt too. When his head and his eyes hurt, it's a warning sign he is getting a cold.</td>
                                </tr>
                                <tr>
                                    <td><img src={maggie} alt="Maggie" id="maggie" /></td>
                                    <td>Maggie's first cold symptom is a runny nose. It's her warning sign that she's starting to get sick. She tries to get extra sleep and rest to cope with her symptoms.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='container_for_medium_margin'>
                        <img className="center" src={stopShare} alt="Stop Share" id="stop_sharing_screen_page_8_script_2" />
                        <p>
                            Let's switch from talking about physical health, like having a cold, and now talk about mental health.<br/>
                            Symptoms can be upsetting thoughts, strong or big emotions, and feeling a need to do certain behaviors. If symptoms are really strong or go on for a long time, they can cause problems with people's daily life.<br/>
                            I'd like to tell you about the symptoms I have with my mental health condition. The name of my mental health condition is<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_8_script_2" defaultValue={this.getValue("text_box_number_1_page_8_script_2")} /><br/>
                            The symptoms I have include:<br/><br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_8_script_2" defaultValue={this.getValue("text_box_number_2_page_8_script_2")} /><br/>
                            Before we move on to an activity where you get to think about your own symptoms, I'm wondering if there's anything about 'symptoms' that was confusing or that you want to talk more about? <br/>
                            Here are some cards that show mental health symptoms other young adults have. You might have some of these symptoms too. Let's sort them into two piles—symptoms you sometimes have and symptoms you don't have.<br/>
                            If you have questions about these symptoms, I can try to help you understand them better.
                        </p>
                   </div>
                   
                    <div id="instruction_box_number_2_page_8_script_2" className="ital custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Do the card sort together<br/>
                            If you have any of the same symptoms as your mentee, tell them that you have that same symptom.<br/>
                            Make sure to say "thank you for sharing."<br/><br/>
                            If they talk about their symptoms causing challenges, You can say things that show you understand, such as:
                        </p>
                        <ul>
                            <li>-"That sounds hard"</li>
                            <li>-"That happens to me sometimes too"</li>
                        </ul>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            During our time together, we are going to be learning a lot about mental health and how to keep your symptoms from getting in the way of things you want to do! Remember, you are not alone in feeling this way - there are a lot of young adults, including me, who are going through similar things as you.<br/>
                            Now we will watch a video to learn more about symptoms.<br/>
                        </p>
                    </div>
                    
                    <div className='container_for_small_margin'>
                        <a href="https://drive.google.com/file/d/1cxN_Bzo3uN-Mkt6nL29vEMUJTXLB7tPk/view?usp=sharing">Video link</a><br/><br/>
                        <div id="image_and_instruction_box_div_page_8_script_2" className='container_for_extra_small_margin'>
                            <div id="instruction_box_number_3_page_8_script_2" className="custom_svg demo_box">
                                <p className="top_line_in_instruction_box">
                                    Share your screen <br/><br/>
                                    -Share sound<br/><br/>
                                    -Optimize for video
                                </p>
                            </div>
                            <img src={shareScreen} alt="Share screen" id="share_your_screen_number_2_page_8_script_2" />
                        </div>
                    </div>
                    

                    
                    
                    <img src={optimizeVideo} alt="Optimize video" id="optimize_video_page_8_script_2" />
                    
                    <div className='container_for_large_margin'>
                        <p>
                            In the video, they talked about there being things that make symptoms worse. Some things that make my symptoms worse are:<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_8_script_2" defaultValue={this.getValue("text_box_number_3_page_8_script_2")} /><br/><br/>
                            What about you? What makes your symptoms worse?
                        </p>
                        <img src={allEars} alt="All ears" className="allEars" />
                        <img src={pause} alt="Pause" className="pause" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);