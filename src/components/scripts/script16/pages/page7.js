import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import shareScreen from "../../pictures/sharescreen.png";
import stopShare from "../../pictures/stopshare.png";

const Page7 = (props) => {
    
    const handleChange = (event) => {
        const object_outcome = getObject(event.target.id)
        object_outcome === "" ? 
        props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: props.mentee_id, script: props.script})
        :
        props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: props.mentee_id, script: props.script})
    
    }
    
    const getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }
    
    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
    return (
        <div className="sheet">
            <h1 className="bold center">Making a plan to keep practicing</h1>
            <div className='left'>
                <div className="container_for_small_margin">
                    <p>
                        Last week we made a plan to keep practicing your coping strategies. Let's review that plan. <br/><br/>
                        I added your planning worksheet to your coping strategy toolkit. Let's take a look at it. 
                    </p>
                </div>

                <div id="instruction_box_number_1_page_7_script_16" className="custom_svg demo_box container_for_large_margin">
                    <p className="top_line_in_instruction_box">
                        Coping strategy toolkit link:  
                        <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_7_script_16" defaultValue={getValue("text_box_number_1_page_7_script_16")} /><br/><br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_7_script_16" defaultValue={getValue("text_box_number_1_page_7_script_16")} />
                    </p>
                </div>

                <div id='image_and_instruction_box_div_number_1_page_6_script_16' className='container_for_large_margin'>
                    <div id="instruction_box_number_2_page_6_script_16" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            Share your screen or ask them to share their screen
                        </p>
                    </div>
                    <img src={shareScreen} alt="Share your screen" />
                </div>

                <div id='image_and_instruction_box_div_number_2_page_6_script_16' className='container_for_small_margin'>
                    <div id="instruction_box_number_3_page_6_script_16" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            When you are finished, stop sharing your screen 
                        </p>
                    </div>
                    <img src={stopShare} alt="Stop sharing your screen" />
                </div>

            </div>
        </div>
    )
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
