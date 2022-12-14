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
    const getLink = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_link_for_value = props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <div className="left">
                    <div className='wrapper'>
                        <a href={getLink("video_link_page_10_script_1")} id="video_link_page_10_script_1" className={props.commentMode} onClick={event => handleCommentClick(event)} target="_blank" rel="nopener noreferrer">Video link</a>
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
        sendingComment: state.comments.sendingComment,
        links: state.links.links
    }
}

const mapDispatchToProps = dispatch => {
    return{
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page10);