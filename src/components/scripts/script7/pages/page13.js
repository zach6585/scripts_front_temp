import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page13 extends Component {
    
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
                <h1 className="bold center">Review</h1>
                <div className="left container_for_small_margin">
                    <p>
                        We did a lot today! <br/>
                        We talked about coming up with solutions when you have challenges practicing your coping strategy.<br/>
                        Next week we will work on another coping strategy. That way you will have more than one to choose from when you are feeling <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_13_script_7" defaultValue={this.getValue("text_box_number_1_page_13_script_7")} placeholder='Feeling they often have' /> <br/><br/>

                        This week, you will practice using your coping strategy and practicing solving challenges if they come up. 
                    </p>
                    <div id="instruction_box_number_1_page_13_script_7" className='custom_svg demo_box container_for_small_margin'>
                        <p className='top_line_in_instruction_box'>If your mentee tried a solution, remind them that they can use that solution or another idea at home.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page13);
