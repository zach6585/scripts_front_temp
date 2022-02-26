import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';

import '../../extcss.scss';


class Page5 extends Component {
    
    componentDidMount() {
        window.scroll({top:0,behavior:'smooth'});
    }

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
                <h1 className="bold center">Reviewing coping strategies</h1>
                <div className="left container_for_medium_margin">
                   <p>Last time, we talked about coping strategies. Do you remember what coping strategies are? </p>
                   <img src={pause} alt="Pause" className='pause' id="pause_page_5_script_6" />
                   <img src={allEars} alt="Listen" className='allEars' id="all_ears_page_5_script_6"/>
                   <div className='container_for_medium_margin'>
                        <p>
                           Coping strategies are activities that make you feel good. They can help you lower stress.<br/>
                        </p>
                        <div className='container_for_medium_margin'>
                            <form>
                                <div className="extcss" id="form_fields_div">
                                    <span className='side_text'>For example, sometimes I feel&nbsp;</span>
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_1_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_1_page_5_script_6"
                                            id="text_box_number_1_page_5_script_6"
                                        />
                                    </span>
                                    <span className='side_text'>&nbsp;when</span>
                            

                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_2_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_2_page_5_script_6"
                                            id="text_box_number_2_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_2_page_5_script_6">(stressful or sad situation)</label>
                                    </span>
                                    <span className='side_text'>. So, I</span>
                                

                                
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_3_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_3_page_5_script_6"
                                            id="text_box_number_3_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_3_page_5_script_6">(coping strategy)</label>
                                    </span>
                                    <span className='side_text'>&nbsp;to feel better. This means&nbsp;</span>
                                

                                
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_4_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_4_page_5_script_6"
                                            id="text_box_number_4_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_4_page_5_script_6">(coping strategy)</label>
                                    </span>
                                    <span className='side_text'>&nbsp;is one of my coping strategies.</span>
                                </div>
                            </form>  
                        </div>

                        <div className='container_for_medium_margin'>
                            <p>Last week we talked about some activities that you could use as coping strategies. We are going to practice using a coping strategy.</p>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
