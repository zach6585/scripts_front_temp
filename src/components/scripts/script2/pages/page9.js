import shareScreen from "../../pictures/sharescreen.png";
import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";


import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page9 = (props) => {

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

    const getLink = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_link_for_value = props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }
  
    return (
        <div>
            <div className={`sheet ${blur}`}>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_3">
                            During our time together, we are going to be learning a lot about mental health and how to keep your symptoms from getting in the way of things you want to do! Remember, you are not alone in feeling this way - there are a lot of young adults, including me, who are going through similar things as you.<br/>
                            Now we will watch a video to learn more about symptoms.<br/>
                        </p>
                    </div>
                    
                    <div className='wrapper'>
                        <a href={getLink("video_link_page_9_script_2")} id="video_link_page_9_script_2" className={props.commentMode} onClick={event => handleCommentClick(event)} target="_blank" rel="nopener noreferrer">Video link</a>
                        <div id="image_and_instruction_box_number_1_page_9_script_2" className='container_for_extra_small_margin'>
                            <div id="instruction_box_number_3_page_9_script_2" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                <p className='top_line_in_instruction_box'>
                                    Share your screen <br/>
                                    -Share sound <br/>
                                    -Optimize for video
                                </p>
                            </div>
                            <img src={shareScreen} id="share_screen_page_9_script_2" alt="Share your screen" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                        </div>
                    </div>
                    <div className='container_for_medium_margin'>
                        <img src={optimizeVideo} id="opt_page_9_script_2" alt="Optimize your video" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                    </div>
                    
                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_4">
                            In the video, they talked about there being things that make symptoms worse. Some things that make my symptoms worse are:<br/>
                            <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_8_script_2" defaultValue={getValue("text_box_number_3_page_8_script_2")} /><br/><br/>
                            What about you? What makes your symptoms worse?
                        </p>
                        <img className={`allEars ${props.commentMode}`} onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
                        <img className={`pause ${props.commentMode}`} onClick={event => handleCommentClick(event)} src={pause} alt="Pause" />
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
        sendingComment: state.comments.sendingComment,
        links: state.links.links 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page9);