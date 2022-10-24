import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../actions/text';

class TimeForQuestions extends Component {
    
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
                <h1 className="bold center">Time for questions</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We are almost done for today.<br/>
                        Do you have any questions or comments about what we talked about?  Is there anything that you wish we could talk more about?
                    </p>

                    <div className='container_for_small_margin'>
                        <p>Write their question here:</p>
                    </div>

                    <div className='container_for_medium_margin'>
                            <textarea className="questions_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_1_time_for_questions_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_1_time_for_questions_script_${this.props.script}`)} />
                    </div>

                    <div className='custom_svg demo_box container_for_small_margin questions_instructions_box'>
                        {this.props.script === "16" ? 
                            <p className='top_line_in_instruction_box'>
                                 If they ask you a question you don't know the answer to, let them know you'll find out and be in touch.
                            </p>
                        :
                            <p className='top_line_in_instruction_box'>
                                <em>If they ask you a question that you don't know the answer to, say:</em> <br/>
                                I don't know the answer to that question. I will ask someone and tell you the answer next time we talk. 
                            </p>
                        }
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeForQuestions);



