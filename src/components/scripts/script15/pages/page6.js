import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

const Page6 = (props) => {

    const handleChange = (event) => {
        const object_outcome = getObject(event.target.id)
        object_outcome === "" ? 
        props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: props.props.mentee_id, script: props.script})
        :
        props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: props.props.mentee_id, script: props.script})
    
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
            <h1 className="bold center">Planning for when mentoring is over</h1>
            <div className='left'>
                <div className="container_for_small_margin">
                    <p>
                        We have talked about using coping strategies in response to stressful situations and information, or clues, from your body. <br/>
                        It can also be helpful to plan when you will use coping strategies. Sometimes coping strategies can be used just to make you feel good (not because you are having a hard feeling that you are trying to deal with). Using a coping strategy can be something to look forward to. <br/>
                        We will make a plan to regularly do your coping strategies. We can think about what you need to do it and who can help you. <br/>
                        Sometimes it can be helpful to get reminders. When I was first starting to use 
                    </p>
                    <div id="textarea_with_text_underneath_div_number_1_page_6_script_15">
                        <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_6_script_15" defaultValue={getValue("text_box_number_1_page_6_script_15")} />
                        <h3>(coping strategy)</h3>
                    </div>
                    <p>as a coping strategy, I got reminders from</p>
                    <div id="textarea_with_text_underneath_div_number_2_page_6_script_15">
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_6_script_15" defaultValue={getValue("text_box_number_2_page_6_script_15")} />
                        <h3>(person who reminded you)</h3>
                    </div>
                    <p>
                        I wanted to be able to use the coping strategy by myself right from the start, but it was hard to remember in the beginning.  
                        So I had <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_6_script_15" defaultValue={getValue("text_box_number_3_page_6_script_15")} /> remind me to use it. 
                        Sometimes I felt like it was annoying when <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_6_script_15" defaultValue={getValue("text_box_number_4_page_6_script_15")} /> reminded me, 
                        but I know that it also helped. After I got better at doing it on my own, they stopped reminding me.  Can you think of someone who could help you remember to use this coping strategy? 
                    </p>
                </div>

                <div id="instruction_box_number_1_page_6_script_15" className="custom_svg demo_box container_for_medium_margin">
                    <p className="top_line_in_instruction_box">
                        Help your mentee with the planning worksheet (link: <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_6_script_15" defaultValue={getValue("text_box_number_5_page_6_script_15")} />). If they want to do a calendar reminder, help them put the reminder in their phone.<br/> 
                        Make sure the reminder repeats every week.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);
