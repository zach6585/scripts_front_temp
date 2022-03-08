import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

const Page5 = (props) => {

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
            <h1 className="bold center">Reviewing your mentee's coping strategy toolkit</h1>
            <div className="left container_for_small_margin">
                <p>
                    Last week we worked with your coping strategy toolkit to think about different triggers, the coping strategies that would help, and the people who could help.<br/> 
                    This week we will review your toolkit to make sure it is useful for you when mentoring is over.
                </p>
                <div id="instruction_box_number_1_page_5_script_15" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box"> 
                        Send your mentee the toolkit link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_5_script_15" defaultValue={getValue("text_box_number_1_page_5_script_15")} /><br/>
                    </p>
                </div>

                <div className='container_for_small_margin'>
                    <p>
                        First, we are going to review what we did last week. We talked about different triggers you might have, the coping strategies that might help, and people who can support you. <br/>
                        Sometimes it can be helpful to do a coping strategy before or after a stressful situation. Sometimes it helps to do the coping strategy during the stressful situation.
                    </p>
                </div>

                <div id="instruction_box_number_2_page_5_script_15" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box"> 
                        Share an example of when you use coping strategies before or after a stressful situation/trigger: <br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_15" defaultValue={getValue("text_box_number_2_page_5_script_15")} /><br/>
                        Share an example of when you use coping strategies during a stress situation/trigger: <br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_15" defaultValue={getValue("text_box_number_2_page_5_script_15")} />
                    </p>
                </div>

                <div className='container_for_medium_margin'>
                    <p>Let's look at each trigger and think about if you think a coping strategy would help before, during or after.</p>
                </div>

                <div id="instruction_box_number_3_page_5_script_15" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box"> 
                        Ask your mentee questions to help them decide if they should use the coping strategy before, during or after.
                        For example:
                    </p> 
                    <ul>
                        <li>Do you get worried even before their trigger happens? </li>
                        <li>Is it possible to use a coping strategy during their trigger.</li>
                    </ul>
                </div>

                <div className='container_for_medium_margin'>
                    <p>
                        Great job! Now let's look at the rest of your coping strategy toolkit. <br/>
                        We can talk through it together and make sure that everything makes sense and is written in a way that you can use it on your own. 

                    </p>
                </div>

                <div id="instruction_box_number_4_page_5_script_15" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box"> 
                        Have your mentee look at each page of the toolkit.
                        On each slide:
                    </p>

                    <ul>
                        <li>Talk about the information on the slides-ask them for examples of how they would use the toolkit</li>
                        <li>Ask them if there is anything they want to change</li>
                        <li>Ask them if they want you to add any information to make sure that they can use it on their own</li>
                    </ul>
                    <p>
                        If your mentee needs changes, help them make them, so the toolkit is helpful to them.<br/>
                        When you're done talking about the toolkit, have them stop sharing their screen.
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
