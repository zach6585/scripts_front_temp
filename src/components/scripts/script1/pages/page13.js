import { connect } from 'react-redux';


import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page13 = (props) => {

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
                <div className="left">
                    <div>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                            What did you think about the video? Do you have any questions? 
                        </p>
                    </div>

                    <div id="pause_listen_div">
                        <img src={pause} className={`pause ${props.commentMode}`} alt="Pause" id="pause" onClick={event => handleCommentClick(event)} />                        
                        <img src={allEars} className={`allEars ${props.commentMode}`} alt="Listen" id="allEars" onClick={event => handleCommentClick(event)} /> 
                    </div>

                    <div id="instruction_box_number_1_page_13_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                            Talk with your mentee about the video 
                        </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                        Sometimes teens and young adults feel embarrassed to talk about mental health.   This might be because they worry other people may not want to be their friends, might judge them, or might think that there is something wrong with them.  Sometimes people don't even want to talk about mental health out loud because they are so afraid about being judged and that makes them afraid to ask for help. <br/>
                        I am here to tell you that having a mental health condition is not something you have to be afraid of or embarrassed having. Having a mental health condition does not mean you are bad, did something wrong, or are crazy.  It's okay for you to be you, and I am happy to get to know you better!

                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p_3" onClick={event => handleCommentClick(event)}>
                        I have a mental health condition. It is called: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_13_script_1" defaultValue={getValue("text_box_number_1_page_13_script_1")} />
                        </p>
                        <p className={props.commentMode} id="p_4" onClick={event => handleCommentClick(event)}>
                        This means: <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_13_script_1" defaultValue={getValue("text_box_number_2_page_13_script_1")} />
                        </p>
                        <p className={props.commentMode} id="p_5" onClick={event => handleCommentClick(event)}>
                        Thank you for being open to talking about mental health with me.  Next time, we will talk about how to take care of your mental health.
                        </p>
                    </div>
                    
                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} >
                            Let's take a few minutes to do a quick scavenger hunt in our homes, and then show each other on screen what we've found.  We are each going to look for something at home that makes us feel really happy.  Maybe it's something we play, like an instrument.  Or a drawing you made.  Or maybe it's an awesome gift someone gave you.  
                            For example, I want to show you <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_13_script_1" defaultValue={getValue("text_box_number_3_page_13_script_1")} />.  
                            I chose this because  <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_13_script_1" defaultValue={getValue("text_box_number_4_page_13_script_1")} />.<br/>
                            Can you find something and bring it back to the screen? <br/>
                            We'll take five minutes to do this.
                        </p>
                    </div>

                    <div id="instruction_box_number_2_page_13_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                            When your mentee comes back, talk to them about what they brought.<br/>
                            <span className='underline_text'>Example questions to ask:</span><br/>
                        </p>
                        <ul>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>What is it?</li>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Where did you get it from / how did you make it? </li>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Why does this make you happy?  </li>
                            <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>Have you had it for a long time?</li>
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page13);