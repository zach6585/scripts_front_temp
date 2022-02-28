import { Component } from 'react';
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../actions/text';

import shareScreen from "../pictures/sharescreen.png";
import stopShare from "../pictures/stopshare.png";




class SharingAboutMentoring extends Component {

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
                <h1 className="bold center">Sharing about mentoring</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        You have the option of sharing information about what we did in mentoring with someone who supports you. <br/><br/>
                        Do you think you want to do that this week? It's your choice if you would like to share about what you're learning, or not, with someone who you really trust like a family member, teacher, or counselor. If you do want to share, then I'll have you fill out a short worksheet!  If you don't want to share, that's okay too! 
                    </p>

                    <div id="instruction_box_number_1_sharing_about_mentoring" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">If they want to share, click the link for the worksheet:</p>
                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=H9sOck5cQ0CBQSFKY6fq1SOlKg2DiYZAgs7GzoizMlhUNVNHSzNKT0xKQTY1N1JSWFQ4RDNZNVJUVS4u" className="sharing_about_mentoring_a" target="_blank" rel="nopener noreferrer">Link</a>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <div id="instruction_box_number_2_sharing_about_mentoring" className="custom_svg demo_box container_for_large_margin" >
                            <p className="top_line_in_instruction_box">Share your screen</p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" id="share_screen_sharing_about_mentoring" />
                    </div>
                
                    <div className='container_for_extra_large_margin'>
                        <div id="instruction_box_number_3_sharing_about_mentoring" className="custom_svg demo_box" >
                            <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                        </div>
                        <img src={stopShare} alt="Stop sharing" id="stop_share_sharing_about_mentoring" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SharingAboutMentoring);
