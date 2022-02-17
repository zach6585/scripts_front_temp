import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';
import stopShare from '../../pictures/stopshare.png';


const Page5 = (props) => {

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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Reviewing symptoms</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p1_1" onClick={event => handleCommentClick(event)}>
                        Last week, we talked about symptoms. You shared that you sometimes feel <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_5_script_3" defaultValue={getValue("text_box_number_1_page_5_script_3")} /><br/>
                        Last week some symptoms I noticed I had were <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_3" defaultValue={getValue("text_box_number_2_page_5_script_3")} /><br/>
                        I noticed that I felt <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_5_script_3" defaultValue={getValue("text_box_number_3_page_5_script_3")} /><br/>
                        when I was at <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_5_script_3" defaultValue={getValue("text_box_number_4_page_5_script_3")} />.<br/>
                        When I was at home, some of the symptoms I had were <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_5_script_3" defaultValue={getValue("text_box_number_5_page_5_script_3")} />.<br/>
                        When I was feeling <textarea onChange={event => handleChange(event)} id="text_box_number_6_page_5_script_3" defaultValue={getValue("text_box_number_6_page_5_script_3")} />.<br/>
                        When I was at home, some of the symptoms I had were <textarea onChange={event => handleChange(event)} id="text_box_number_7_page_5_script_3" defaultValue={getValue("text_box_number_7_page_5_script_3")} />,<br/>
                        I used a coping strategy to make me feel less/more <textarea onChange={event => handleChange(event)} id="text_box_number_8_page_5_script_3" defaultValue={getValue("text_box_number_8_page_5_script_3")} />. <br/>
                        We can look at the card sort to think of the other symptoms you have.<br/>
                    </p>
                    <div id="instruction_box_number_1_page_5_script_3" className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box ">
                            Send your mentee this link [link to be inserted]<br/>
                            Ask your mentee to click on the link and share their screen. <br/>
                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p1_2" onClick={event => handleCommentClick(event)}>
                            Are there any other symptoms that you thought of during the week? <br/>
                            If you want, you can move the cards show the symptoms you had this week. <br/>
                        </p>
                        <img className={`pause ${props.commentMode}`} id="img_1" onClick={event => handleCommentClick(event)} src={pause} alt="pause" />
                        <img className={`allEars ${props.commentMode}`} id="img_2" onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
                        <br/><br/><br/><br/>
                    </div>
                    <div id="instruction_box_number_2_page_5_script_3" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">Show that you understand what your mentee is saying. Some things you can say are:</p>
                        <ul>
                            <li>Thank you for sharing</li>
                            <li>I appreciate you telling me about how you felt</li>
                            <li>That sounds kind of hard</li>
                            <li>I understand</li>
                        </ul>
                        <p>You can also ask questions to learn more about when and where they had those symptoms. Some example questions are:</p>
                        <ul>
                            <li>When did you have that symptom? </li>
                            <li>Where were you when you felt that way?</li>
                            <li>What did you do when you had that symptom?</li>
                        </ul>
                        <br/><br/>
                        <p>
                            <strong>If your mentee didn't notice any symptoms</strong>, say:<br/><br/>
                            That's ok! Sometimes you might not have symptoms. It can also be really hard to notice symptoms when they happen.
                        </p>
                    </div>
                    <div id="instruction_box_number_3_page_5_script_3" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box small">When you are done, ask your mentee to stop screen sharing</p><br/>
                        <img id="stop_sharing_screen_page_5_script_3" alt="Stop share" src={stopShare} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
