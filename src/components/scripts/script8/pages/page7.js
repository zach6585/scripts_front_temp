import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';
import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';


class Page7 extends Component {

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

    getLink = (current_id_tag) => {
        //Just like getValue but instead of textvalue it returns the link value
        let current_link_for_value = this.props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Picking strategy #2</h1>
                <div className='left container_for_small_margin'>
                    <p>
                        You have been doing a great job with learning about and practicing your coping strategy. 
                        Now we are going to pick another one! It's important that you have more than one coping strategy. <br/>
                        Can you think of reasons why it would be helpful to have more than one coping strategy? 
                    </p>
                    <img className='pause' src={pause} alt="Pause symbol" />
                    <img className='allEars' src={allEars} alt="Hand to ear" />
                    <br/>

                    <div id="instruction_box_number_1_page_7_script_8" className="custom_svg demo_box container_for_medium_margin">
                        <p className='top_line_in_instruction_box'>
                            Encourage and validate your mentee.<br/><br/>
                            Some ideas of things to say are:
                        </p>
                        <ul>
                            <li>That's a great point!</li>
                            <li>I agree!</li>
                            <li>Good idea!</li>
                        </ul>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            The more coping strategies you have and like, the easier it can be to cope with stress and challenging feelings.<br/><br/>
                            To help you pick another coping strategy, we are going to look back at the coping strategy card sort. 
                        </p>
                        <textarea id='text_box_number_1_page_7_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_1_page_7_script_8")} />
                    </div>

                    <div className='container_for_large_margin'>

                        <div id="instruction_box_number_2_page_7_script_8" className="custom_svg demo_box">
                            <p className='top_line_in_instruction_box'>Share your screen and send your mentee the card sort link</p>
                        </div>

                        <img src={shareScreen} id="share_your_screen_page_7_script_8" alt="Share your screen" />
                    </div>

                    <div className='container_for_extra_small_margin'>
                        <p>Which activities make you feel calm or happy? </p>
                        <img className='pause' src={pause} alt="Pause symbol" />
                        <img className='allEars' src={allEars} alt="Hand to ear" />
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            That's great!<br/>
                            Coping strategies should take 15 minutes or less to do.<br/>
                            Coping strategies should be activities you can do in lots of different places.
                            Do you feel like any of those are activities that you could do in lots of different places?<br/><br/>
                            Do you feel like you can do the activity in 15 minutes or less?
                        </p>
                        <img className='pause' src={pause} alt="Pause symbol" />
                        <img className='allEars' src={allEars} alt="Hand to ear" />
                    </div>

                    <div id="instruction_box_number_3_page_7_script_8" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee pick an activity that they will work on.<br/>
                            It should be something that  
                        </p>
                        <ul>
                            <li>makes them feel good</li>
                            <li>they can do in many different places</li>
                            <li>takes 15 minutes or less</li>
                        </ul>
                        <p> If they can't decide, remind them that they will still get a chance to pick one more strategy during mentoring. </p>
                    </div>
                    
                    <div className='container_for_small_margin'>
                        <div id="instruction_box_number_4_page_7_script_8" className="custom_svg demo_box">
                            <p className='top_line_in_instruction_box'>When you are finished, stop sharing your screen</p>
                        </div>
                        <img src={stopShare} alt="Stop sharing your screen" id='stop_sharing_screen_page_7_script_8' />
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>
                            This week, try to practice this new coping strategy.<br/><br/>
                            Do you think you will have any challenges with this coping strategy? 
                        </p>
                        <img className='pause' src={pause} alt="Pause symbol" />
                        <img className='allEars' src={allEars} alt="Hand to ear" />
                    </div>

                    <div id="instruction_box_number_5_page_7_script_8" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>If your mentee thinks they will have challenges use the <a href={this.getLink("video_link_page_7_script_8")} id="video_link_page_7_script_8" target="_blank" rel="nopener noreferrer">solutions website</a> to help them think of potential solutions. </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>When will you try your strategy this week?</p>
                    </div>

                    
                    <div id="instruction_box_number_6_page_7_script_8" className="custom_svg demo_box container_for_small_margin">
                        <em><p className='top_line_in_instruction_box'>If your mentee is not sure, ask:</p></em>
                        <ul>
                            <li>What time of day would you like to try out the activity?</li>
                            <li>Is there a place you will try out the coping strategy?</li>
                            <li>Will you set a reminder to practice the coping strategy [help them to do set the reminder, if they need help?</li>
                        </ul>

                        <div className='container_for_small_margin'>
                            <p>Provide encouragement:</p>
                            <ul>
                                <li>Good idea!</li>
                                <li>That sounds great!</li>
                            </ul>
                        </div>
                        
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
        script: state.texts.currentScript,
        links: state.links.links
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page7);