import { Component } from 'react';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";
import stopShare from "../../pictures/stopshare.png";
import shareScreen from "../../pictures/sharescreen.png";
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


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
                <h1 className="bold center">Mental Health Worksheet</h1>
                <div className="left container_for_medium_margin">
                    <p>What does mental health mean to you? </p>
                    <img className="pause" src={pause} alt="pause" />
                    <img className="allEars" src={allEars} alt="All ears" />
                    <p>
                        Let's work together to find pictures that describe mental health.<br/>
                        You can do a search online or share pictures you have taken. <br/>
                        Or, you can send me an emoji or a GIF to show me what mental health means to you. <br/><br/>
                        There is no right or wrong way to do this. I can help you if you want.<br/><br/>
                        Here is an example.
                    </p>
                    <div className="div_for_controlling_wrapping">
                        <div id="instruction_box_number_1_page_6_script_2" className="custom_svg demo_box container_for_medium_margin" >
                            <p className="top_line_in_instruction_box">
                                Share your screen to show your picture<br/><br/>
                                Link to your picture: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_6_script_2" defaultValue={this.getValue("text_box_number_1_page_6_script_2")} />
                            </p>
                        </div>

                        <img src={shareScreen} alt="Share Screen" id="share_your_screen_page_6_script_2" />
                    </div>
                    <p>I picked this picture because<br/>
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_6_script_2" defaultValue={this.getValue("text_box_number_2_page_6_script_2")} />
                    </p>
                    <br/>
                    <img src={stopShare} alt="Stop share" id="stop_sharing_screen_page_6_script_2" />
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