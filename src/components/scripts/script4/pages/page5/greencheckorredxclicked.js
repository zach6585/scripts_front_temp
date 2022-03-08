import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { patchTexts, postTexts } from '../../../../../actions/text';

import pause from "../../../pictures/pause.png";
import allEars from "../../../pictures/allears.png";


const GreenCheckOrRedXClicked = props => {

    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [lastLine, setLastLine] = useState("");
    
    // eslint-disable-next-line
    useEffect(() => {textPicker()}, [])


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


    const textPicker = () => { //If props.x_or_check_picked === "check" then we go down the route of the check. If it's x then we go down the x route
        if (props.x_or_check_picked === "check"){
            setFirstLine(<div>
                <p>Ask your mentee about how they define coping strategies</p>
                <img className="pause" src={pause} alt="pause" /> 
                <img className="allEars" src={allEars} alt="All ears" />
            </div>);
            setSecondLine("That's a great way to think about it. The way I think about coping strategies, is that they are things you can do to help you have better mental health. Coping strategies can help people relax and feel better when they have upsetting thoughts or feelings.");
            setLastLine("")
        }
        else if (props.x_or_check_picked === "x"){
            setFirstLine("");
            setSecondLine("That's ok. Coping strategies are a new idea for a lot of people. Coping strategies are things you can do to help you have better mental health. ")
            setLastLine("Thanks for sharing we will work on finding more coping strategies today.");
        }
    }
    if (props.x_or_check_picked === "check"){
        return(
            <div>
                {firstLine}
                <div className='container_for_small_margin'>
                    <p>
                        {secondLine} For example, sometimes I feel 
                    </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_4" defaultValue={getValue("text_box_number_2_page_5_script_4")} />. 
                    <p>When I feel </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_5_script_4" defaultValue={getValue("text_box_number_3_page_5_script_4")} />, 
                    <p>
                        I <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_5_script_4" defaultValue={getValue("text_box_number_4_page_5_script_4")} />. 
                    </p>
                    <p>
                        Doing this makes me feel better, so it is a coping strategy. Is there anything that you do that helps make you feel better?
                    </p>
                    <img className="pause" src={pause} alt="pause" /> 
                <img className="allEars" src={allEars} alt="All ears" />
                </div>
                <p>{lastLine}</p>
            </div>
            
        )
    }
    else{
        return(
            <div>
                {firstLine}
                <div className='container_for_small_margin'>
                    <p>
                        {secondLine} For example, sometimes I feel 
                    </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_5_script_4" defaultValue={getValue("text_box_number_5_page_5_script_4")} />. 
                    <p>When I feel </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_6_page_5_script_4" defaultValue={getValue("text_box_number_6_page_5_script_4")} />, 
                    <p >
                        I <textarea onChange={event => handleChange(event)} id="text_box_number_7_page_5_script_4" defaultValue={getValue("text_box_number_7_page_5_script_4")} />. 
                    </p>
                    <p>
                        Doing this makes me feel better, so it is a coping strategy. Is there anything that you do that helps make you feel better?
                    </p>
                    <img className="pause" src={pause} alt="pause" /> 
                <img className="allEars" src={allEars} alt="All ears" />
                </div>
                <p>{lastLine}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(GreenCheckOrRedXClicked);