import { Component } from 'react';
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';



class Page5 extends Component {
    
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
                <h1 className="bold center">Learning about mental health conditions</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Last week, we talked about the big topic of mental health.<br/>
                        Mental health is all about how we think, feel, and act.  Mental health is about how we handle stress.<br/><br />
                        A mental health condition is when a person is having a hard time with how they think, feel, and act.<br/><br/>
                        You mentioned that mental health is <br/>
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_2" defaultValue={this.getValue("text_box_number_1_page_5_script_2")} />
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);

