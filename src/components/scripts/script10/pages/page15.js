import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

class Page15 extends Component {

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
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p>
                            Today we talked about anxiety and your second coping strategy. We also worked on your toolkit. 
                        </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>
                            This week, you will practice using your new strategy, <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_15_script_10" defaultValue={this.getValue("text_box_number_1_page_15_script_10")} />.<br/>
                            You said you would practice your strategy this week <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_15_script_10" defaultValue={this.getValue("text_box_number_2_page_15_script_10")} />
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>You can use your toolkit to help you remember your coping strategies and solve challenges.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page15);
