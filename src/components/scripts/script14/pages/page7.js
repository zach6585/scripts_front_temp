import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';


const Page7 = props => {

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
            <h1 className="bold center">Coping with triggers</h1>
            <div className="left">
                <div className='container_for_small_margin'>
                    <p>
                    We have talked a bit about getting support from other people. Let's talk about this a little bit more. <br/>
                    We are going to do a card sort to think about some potential triggers you may have, the strategies you can use, and who might help you. <br/>
                    Triggers are situations that lead people to have challenging emotions. <br/>
                    I will send you a link to the card sort. You can share your screen as your sort the triggers into the different categories. 
                    </p>
                </div>

                <div id="instruction_box_number_1_page_7_script_14" className="custom_svg demo_box container_for_medium_margin">
                    <p className="top_line_in_instruction_box">
                        Send your mentee this link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_7_script_14" defaultValue={getValue("text_box_number_1_page_7_script_14")} /><br/>
                        Ask your mentee to share their screen. Ask them guiding questions to help them think about the different triggers.<br/>
                        <em>You can make the activity more conversational by sharing personal stories related to the situations, or telling them what leads to challenging emotions for you. If you have similar “triggers” you can tell them. This will help your mentee feel like there are other people with similar experiences.</em>
                    </p>
                </div>

                <div className='container_for_medium_margin'>
                    <p>
                        Great job! <br/>
                        Now, we will put some of this information into your toolkit!<br/><br/>
                        Here is an example. 
                    </p>
                </div>

                <div id='image_and_instruction_box_div_page_7_script_14'>
                    <div id="instruction_box_number_2_page_7_script_14" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">
                            Share your screen <br/>
                            Open your toolkit <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_7_script_14" defaultValue={getValue("text_box_number_2_page_7_script_14")} />
                        </p>
                    </div>
                    <img src={shareScreen} alt="Share your screen" />
                </div>

                <div id="instruction_box_number_3_page_7_script_14" className="custom_svg demo_box container_for_medium_margin">
                    <p className="top_line_in_instruction_box">Explain each trigger, how you will use a coping strategy, and who will help.</p>
                </div>

                <img src={stopShare} alt="Stop sharing your screen" id="stop_sharing_screen_page_7_script_14"/>

                <div id="instruction_box_number_2_page_7_script_14" className="custom_svg demo_box container_for_medium_margin">
                    <p className='top_line_in_instruction_box'>
                        Send your mentee the link their toolkit. Link: <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_7_script_14" defaultValue={getValue("text_box_number_3_page_7_script_14")} /><br/>
                        Have your mentee share their screen. <br/>
                        Help them delete any trigger that was in their “does NOT cause mental health challenges pile.” <br/>
                        Then help them fill out the table so they can match coping strategies and a type of support to each trigger.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page7)


