import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page14 = (props) => {

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
              <h1 className={`bold center ${props.commentMode}`} id="h1">Doing the mentoring contract</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                          I want to make sure that peer mentoring will work well for you. <br/>
                          That is why we do the peer mentoring contract.<br/>
                          You learned about the contract when you met with Ariel. It should also be in your email.<br/>
                          To make sure that everyone has a good time in peer mentoring, we will work together to agree on some rules. We will talk about each of these rules to make sure you understand them and agree with them.<br/>
                          I will read each part. <br/>
                          Let me know if you have any questions or want me to pause. 
                        </p>
                    </div>

                    <div id="instruction_box_number_1_page_14_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                          Send your mentee the contract link: <br/>
                          <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_14_script_1" defaultValue={getValue("text_box_number_1_page_14_script_1")} /><br/>
                          Ask them to share their screen. <br/>
                          Read each question to your mentee. If your mentee says they want to read, that's ok. Make sure that you talk about each question.<br/>
                          Talk about the contract with your mentee. Answer their questions and help them fill out the form.<br/><br/>
                          When they are done, ask them to stop sharing their screen.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page14);