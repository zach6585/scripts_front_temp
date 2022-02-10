import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

const Page11 = (props) =>{

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

    const placeholderText = "Write something nice you want to share with your mentee. Think about some things you liked about getting to know them. You can write exactly what you want to say, or write bullet points."
    return (
        <div className="sheet">
            <h1 className='center'>Saying goodbye</h1>
            <div className="left">
                <div id="instruction_box_number_1_page_11_script_16" className="custom_svg demo_box">
                    <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_11_script_16" defaultValue={getValue("text_box_number_1_page_11_script_16")} placeholder={placeholderText} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page11);
