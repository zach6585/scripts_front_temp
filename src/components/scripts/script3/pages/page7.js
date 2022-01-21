import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import BodyDiagram from '../../general pages/bodydiagram';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import body from '../../pictures/body.png';


class Page7 extends Component {

    state = {
        body_image_clicked: false,
        main_div: "show",
        image_and_text_boxes_div: "hide"
    }

   
    handleBodyImageClicked = (event) => {
        this.setState(prevState => ({body_image_clicked: !prevState.body_image_clicked, main_div: prevState.image_and_text_boxes_div, image_and_text_boxes_div: prevState.main_div}))
        
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
            <div>
                <div className='sheet'>
                    <div className={`body_page_main_div ${this.state.main_div}`}>
                        <h1 className="bold center">Body scan</h1>
                        <div className="left container_for_medium_margin">
                            
                            <p>Now we will practice thinking about how your body feels using something called a body scan.</p>
                            <div id="div_with_body_image_and_p_page_7_script_3">
                                <p>Our bodies can help us learn about our feelings and emotions. I will show you an example.</p>
                                <input type="image" alt="Body image" src={body} name="body_image" className="body_diagram_button" id="body_image_button" onClick={event => this.handleBodyImageClicked(event)} />
                            </div>
                            <br/>
                            <div id="instruction_box_number_1_page_7_script_3" className="custom_svg demo_box container_for_medium_margin">
                                <p className="top_line_in_instruction_box">Click on the [link to be inserted] and share your screen. </p>
                                <br/><br/><br/>
                                <img src={shareScreen} alt="Share screen" id="share_your_screen_page_7_script_3"/>
                                <br/><br/>
                                <p>Explain your example </p>
                            </div>
                            <br/>
                            <div id="instruction_box_number_2_page_7_script_3" className="custom_svg demo_box container_for_large_margin">
                                <p className='top_line_in_instruction_box'>When you are done, stop screen sharing</p>
                                <img src={stopShare} alt="Stop sharing screen" id="stop_sharing_screen_page_7_script_3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`body_diagram_popup ${this.state.image_and_text_boxes_div}`}><BodyDiagram script={this.props.script} /></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page7);
