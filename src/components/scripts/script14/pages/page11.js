import { connect } from "react-redux";
import { patchTexts, postTexts } from '../../../../actions/text';

 const Page11 = (props) => {

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

        <div className="sheet">
            <div className="left container_for_medium_margin">
                <h1 className="bold underline_text">Practice reminder</h1>
                <p>
                    This week, your job will be to practice using your coping strategies when you're having challenging emotions.<br/>
                    Try to do this activity at least 5 times this week. <br/>
                    The mood log and body scan can help you figure out if you need to use a coping strategy and if the coping strategy worked.<br/><br/>
                    What kind of help do you think you will need to remember to practice your coping strategies? Here are some ideas:
                </p>
                <ul>
                    <li className="square_bullets">A reminder</li>
                    <li className="square_bullets">Setting an alarm on your phone</li>
                    <li className="square_bullets">Something else: <br/><br/><textarea onChange={event => handleChange(event)} id="text_box_number_1_page_11_script_14" defaultValue={getValue("text_box_number_1_page_11_script_14")} /></li>
                </ul>
                <div className='container_for_small_margin'>
                    <p>If you have challenges with your coping strategy, you can use the solutions website.</p>
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
