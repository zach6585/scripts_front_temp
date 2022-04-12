import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleCommentMode } from '../../../../actions/comment';
import { patchTexts, postTexts } from '../../../../actions/text';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';
import componentWrapper from '../../../../HOC'; 

import BodyDiagram from '../../general pages/bodydiagram';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import body from '../../pictures/body.png';


const Page7 = (props) => {
    
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
    
    if (!props.imageClicked){
        return (
            <div>
                 <div className={`sheet ${blur}`}>
                     <div className='body_page_main_div'>
                         <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Body scan</h1>
                         <div className="left container_for_medium_margin">
                             
                             <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Now we will practice thinking about how your body feels using something called a body scan.</p>
                             <div className="div_with_body_image">
                                 <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Our bodies can help us learn about our feelings and emotions. I will show you an example.</p>
                                 <Link target="_blank" to="/body" rel="noopener noreferrer"><input type="image" alt="Body image" src={body} name="body_image" className={`body_diagram_button ${props.commentMode}`} id="body_image_button" /></Link>
                             </div>
                             <br/>
                             <div id="instruction_box_number_1_page_7_script_3" className={`custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                 <p className="top_line_in_instruction_box">Click on the link: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_7_script_3" defaultValue={getValue("text_box_number_1_page_7_script_3")} /> and share your screen. </p>
                                 <br/><br/><br/>
                                 <img src={shareScreen} alt="Share screen" id="share_your_screen_page_7_script_3"/>
                                 <br/><br/>
                                 <p>Explain your example </p>
                             </div>
                             <br/>
                             <div id="instruction_box_number_2_page_7_script_3" className={`custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                 <p className='top_line_in_instruction_box'>When you are done, stop screen sharing</p>
                                 <img src={stopShare} alt="Stop sharing screen" id="stop_sharing_screen_page_7_script_3"/>
                             </div>
                         </div>
                     </div>
                 </div>
                 {sideBar}
             </div>
        )
    }
    else{
        return(
            <div>
                <BodyDiagram />
                {sideBar}
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

export default connect(mapStateToProps, mapDispatchToProps)(componentWrapper(Page7));
