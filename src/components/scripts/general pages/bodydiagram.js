
import { connect } from "react-redux";

import { patchTexts, postTexts } from '../../../actions/text';
import { printDocument } from "../../../actions/body";


import body from '../pictures/bodynotext.png';



import '../extcss.scss';

const BodyDiagram = (props) => {

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

    const handlePNGButtonClick = (event) => {
        const input = document.getElementsByClassName("bodyScanImageDiv")[0];
        props.printDocument(input, props.mentee_name)
    }


    return(
        <div className="bodyScanImageDiv">
            <img src={body} alt="Body diagram" id={`body_image_script_${props.script}`} />
            
                <div className='feelings_div'>
                    <span>Feelings</span><br/>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_1_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_1_body_diagram_script_${props.script}`)}/>
                </div>
                <div className='head_div'>
                    <span>Head</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_2_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_2_body_diagram_script_${props.script}`)}/>
                </div>
                
               <div className='chest_div'>
                    <span>Chest</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_3_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_3_body_diagram_script_${props.script}`)}/>
                </div>
            
                <div className='mouth_and_jaw_div'>
                    <span>Mouth and jaw</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_4_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_4_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='breathing_div'>
                    <span>Breathing</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_5_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_5_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='shoulders_div'>
                    <span>Shoulder</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_6_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_6_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='stomach_div'>
                    <span>Stomach</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_7_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_7_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='hands_and_arms_div'>
                    <span>Hands and arms</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_8_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_8_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='legs_and_feet_div'>
                    <span>Legs and feet</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_9_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_9_body_diagram_script_${props.script}`)}/> 
                </div>
                
                <div className='fidgeting_div'>
                    <span>Fidgeting</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_10_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_10_body_diagram_script_${props.script}`)}/>
                </div>

                <div className='energy_level_div'>
                    <span>Change in energy level</span>
                    <textarea onChange={event => handleChange(event)} id={`text_box_number_11_body_diagram_script_${props.script}`} defaultValue={getValue(`text_box_number_11_body_diagram_script_${props.script}`)}/>
                </div> 

                <button className="downloadAsPNGButton" onClick={event => handlePNGButtonClick(event)}>Click to download as PNG</button>

        </div> 
    )
}


const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_name: state.mentees.current_mentee_name,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        printDocument: (htmlInfo, mentee_name) => dispatch(printDocument(htmlInfo, mentee_name))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyDiagram);