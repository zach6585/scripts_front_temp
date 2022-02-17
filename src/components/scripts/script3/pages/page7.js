import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


import BodyDiagram from '../../general pages/bodydiagram';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import body from '../../pictures/body.png';


const Page7 = (props) => {
    
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 
    const [bodyimageClicked, setbodyImageClicked] = useState(false);
    const [mainDiv, setMainDiv] = useState("show");
    const [imgAndTBDiv, setimgAndTBDiv] = useState("hide");                        

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
    
    const handleBodyImageClicked = (event) => {
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
        else {
            setbodyImageClicked(!bodyimageClicked);
            setMainDiv(imgAndTBDiv);
            setimgAndTBDiv(mainDiv);
        }
    }
    

    return (
        <div>
            <div>
                <div className={`sheet ${blur}`}>
                    <div className={`body_page_main_div ${mainDiv}`}>
                        <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Body scan</h1>
                        <div className="left container_for_medium_margin">
                            
                            <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Now we will practice thinking about how your body feels using something called a body scan.</p>
                            <div id="div_with_body_image_and_p_page_7_script_3">
                                <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Our bodies can help us learn about our feelings and emotions. I will show you an example.</p>
                                <input type="image" alt="Body image" src={body} name="body_image" className={`body_diagram_button ${props.commentMode}`} id="body_image_button" onClick={event => handleBodyImageClicked(event)} />
                            </div>
                            <br/>
                            <div id="instruction_box_number_1_page_7_script_3" className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                <p className="top_line_in_instruction_box">Click on the [link to be inserted] and share your screen. </p>
                                <br/><br/><br/>
                                <img src={shareScreen} alt="Share screen" id="share_your_screen_page_7_script_3"/>
                                <br/><br/>
                                <p>Explain your example </p>
                            </div>
                            <br/>
                            <div id="instruction_box_number_2_page_7_script_3" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                <p className='top_line_in_instruction_box'>When you are done, stop screen sharing</p>
                                <img src={stopShare} alt="Stop sharing screen" id="stop_sharing_screen_page_7_script_3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`body_diagram_popup ${imgAndTBDiv}`}><BodyDiagram script={props.script} /></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page7);
