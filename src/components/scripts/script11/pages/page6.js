import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";
import stopShare from "../../pictures/stopshare.png";

class Page6 extends Component {

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
                <h1 className="bold center">Problem solving</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        Remember our website? We can use that to solve any challenges you have with your coping strategy. It's really common for young adults to have some challenges come up when trying out a new coping strategy. 
                    </p>
                    <div id="instruction_box_number_1_page_6_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Send your mentee the <a href="https://sites.google.com/view/peer-mentoring-solutions" id="video_link_page_6_script_11" target="_blank" rel="nopener noreferrer">link to the website </a>.<br/>
                            Ask if they want you to share their screen or if they want to share their screen. Help your mentee figure out what to click on. <br/>
                            Then help them look at the solutions.
                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <p>What kind of challenge do you think it was? </p>
                    </div>

                    <div id="instruction_box_number_2_page_6_script_11" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Help your mentee figure out what to click on. <br/>
                            Then help them look at the solutions. 
                        </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            Let's read the possible solutions listed.<br/>
                            Do you think any of them would work for you? 
                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>

                    <div id="instruction_box_number_3_page_6_script_11" className="custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box">
                            Help your mentee brainstorm ideas about what solutions they could use. Also give ideas for doing the solution. For example, helping them make a reminder or talking to someone about what they need.<br/><br/>
                            Help them brainstorm ideas. Ask them if they feel like they could use the solutions.<br/> 
                            If they need help figuring out what to do, help them as much as you can. <br/>
                            Give them positive feedback for their ideas. You can say things like:
                        </p>
                        <ul>
                            <li>Good job!</li>
                            <li>That's a great idea!</li>
                        </ul>
                    </div>

                    <div className='container_for_extra_small_margin'>
                        <div id="instruction_box_number_4_page_6_script_11" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen or ask your mentee to stop sharing their screen.</p>
                        </div>
                        <img src={stopShare} alt="Stop sharing" id="stop_sharing_screen_page_6_script_11" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);