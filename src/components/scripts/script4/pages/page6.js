import { connect } from 'react-redux';

import activities from '../../pictures/activities.png';

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


import '../../extcss.scss';

const Page6 = props => {

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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Doing the card sort activity</h1>
                <div className="left">
                    
                    <div id='instruction_box_number_1_page_6_script_4' className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                            <p className='top_line_in_instruction_box'>
                                Do the card sort activity with your mentee.<br/><br/>
                                Send your mentee the card sort link: <textarea onChange={event => handleChange(event)} id="text_box_number_10_page_6_script_4" defaultValue={getValue("text_box_number_10_page_6_script_4")} /><br/>
                                Ask them to share their screen.
                            </p>
                    </div>
                    <img className={props.commentMode} id="activities_page_6_script_4" onClick={event => handleCommentClick(event)} src={activities} alt="Activities to do" />

                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>
                            <span className='underline_text'>Card sort directions</span><br/>
                            First, we will think about activities you do and do not like.<br/> 
                            If you like the type of activity, you will put the card in the “like” pile. <br/>
                            If you do not like the activity, you will put the card in the “do not like” pile.
                        </p>
                    </div>

                    <div id='instruction_box_number_2_page_6_script_4' className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                            <span className='underline_text'>Prompts-things you can say if your mentee needs help</span> <br/>
                        </p>
                            <ul>
                                <li>How does the activity make you feel?</li>
                                <li>Is the activity fun?</li>
                                <li>Is the activity interesting or boring?</li>
                            </ul><br/>
                        <p>
                            <em>When your mentee is finished, say</em>: Good job! Now we are ready for the next part of the activity!
                        </p>
                    </div>

                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                            Now that we are done thinking about if you like the activities, we will think about how they make you feel.
                        </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <form>
                            <div className="extcss">
                                <p className={props.commentMode} id="p_3" onClick={event => handleCommentClick(event)}>For example, sometimes I do feel<br/><br/></p>
                                <span className="inline-flex flex-col">
                                    <input
                                        onChange={event => handleChange(event)}
                                        defaultValue={getValue("text_box_number_1_page_6_script_4")}
                                        className={`border-b border-black text_box_inputs ${props.commentMode}`}
                                        onClick={event => handleCommentClick(event)}
                                        type="text"
                                        name="text_box_number_1_page_6_script_4"
                                        id="text_box_number_1_page_6_script_4"
                                    />
                                    <label htmlFor="text_box_number_1_page_6_script_4">(a feeling you don't like)</label>
                                </span>
                                <span className='side_text'>. I do&nbsp;&nbsp;</span>
                                <span className="inline-flex flex-col">
                                    <input
                                        onChange={event => handleChange(event)}
                                        defaultValue={getValue("text_box_number_2_page_6_script_4")}
                                        className={`border-b border-black text_box_inputs ${props.commentMode}`}
                                        onClick={event => handleCommentClick(event)}
                                        type="text"
                                        name="text_box_number_2_page_6_script_4"
                                        id="text_box_number_2_page_6_script_4"
                                    />
                                    <label htmlFor="text_box_number_2_page_6_script_4">(an activity that makes you feel better)</label>
                                </span>

                                

                                <span className='side_text'>&nbsp;&nbsp;to make me feel less&nbsp;&nbsp;</span>

                                <span className="inline-flex flex-col">
                                <input
                                    onChange={event => handleChange(event)}
                                    defaultValue={getValue("text_box_number_3_page_6_script_4")}
                                    className={`border-b border-black text_box_inputs ${props.commentMode}`}
                                    onClick={event => handleCommentClick(event)}
                                    type="text"
                                    name="text_box_number_3_page_6_script_4"
                                    id="text_box_number_3_page_6_script_4"
                                />
                                <label htmlFor="text_box_number_3_page_6_script_4"
                                    >(the feeling you don't like)</label
                                >
                                </span>
                                <span className='side_text'>&nbsp;&nbsp;That means that&nbsp;&nbsp;</span>

                                <span className="inline-flex flex-col">
                                <input
                                    onChange={event => handleChange(event)}
                                    defaultValue={getValue("text_box_number_4_page_6_script_4")}
                                    className={`border-b border-black text_box_inputs ${props.commentMode}`}
                                    onClick={event => handleCommentClick(event)}                                
                                    type="text"
                                    name="text_box_number_4_page_6_script_4"
                                    id="text_box_number_4_page_6_script_4"
                                />
                                <label htmlFor="text_box_number_4_page_6_script_4"
                                    >(the activity that makes you feel better)</label
                                >
                                </span>
                                <span className='side_text'>&nbsp;&nbsp;is a coping strategy.</span>
                            </div>
                        </form>  
                    </div>

                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_4" onClick={event => handleCommentClick(event)}>
                            What are some types of feelings that you have that are sometimes hard to handle?<br/>
                            <span className="left">
                                <em>Write the feelings they say: </em><br/>
                                <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_6_script_4" defaultValue={getValue("text_box_number_5_page_6_script_4")} />
                            </span>
                            <br/>
                            Thanks for sharing. <br/>
                            Together, we will think of activities to make you feel less
                        </p>
                            <div id="text_box_with_text_under_number_1_page_6_script_4">
                                <textarea onChange={event => handleChange(event)} id="text_box_number_6_page_6_script_4" defaultValue={getValue("text_box_number_6_page_6_script_4")} />.<br/>
                                <p className='small' id="text_under_text_box_number_1_page_6_script_4">(the feelings they shared)</p>
                            </div>
                    </div>
                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_5" onClick={event => handleCommentClick(event)}>We are only going to talk about some of the activities that you like. We do not need to talk about the types of activities that you do not like.</p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} id="p_6" onClick={event => handleCommentClick(event)}>
                        So, let's look at the activities you like. <br/>
                        Next to them, we'll add a post-it note saying the activity you do and how it makes you feel. <br/>
                        I'll show you on the first one. For example, let's say that I enjoy &nbsp;
                        <textarea onChange={event => handleChange(event)} id="text_box_number_7_page_6_script_4" defaultValue={getValue("text_box_number_7_page_6_script_4")} />&nbsp;
                        activities. I would say the type of activity I like is &nbsp;
                        <textarea onChange={event => handleChange(event)} id="text_box_number_8_page_6_script_4" defaultValue={getValue("text_box_number_8_page_6_script_4")} /> 
                        &nbsp; and that it makes me feel &nbsp;
                        <textarea onChange={event => handleChange(event)} id="text_box_number_9_page_6_script_4" defaultValue={getValue("text_box_number_9_page_6_script_4")} />
                        , so I'll write that on the post-it note.<br/><br/>
                        We'll delete my example, because this is about you.
                        </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_7" onClick={event => handleCommentClick(event)}>Let's look at each activity you like and write down the specific activity and how you feel.</p>
                    </div>

                    <div className='container_for_large_margin'>
                        <div id='instruction_box_number_3_page_6_script_4' className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                            <p className='top_line_in_instruction_box'>
                            Help your mentee finish the cards sort activity.<br/>
                            You can offer to type or move the post-its, if they need.<br/>
                            You can also give them a list of emotion words if they are having a hard time thinking of how they feel.<br/> 

                            </p>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);

