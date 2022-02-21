import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { toggleCommentMode } from '../../../../actions/comment';
import { patchTexts, postTexts } from '../../../../actions/text';




import Sidebar from '../../general pages/sidebar';


const Page12 = (props) =>{

    const [CheckClicked, setCheckClicked] = useState(false);
    const [redXWords, setRedXWords] = useState("");
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                         


    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);


    const handleClick = (e, letter) => {
        console.log('here')
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
        else{
            if (letter === 'c'){
                setCheckClicked(true);
            }
            else if (letter === 'x'){
                setRedXWords("Say goodbye and thank your mentee");
            }
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

    if (CheckClicked === false){
        return (
            <div>
                <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleClick(event, "")}>Keeping in touch</h1>
                <div className="left">
                    <div className='container_for_extra_small_margin'>
                        <img id="img_1" className="check" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p id="p_1" className={`what_does_your_mentor_say ${props.commentMode}`} onClick={event => handleClick(event, "")}>You want to stay in touch with your mentee</p>
                        <br/>
                        <img id="img_2" className="redX" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p id="p_2" className={`what_does_your_mentor_say ${props.commentMode}`} onClick={event => handleClick(event, "")}>You do not want to stay in touch with your mentee</p>
                        <br/>
                        <p id="p_3" className={`choicePicked ${props.commentMode}`} onClick={event => handleClick(event, "")}>{redXWords}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    else{
        return (
            <div>
                <div className={`sheet ${blur}`}>
                <div className="left">
                    <div className='container_for_extra_small_margin'>
                        <p id="p_4" className={props.commentMode} onClick={event => handleClick(event, "")}>
                            It was really fun to get to know you. I think it would be fun to stay in touch.  Do you want to stay in touch? It is totally your choice.    
                        </p>
                    </div>
                </div>
                <div className="further_left">
                    <div className='container_for_extra_small_margin'>
                        <p id="p_5" className={props.commentMode} onClick={event => handleClick(event, "")}>
                            <span className="underline_text">They say yes</span><br/>
                            Great! I am so glad. I feel comfortable staying in touch by
                        </p>
                        <textarea className={props.commentMode} onClick={event => handleClick(event, "")} onChange={event => handleChange(event)} id="text_box_number_1_page_12_script_16" defaultValue={getValue("text_box_number_1_page_12_script_16")} />
                        <p id="p_6" className={props.commentMode} onClick={event => handleClick(event, "")}>
                            Does that work for you? Or is there another way you want to stay in touch?
                        </p>
                    </div>
                    
                    <div className="container_for_medium_margin">
                        <p id="p_7" className={props.commentMode} onClick={event => handleClick(event, "")}>
                            <span className="underline_text">They say no</span><br/>
                            That's ok! Thanks for letting me know.
                        </p>
                    </div>
                    <div id="instruction_box_number_1_page_10_script_1" className={`ital custom_svg demo_box container_for_extra_small_margin ${props.commentMode}`} onClick={event => handleClick(event, "")}>
                        <p className="top_line_in_instruction_box">
                            Say goodbye to your mentee. <br/>
                            Make sure you thank them for doing the mentoring program. 
                        </p>
                    </div>
                </div>
                  
            </div>
        </div>
        )
    }
    
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



export default connect(mapStateToProps, mapDispatchToProps)(Page12);