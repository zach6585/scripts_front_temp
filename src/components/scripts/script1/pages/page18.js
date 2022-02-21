import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page18 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                         


    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);                       


    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    const handleCommentClick = (event) => {
        //Here is where you render the sidebar
        if (props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={event.target.id} />)
            }
            props.toggleCommentMode();
        }
    }

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
        <div>
            <div className={`sheet ${blur}`}>
              <h1 className={`bold center ${props.commentMode}`} id="h1">Reminders about mentoring</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                            It was really great to talk with you. <br/>
                            Remember to do your mood logs every day. <br/>
                            The mood logs will help you keep track of your mental health every day. <br/>
                            They will also help us make sure we can help you.<br/><br/>

                            Thank you for meeting with me! I am excited to get to know you more.<br/>

                        </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">
                            We will meet again on : <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_18_script_1" defaultValue={getValue("text_box_number_1_page_18_script_1")} />
                        </p>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_3">
                            I am going to <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_18_script_1" defaultValue={getValue("text_box_number_2_page_18_script_1")} /> so I can remember our next meeting. 
                        </p>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_4">
                            How will you remember our next meeting? 
                        </p>
                    </div>

                    <div id="instruction_box_number_1_page_18_script_1" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                            Say goodbye to your mentee
                        </p>
                    </div>
                </div>
            </div>
            {sideBar}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript,
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page18)