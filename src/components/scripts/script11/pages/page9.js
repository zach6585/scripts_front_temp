import { Component } from 'react';

import shareScreen from "../../pictures/sharescreen.png";

import stopShare from "../../pictures/stopshare.png";

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

import { connect } from 'react-redux';
 
import { patchTexts, postTexts } from '../../../../actions/text';



class Page9 extends Component {

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
                <h1 className="bold center">Picking strategy #3</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        You have been doing a great job with your coping strategies. Now we are going to pick another one! It's important that you have a few coping strategies, because different coping strategies work best in different places.<br/><br/>
                        To help you pick another coping strategy, we are going to look back at the coping strategy card sort.
                    </p>
                    
                    <div id="instruction_box_number_1_page_9_script_11" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Share your screen and send your mentee the card sort link
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_9_script_11" defaultValue={this.getValue("text_box_number_1_page_9_script_11")} />
                         </p>
                    </div>
                    <img src={shareScreen} alt="Share screen" id="shareScreen_number_1_page_9_script_11" /><br/><br/><br/><br/><br/>

                    <div className='container_for_large_margin'>
                        <p>Which activities make you feel calm or happy?</p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                        <p>
                            That's great! <br/>
                            Coping strategies should take 15 minutes or less to do. <br/>
                            Coping strategies should be activities you can do in lots of different places. Do you feel like any of those are activities that you could do in lots of different places? <br/><br/>
                            Do you feel like you can do the activity in 15 minutes or less?

                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>
                    
                    <div id="instruction_box_number_2_page_9_script_11" className="custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box"> 
                            Help your mentee pick an activity that they will work on.<br/>
                            It should be something that 
                         </p>
                         <ul>
                             <li>makes them feel good </li>
                             <li>they can do in many different places</li>
                             <li>takes 15 minutes or less</li>
                         </ul>
                    </div>

                    <div id="instruction_box_number_3_page_9_script_11" className="custom_svg demo_box container_for_extra_large_margin">
                        <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                    </div>
                    <div className='container_for_extra_large_margin'></div>
                    <img src={stopShare} alt="Stop sharing" id="stopShare_number_2_page_9_script_11" /><br/><br/><br/>
                    <div className='container_for_extra_large_margin'>
                        <p>
                            This week, try to practice this new coping strategy.<br/><br/>
                            Do you think you will have any challenges with this coping strategy? 
                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>

                    <div id="instruction_box_number_4_page_9_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">If your mentee thinks they will have challenges use the solutions website <a href="https://sites.google.com/view/peer-mentoring-solutions" id="video_link_page_9_script_11" target="_blank" rel="nopener noreferrer">Link</a> to help them think of potential solutions. </p>
                    </div>

                    <div className='container_for_large_margin'>
                        <p>When will you try your strategy this week? </p>
                    </div>

                    <div id="instruction_box_number_5_page_9_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box"><em>If your mentee is not sure, ask:</em></p>
                        <ul>
                            <li>What time of day would you like to try out the activity?</li>
                            <li>Is there a place you will try out the coping strategy?</li>
                            <li>Will you set a reminder to practice the coping strategy [help them to do set the reminder, if they need help]</li>
                        </ul>
                        <p>Provide encouragement</p>
                        <ul>
                            <li>Good idea!</li>
                            <li>That sounds great!</li>
                        </ul>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>Let's add your strategy to your toolkit. You can just write the name of it now. We'll have time to add more information next week. </p>
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



