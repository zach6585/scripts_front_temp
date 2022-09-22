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
                            If you do not like the activity, you will put the card in the “do not like” pile. <br/>
                            There is also a “neutral” pile you can use if you want.
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
                    <div>
                        <p className='bold'>There is also a “neutral” pile you can use if you want.</p>
                    </div>

                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                            Great job! We'll talk more about these activities next week to help you pick your first coping strategy to work on during peer mentoring.
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);

