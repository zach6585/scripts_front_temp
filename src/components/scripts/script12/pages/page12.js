import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

const Page12 = props => { 

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
            <h1 className='center bold'>Your supports</h1>
            <div className='left'>
                <div className='container_for_extra_small_margin'>
                    <p>
                        Last week we talked about your supports. <br/>
                        Remember, it's great to ask for help with your mental health when you need it. <br/>
                        Let's take a look at your coping strategy toolkit and talk more about your supports. <br/>
                    </p>
                </div>
                <div id="instruction_box_number_1_page_12_script_12" className="custom_svg demo_box container_for_medium_margin">
                    <p className='top_line_in_instruction_box'>
                        Send your mentee the link to their toolkit in the chat<br/>
                        Link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_12_script_12" defaultValue={getValue("text_box_number_1_page_12_script_12")} /><br/>
                        Ask them to share their screen or you can both look at the toolkit on your own screens if you don't want to do screen share<br/><br/>    
                        Ask them questions about who their supports are. Find out why they think that person is a good support.<br/>
                        Share about your supports.
                    </p>
                </div>
                <div className='container_for_small_margin'>
                    <p>
                        Now we are going to play a game to think about your supports.<br/>
                        I made a google slide that we will put into your coping strategy toolkit when we are all done. <br/>
                        This slide has different situations. We will think about who can help you in each situation. 
                    </p>
                </div>
                <div id="instruction_box_number_2_page_12_script_12" className="custom_svg demo_box container_for_medium_margin">
                    <p className='top_line_in_instruction_box'>
                        Send your mentee the link to the google slide<br/>
                        Link: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_12_script_12" defaultValue={getValue("text_box_number_2_page_12_script_12")} /><br/> 
                        Ask them to share their screen or you can both look at the toolkit on your own screens if you don't want to do screen share
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

export default connect(mapStateToProps, mapDispatchToProps)(Page12);
