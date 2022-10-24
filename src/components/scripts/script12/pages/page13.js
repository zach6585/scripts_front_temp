import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

const Page13 = props => { 

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
            <div className='left'>
                <div className='container_for_small_margin'>
                    <p className='page13'>
                        Directions for the activity: <br/><br/>
                        Each card has a different scenario on it. On each scenario, you can type in the person who will help you or make you feel better.<br/><br/>
                        Different people will be able to help you with different sized problems. <br/><br/>
                        Small problems are the easiest to solve. They might go away on their own and usually don't last too long. They can still be upsetting. <br/>
                        For small problems, I get help from <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_13_script_12" defaultValue={getValue("text_box_number_1_page_13_script_12")} /> 
                        because <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_13_script_12" defaultValue={getValue("text_box_number_2_page_13_script_12")} /><br/>
                        Medium problems can be a little bit more hard to solve and they might last longer.<br/>
                        For medium problems, I get help from <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_13_script_12" defaultValue={getValue("text_box_number_3_page_13_script_12")} /> 
                        because <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_13_script_12" defaultValue={getValue("text_box_number_4_page_13_script_12")} /><br/>
                        Big problems are the hardest to solve. It might take a lot of work to solve them. Sometimes big problems have to do with safety or really big feelings. <br/>
                        For big problems, I get help from <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_13_script_12" defaultValue={getValue("text_box_number_5_page_13_script_12")} /> 
                        because <textarea onChange={event => handleChange(event)} id="text_box_number_6_page_13_script_12" defaultValue={getValue("text_box_number_6_page_13_script_12")} />
                    </p>
                </div>

                <div className='container_for_medium_margin'>
                    <p>
                        Let's look at these scenarios. Sometimes thinking about the size of the problem can help you figure out who may be the best to help. Other times, the type of problem is more important than the size. For example, there may be some people who you like to talk about work things with and other people who are more helpful when you need to solve a problem with a friend.
                    </p>
                </div>

                <div id="instruction_box_number_3_page_12_script_12" className="custom_svg demo_box container_for_extra_small_margin">
                    <p className='top_line_in_instruction_box'>
                        Help your mentee think of who can help them in each situation.<br/>
                        You can help them type the name of the person. Or, if they want to, they could drag the box under the name of the person. <br/>
                        <strong>When they are done</strong>, say, “I'll put this slide in your toolkit for you later, or you can do it yourself right now.”<br/>
                        We are going to start another activity.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page13);
