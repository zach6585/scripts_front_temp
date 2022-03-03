import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import shareScreen from '../../pictures/sharescreen.png';
import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';


class Page9 extends Component{

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

    render(){
        return(
            <div className="sheet">
                <h1 className='bold'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_extra_small_margin left'>
                    <p>Sometimes it can be hard to do a coping strategy because things get in the way.</p>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that used to be hard for you. What made it hard?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_6" defaultValue={this.getValue("text_box_number_1_page_9_script_6")} />
                        </p>
                    </div>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that made you feel nervous or sad. What was that activity? Why did it make you feel nervous or sad?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_9_script_6" defaultValue={this.getValue("text_box_number_2_page_9_script_6")} />
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>Let's look at this website to think through the challenges you might have had.</p>
                        <br/>
                    </div>

                    <div className='container_for_extra_large_margin' id="image_and_instruction_box_div_page_9_script_6">
                        <div id="instruction_box_number_1_page_9_script_6" className="custom_svg demo_box">
                            <p className='top_line_in_instruction_box'>
                                Share your screen<br/>
                                Open <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_9_script_6" defaultValue={this.getValue("text_box_number_3_page_9_script_6")} />  
                            </p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" id="share_your_screen_page_9_script_6" />
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>Let's explore the website and look at the types of challenges people may have.</p>
                    </div>

                    <div id="instruction_box_number_2_page_9_script_6" className="custom_svg demo_box">
                        <p className='top_line_in_instruction_box'>
                            You and your mentee can click through the website pages together.<br/>
                            As your mentee shares their challenges, remember to provide encouragement. <br/>
                            You can also validate them by acknowledging that they are having a challenge or telling them that you sometimes also have that challenge.
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>What type of challenge do you have or think you might have with your coping strategy?</p>
                        <img src={pause} alt="Pause" className='pause' />
                        <img src={allEars} alt="Listen" className='allEars' />
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>
                            We can use <a href="https://sites.google.com/view/peer-mentoring-solutions" target="_blank" rel="nopener noreferrer">this website</a> to solve some of those challenges. <br/>
                            Click on the type of challenge you are having. <br/>
                            Do you think any of the solutions would help you? 
                        </p>
                    </div>

                    <div id="instruction_box_number_3_page_9_script_6" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>
                            Ask your mentee questions about their solution.
                        </p>
                        <ul>
                            <li>When will they try it?</li>
                            <li>Do they need help?</li>
                        </ul>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            We'll work more on this next week too! <br/>
                            This week, when will you practice your coping strategy? 
                        </p>
                    </div>

                    
                    <div id="instruction_box_number_4_page_9_script_6" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee figure out when they will use their coping strategy. <br/>
                            Ask them questions about where they use it.<br/>
                            You can also make sure they have all the materials they need.<br/>
                            Ask if they need help setting a reminder.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page9);



