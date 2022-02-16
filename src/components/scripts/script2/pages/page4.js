import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';


const Page4 = (props) => {

    
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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p1">I think it would be fun to get to know more about each other. </p>

                    <div id="instruction_box_number_1_page_4_script_2" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <img src={shareScreen} alt="Share Screen" id="share_your_screen_page_4_script_2" />
                        <p className="top_line_in_instruction_box">
                            Click on the <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_4_script_2" defaultValue={getValue("text_box_number_1_page_4_script_2")} placeholder='link to be inserted' /> and<br/><br/>
                            share your screen.<br/><br/>    
                            Take turns picking question to ask each other in the XXX game. 
                        </p>
                    </div>
                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p2">
                            We will click on the boxes. A question will show up in the box and we will both answer it.<br/>
                            If you also have a question that isn't in game, but you really want to ask me, just let me know!<br/>
                        </p>
                    </div>
                    
                    <div id="instruction_box_number_2_page_4_script_2" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">When you are done with the game, stop screen sharing</p>
                        <img src={stopShare} alt="Stop share" id="stop_sharing_screen_page_4_script_2" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page4);