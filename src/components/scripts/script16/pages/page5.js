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
            <h1 className="bold center">Mentoring review</h1>
            <div className="left container_for_small_margin">
                <p>
                    We talked about a lot in the past 4 months.<br/>  
                    We are going to play a game to review everything.
                </p>
                <div id="instruction_box_number_1_page_5_script_16" className="custom_svg demo_box container_for_small_margin">
                    <p className="top_line_in_instruction_box"> 
                        Link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_5_script_16" defaultValue={getValue("text_box_number_1_page_5_script_16")} /><br/>
                        Review game instructions: <br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_16" defaultValue={getValue("text_box_number_2_page_5_script_16")} />
                    </p>
                </div>

                <div className='container_for_small_margin'>
                    <p>
                        It's been really <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_5_script_16" defaultValue={getValue("text_box_number_3_page_5_script_16")} /> 
                        getting to know you over the last few months. If it's okay with you, can I share a few strengths that I noticed about you? <br/>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_5_script_16" defaultValue={getValue("text_box_number_4_page_5_script_16")} placeholder="Write 2-3 strengths you noticed in your mentee." />
                    </p>
                </div>

                <div className="container_for_small_margin">
                    <p> 
                        I also want to give you a chance, if you'd like, to share your own personal strengths.  
                        Would you like to share anything from our time together that made you feel really good about yourself? 
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
