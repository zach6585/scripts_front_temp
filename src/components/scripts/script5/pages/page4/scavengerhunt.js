import { connect } from "react-redux"
import { patchTexts, postTexts } from '../../../../../actions/text';

const ScavengerHunt = (props) => {

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
        <p>
            Today we will do one more scavenger hunt
            <br/><br/>
            This time, you will be searching for something to show me that I don't already know about you!
            <br/><br/>
            It should be a surprise to me.  It can be something you like to do that we haven't talked about yet.  It can be something you collect, something you got on a trip, or anything else I don't yet know about you!
            <br/><br/>
            For example, you don't know this about me, but I love <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_4_script_5" defaultValue={getValue("text_box_number_2_page_4_script_5")} />.  So here is <textarea onChange={event => handleChange(event, "text_box_number_3_page_4_script_5")} id="text_box_number_3_page_4_script_5" defaultValue={getValue("text_box_number_3_page_4_script_5")} /> (show on screen). 
            <br/><br/>
            Once you find something in your home that will surprise me, bring it back to the screen.   I'll put my timer on for five minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! 
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScavengerHunt)