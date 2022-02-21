import { connect } from 'react-redux';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import optimizeVideo from "../../pictures/optimizevideo.png";

import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page10 = (props) => {

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

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <div className="left">
                    <div>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                            That's ok, we're going to watch a video about mental health to learn more.
                            We are going to watch a video together about mental health made by young adults who have mental health conditions. Please ask me to pause if you have a question or if something makes you feel uncomfortable.
                        </p>
                    </div>
                  
                    <div className='wrapper'>
                        <a href="https://drive.google.com/file/d/1cJXHFL2jlVdH_YSihqijsdhD-lgr7Cvk/view" id="video_link_page_10_script_1" className={props.commentMode} onClick={event => handleCommentClick(event)}>Video link</a>
                        <div id="image_and_instruction_box_number_1_page_10_script_1" >
                            <div id="instruction_box_number_1_page_10_script_1" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                <p className='top_line_in_instruction_box'>
                                    Share your screen <br/>
                                    -Share sound <br/>
                                    -Optimize for video
                                </p>
                            </div>
                            <img src={shareScreen} id="share_screen_page_10_script_1" alt="Share your screen" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                        </div>
                    </div>
                    <div className='container_for_medium_margin'>
                        <img src={optimizeVideo} id="opt_page_10_script_1" alt="Optimize your video" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                    </div>

                    <div id="image_and_instruction_box_number_2_page_10_script_1" className='container_for_large_margin'>
                        <div id="instruction_box_number_2_page_10_script_1" className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                            <p className='top_line_in_instruction_box'>
                                When you are finished, stop sharing your screen
                            </p>
                        </div>
                        <img src={stopShare} alt="Stop sharing your screen" id='stop_share_page_10_script_1' className={props.commentMode} onClick={event => handleCommentClick(event)} />
                    </div>
                    

                </div>
            </div>
            {sideBar}
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

export default connect(mapStateToProps, mapDispatchToProps)(Page10);