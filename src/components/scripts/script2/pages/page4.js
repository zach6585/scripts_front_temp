import { Component } from 'react';
import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { postComments } from '../../../../actions/comments';
    


class Page4 extends Component {

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
            <div className={`sheet ${this.props.commentMode}`}>
                <h1 className="bold center">Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p>I think it would be fun to get to know more about each other. </p>

                    <div id="instruction_box_number_1_page_4_script_2" className="ital custom_svg demo_box container_for_small_margin">
                        <img src={shareScreen} alt="Share Screen" id="share_your_screen_page_4_script_2" />
                        <p className="top_line_in_instruction_box">
                            Click on the <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_2" defaultValue={this.getValue("text_box_number_1_page_4_script_2")} placeholder='link to be inserted' /> and<br/><br/>
                            share your screen.<br/><br/>    
                            Take turns picking question to ask each other in the XXX game. 
                        </p>
                    </div>
                    <div className='container_for_small_margin'>
                        <p>
                            We will click on the boxes. A question will show up in the box and we will both answer it.<br/>
                            If you also have a question that isn't in game, but you really want to ask me, just let me know!<br/>
                        </p>
                    </div>
                    
                    <div id="instruction_box_number_2_page_4_script_2" className="ital custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">When you are done with the game, stop screen sharing</p>
                        <img src={stopShare} alt="Stop share" id="stop_sharing_screen_page_4_script_2" />
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
        commentMode: state.comments.commentMode
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        postComments: () => dispatch(postComments())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page4);
