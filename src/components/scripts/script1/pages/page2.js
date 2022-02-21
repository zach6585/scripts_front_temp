import pressRecord from '../../pictures/pressrecord.png';


import { connect } from 'react-redux';


import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page2 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                         


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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Starting the session</h1>
                <div className="left">
                    <div id="instruction_box_number_1_page_2_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                            Write an introduction-tell your mentee your name and a little bit about yourself. 
                            <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_2_script_1" defaultValue={getValue("text_box_number_1_page_2_script_1")} />
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                            As a reminder, I am audio recording this session so I can remember what you say and make sure I am doing a good job.  
                            I have a script here, which helps remind me of the things that I want to tell you.  
                            I will always have a script with me, but there will also be times when I won't be reading the script like when we are just talking back and forth.
                        </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <img id="press_record_page_2_script_1" className={props.commentMode} onClick={event => handleCommentClick(event)} src={pressRecord} alt="Press record" />
                    </div>

                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">
                            I am excited to be your mentor and get to know you. <br/>
                            A peer mentor is someone who helps you learn new things and ideas. A peer mentor can help you with activities related to mental health.<br/>
                            I wanted to be a mentor because
                        </p>
                    </div>

                    <div id="instruction_box_number_2_page_2_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_2_script_1" defaultValue={getValue("text_box_number_2_page_2_script_1")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
