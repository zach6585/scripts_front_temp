import { Component } from 'react';

import stopShare from "../../pictures/stopshare.png";

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

    getLink = (current_id_tag) => {
        //Just like getValue but instead of textvalue it returns the link value
        let current_link_for_value = this.props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }
  
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Check in about coping strategies</h1>
                <div className="left container_for_small_margin">
                    <p>
                        You have been practicing coping straegies for almost three months.<br/>
                        Let's think about each of your coping strategies. <br/>
                        We are going to go through a worksheet to think about how each of your coping strategies is going. <br/>
                        In the last few sessions, we will work together on a plan to make sure you can use your coping strategies when mentoring is over.
                    </p>
                    <div id="instruction_box_number_1_page_5_script_14" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Send your mentee this link: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_14" defaultValue={this.getValue("text_box_number_1_page_5_script_14")} /><br/>
                            Ask your mentee if they want to share their screen or share yours.<br/>
                            Talk through the worksheet together. <br/>
                            If you think it would help your mentee, you can use the solution website together (link: <a href={this.getLink("video_link_page_5_script_14")} id="video_link_page_5_script_14" target="_blank" rel="nopener noreferrer">Solutions Link</a>).<br/>
                            When you are done, stop screen sharing.
                        </p>
                    </div>
                    <img src={stopShare} alt="Stop sharing screen" id="stop_sharing_screen_page_5_script_14" />
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
        links: state.links.links
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
