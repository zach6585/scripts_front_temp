
import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page6 = (props) => {

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
                <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                    We will take some time to think about our 2 truths and 1 thing that is not true. Let me know when you're ready to guess.
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);


// const CheckPicked = (props) => {
//     const [sideBar, setSidebar] = useState(null);
//     const [blur, setBlur] = useState("");                      


//     useEffect(() => {
//         setBlur("");
//         setSidebar(null);
//       }, [props.sendingComment]);
//     const handleCommentClick = (event) => {
//         //Here is where you render the sidebar
//         if (props.commentMode === 'commentModeOn'){
//             if (blur === ""){
//                 setBlur("blur");
//             }
//             else {
//                 setBlur("");
//             }
//             if (sideBar === null){
//                 setSidebar(<Sidebar id_tag={event.target.id} />)
//             }
//             props.toggleCommentMode();
//         }
//     }

//     return(
//         
//     )
// }