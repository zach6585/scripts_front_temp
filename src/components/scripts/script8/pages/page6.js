import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import shareScreen from '../../pictures/sharescreen.png';

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
                <h1 className="bold center">Making a coping strategy toolkit</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Sometimes it can be hard to remember the coping strategies that work well for you.<br/>
                        We are going to make a coping strategy toolkit together.<br/>
                        This will be something that you can use when you need to use a coping strategy. <br/>
                        Here is an example of my toolkit
                    </p>
                    <div className='container_for_large_margin'>
                        <div id="instruction_box_number_1_page_6_script_8" className="custom_svg demo_box">
                            <p className='top_line_in_instruction_box'>
                                Share your screen<br/>
                                Insert link: <textarea id='text_box_number_3_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_3_page_6_script_8")} ></textarea>
                            </p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" id="share_your_screen_page_6_script_8" />
                    </div>

                    <div className='container_for_small_margin'>
                        <p>I use my toolkit when <textarea id='text_box_number_1_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_1_page_6_script_8")} /></p>
                    </div>

                    <div id="instruction_box_number_2_page_6_script_8" className="custom_svg demo_box container_for_large_margin">
                        <p className='top_line_in_instruction_box'>Show your mentee a few slides and talk to them about how you can use your toolkit and what you put in it.</p>
                    </div>

                    <div className='container_for_extra_large_margin'>
                        <p>Today we will start making a toolkit for you. I'll send you a link so you can get started.</p>
                    </div>
                    
                    <div id="instruction_box_number_3_page_6_script_8" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Send your mentee the link<br/>
                            Link: <textarea id='text_box_number_3_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_3_page_6_script_8")} ></textarea><br/>
                            <strong>Stop screen sharing and ask your mentee to screen share.</strong>
                        </p>
                        
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            So far, we have talked about one strategy that works well for you. Do you remember that strategy? <br/>
                            We'll put that strategy in the toolkit. You can write the words or add a picture.
                        </p>
                    </div>
                

                    <div id="instruction_box_number_4_page_6_script_8" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee pick out a picture. <br/>
                            Help them complete the slides on the toolkit. You can give suggestions. If they need help for thinking of how they will solve challenges, you can suggest that they use the solutions website
                            (link: <textarea id='text_box_number_2_page_6_script_8' onChange={event => this.handleChange(event)} defaultValue={this.getValue("text_box_number_2_page_6_script_8")} ></textarea>)<br/>
                            Encourage them!
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);

