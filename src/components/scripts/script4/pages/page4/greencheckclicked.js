import { patchTexts, postTexts } from '../../../../../actions/text';
import { connect } from 'react-redux';

const GreenCheckClicked = (props) => {

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

    return(
        <div>
            <p>
                Can you find something in your house that you worked really hard to make?<br />
                If you can't find something that you made, can you find something that you worked hard to earn or to save up to buy?<br/>
                I'll put my timer on for 5 minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! <br/>
            </p>
            <div id="instruction_box_number_1_page_4_script_4" className="custom_svg demo_box container_for_medium_margin">
                <p className='top_line_in_instruction_box'>
                    Before sharing your idea, wait to see if the mentee is come up with an example on their own. Then share:  Here is what I made.  This is a <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_4_script_4" defaultValue={getValue("text_box_number_1_page_4_script_4")} />  
                    and I made it in / for / when <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_4_script_4" defaultValue={getValue("text_box_number_2_page_4_script_4")} />. <br/>
                    When mentee shows you their item, validate them. <br/>
                    You can also ask them question to learn more about the item they showed you 
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(GreenCheckClicked);