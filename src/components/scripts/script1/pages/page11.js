import { connect } from 'react-redux';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import optimizeVideo from "../../pictures/optimizevideo.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page11 = (props) => {

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
                        If you're comfortable with it, can you tell me a little bit about what you know about mental health?  That way I'll know if there are certain things you've already learned about mental health that would be boring to repeat to you, or certain parts of mental health that you really want to talk about together and learn more about. 
                        </p>
                    </div>

                    <div id="pause_listen_div">
                       <img src={pause} className={`pause ${props.commentMode}`} alt="Pause" id="pause" onClick={event => handleCommentClick(event)} />                        
                       <img src={allEars} className={`allEars ${props.commentMode}`} alt="Listen" id="allEars" onClick={event => handleCommentClick(event)} /> 
                    </div>

                    <div id="instruction_box_number_1_page_10_script_1" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className='top_line_in_instruction_box'>
                           Listen to your mentee's definitions of mental health and talk to them about their ideas. You can also share your own definition of mental health. 
                        </p>
                    </div>
                  
                  <div className='container_for_medium_margin'>
                     <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                        We are going to watch a video together about mental health made by young adults who have mental health conditions. Please ask me to pause if you have a question or if something makes you feel uncomfortable.
                     </p>
                  </div>
                    <div className='wrapper'>
                        <a href="https://drive.google.com/file/d/1cJXHFL2jlVdH_YSihqijsdhD-lgr7Cvk/view" id="video_link_page_11_script_1" className={props.commentMode} onClick={event => handleCommentClick(event)}>Video link</a>
                        <div id="image_and_instruction_box_number_1_page_11_script_1" className='container_for_extra_small_margin'>
                            <div id="instruction_box_number_1_page_11_script_1" className={`ital custom_svg demo_box ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                                <p className='top_line_in_instruction_box'>
                                    Share your screen <br/>
                                    -Share sound <br/>
                                    -Optimize for video
                                </p>
                            </div>
                            <img src={shareScreen} id="share_screen_page_11_script_1" alt="Share your screen" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                        </div>
                    </div>
                    <div className='container_for_medium_margin'>
                        <img src={optimizeVideo} id="opt_page_11_script_1" alt="Optimize your video" className={props.commentMode} onClick={event => handleCommentClick(event)} />
                    </div>

                    <div id="image_and_instruction_box_number_1_page_11_script_1" className='container_for_extra_medium_margin'>
                        <div id="instruction_box_number_2_page_11_script_1" className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                            <p className='top_line_in_instruction_box'>
                                When you are finished, stop sharing your screen
                            </p>
                        </div>
                        <img src={stopShare} alt="Stop sharing your screen" id='stop_share_page_11_script_1' className={props.commentMode} onClick={event => handleCommentClick(event)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page11);