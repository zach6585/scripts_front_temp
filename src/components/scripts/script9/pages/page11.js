import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page11 extends Component{

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

    render(){
        return(
            <div className="sheet">
                <h1 className='bold'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_extra_small_margin'>
                    <p>Sometimes it can be hard to do a coping strategy because things get in the way.</p>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that used to be hard for you. What made it hard?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_11_script_9" defaultValue={this.getValue("text_box_number_1_page_11_script_9")} />
                        </p>
                    </div>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that made you feel nervous or sad. What was that activity? Why did it make you feel nervous or sad?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_11_script_9" defaultValue={this.getValue("text_box_number_2_page_11_script_9")} />
                        </p>
                    </div>
                   
                   <div className='container_for_medium_margin'>
                       <p>We are going to use a card sort to reflect on things that may have made using your coping strategy hard.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page11);


