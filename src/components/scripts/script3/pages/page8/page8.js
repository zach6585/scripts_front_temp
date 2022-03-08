import checkButSmaller from "../../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../../pictures/redxbutsmaller.png";

import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../../actions/comment';
import { patchTexts, postTexts } from '../../../../../actions/text';

import { useState, useEffect } from 'react';

import Sidebar from '../../../general pages/sidebar';
import CheckMark from './checkmark';
import RedX from './redx';

const Page8 = (props) => {


    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 
    const [check_words, setCheckWords] = useState(null);
    const [x_words, setXWords] = useState(null);
    
    const handleClick = (e, letter) => {
        if (props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={e.target.id} />)
            }
            props.toggleCommentMode();
        }
        else {
            if (letter === 'c'){
                setCheckWords(<CheckMark />);
                setXWords(null);
            }
            else if (letter === 'x'){
                setCheckWords(null);
                setXWords(<RedX />);
            }
        }
    }

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    
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
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>Now it is your turn. Together, we will think about how your body feels. We will talk about each body part on the worksheet. You do not need to fill in every box on the worksheet.
                        <br/>
                        If thinking about a specific body part makes you feel uncomfortable, you can let me know. We don't have to talk about that body part.
                        <br/><br/><br/>
                        How are you feeling right now? It is ok if you are not sure. 
                        <br/><br/>
                        Feeling: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_8_script_3" defaultValue={getValue("text_box_number_1_page_8_script_3")} />
                        <br/><br/><br/><br/>
                        <strong>Here are some questions you can use to help your mentee think about how their body is feeling. Note:</strong> <em>These questions are also in your mentoring binder.</em>
                        <br/><br/>
                        How does your chest feel?
                    </p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_1" onClick={event => handleClick(event, "")}>Does it feel tight?</li>
                        <li className={`${props.commentMode}`} id="li_2" onClick={event => handleClick(event, "")}>Does it feel heavy?</li>
                        <li className={`${props.commentMode}`} id="li_3" onClick={event => handleClick(event, "")}>Does it feel relaxed?</li>
                    </ul>
                    <p className={props.commentMode} id="p_2" onClick={event => handleClick(event, "")}>
                        How is your breathing?
                    </p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_4" onClick={event => handleClick(event, "")}>Is it fast or slow? Or is it normal?</li>
                        <li className={`${props.commentMode}`} id="li_5" onClick={event => handleClick(event, "")}>Is it hard to breathe or easy to breathe?</li>
                    </ul>
                    <p className={props.commentMode} id="p_3" onClick={event => handleClick(event, "")}>
                        How do your arms and hands feel? 
                    </p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_6" onClick={event => handleClick(event, "")}>Do they feel tense or tight?</li>
                        <li className={`${props.commentMode}`} id="li_7" onClick={event => handleClick(event, "")}>Do they feel relaxed?</li>
                        <li>Do they feel tense and heavy?</li>
                    </ul>
                    <p className={props.commentMode} id="p_4" onClick={event => handleClick(event, "")}>
                        How does your head feel?
                    </p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_8" onClick={event => handleClick(event, "")}>Does your head hurt?</li>
                        <li className={`${props.commentMode}`} id="li_9" onClick={event => handleClick(event, "")}>Do you feel like you are having trouble thinking?</li>
                        <li className={`${props.commentMode}`} id="li_10" onClick={event => handleClick(event, "")}>Does your head feel relaxed?</li>
                    </ul>
                    <p className={props.commentMode} id="p_5" onClick={event => handleClick(event, "")}>How do your mouth and jaw feel?</p> 
                    <ul>
                        <li className={`${props.commentMode}`} id="li_11" onClick={event => handleClick(event, "")}>Is your jaw tight?</li>
                        <li className={`${props.commentMode}`} id="li_12" onClick={event => handleClick(event, "")}>Is your mouth dry?</li>
                        <li className={`${props.commentMode}`} id="li_13" onClick={event => handleClick(event, "")}>Are you clenching your teeth? This means you are biting down and pressing your top teeth and bottom teeth together.</li>
                    </ul>
                    <p className={props.commentMode} id="p_6" onClick={event => handleClick(event, "")}>How do your shoulders feel?</p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_14" onClick={event => handleClick(event, "")}>Are your shoulder tense or tight? </li>
                        <li className={`${props.commentMode}`} id="li_15" onClick={event => handleClick(event, "")}>Do you feel like your shoulders are relaxed?</li>
                    </ul>
                    <p className={props.commentMode} id="p_7" onClick={event => handleClick(event, "")}>How does your stomach feel?</p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_16" onClick={event => handleClick(event, "")}>Does your stomach hurt?</li>
                        <li className={`${props.commentMode}`} id="li_17" onClick={event => handleClick(event, "")}>Is your stomach in knots? Do you feel nauseous? </li>
                        <li className={`${props.commentMode}`} id="li_18" onClick={event => handleClick(event, "")}>Does your stomach feel relaxed?</li>
                    </ul>
                    <p className={props.commentMode} id="p_8" onClick={event => handleClick(event, "")}>How do your legs and feet feel?</p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_19" onClick={event => handleClick(event, "")}>Do your legs and feet feel tight?</li>
                        <li className={`${props.commentMode}`} id="li_20" onClick={event => handleClick(event, "")}>Do you feel like your legs are weak? </li>
                        <li className={`${props.commentMode}`} id="li_21" onClick={event => handleClick(event, "")}>Are you bouncing your legs a lot? Or tapping your feet? </li>
                        <li className={`${props.commentMode}`} id="li_22" onClick={event => handleClick(event, "")}>Are your legs and feet calm?</li>
                        <li className={`${props.commentMode}`} id="li_23" onClick={event => handleClick(event, "")}>Do your legs feel relaxed?</li>
                    </ul>
                    <p className={props.commentMode} id="p_9" onClick={event => handleClick(event, "")}>Fidgeting</p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_24" onClick={event => handleClick(event, "")}>Are you fidgeting any part of your body?</li>
                    </ul>
                    <p className={props.commentMode} id="p_10" onClick={event => handleClick(event, "")}>Do you have a change in your energy level?</p>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_25" onClick={event => handleClick(event, "")}>Do you feel like you have more energy than usual?</li>
                        <li className={`${props.commentMode}`} id="li_26" onClick={event => handleClick(event, "")}>Do you feel like you have less energy than usual?</li>
                    </ul>
                    <div>
                        <img className={`check ${props.commentMode}`} id="check" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee <strong>did</strong> describe a feeling at the beginning of the worksheet</p>
                        <br/>
                        <div className="choicePicked">{check_words}</div>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="redX" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee did <strong>not</strong> describe a feeling at the beginning of the worksheet</p>
                        <br/>
                        <div className="choicePicked">{x_words}</div>
                        <br/><br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);

 