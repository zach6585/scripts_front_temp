import checkButSmaller from "../../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../../pictures/redxbutsmaller.png";

import { useState, useEffect } from 'react';

import Sidebar from '../../../general pages/sidebar';
import GreenCheckClicked from './greencheckclicked';
import RedXClicked from './redxclicked';

const Page4 = (props) => {
 
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");    
    const [words_that_appear_when_you_click_green_check, setCheckWords] = useState(null);
    const [words_that_appear_when_you_click_red_x, setXWords] = useState(null);                     


    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    
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
        else{ 
            if (letter === 'c'){
                setCheckWords(<GreenCheckClicked />);
                setXWords(null);
            }
            else if (letter === 'x'){
                setCheckWords(null);
                setXWords(<RedXClicked />);
            }
        }
        
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Icebreaker game/fun activity</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>Would you like to do another scavenger hunt show and tell? </p>
                    <div className="container_for_medium_margin">
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={event => handleClick(event, "")}>Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_3" onClick={event => handleClick(event, "")}>Your mentee says no</p>
                        <br/>
                        <div className="choicePicked">{words_that_appear_when_you_click_red_x}</div>
                    </div>
                </div>
            </div>
            {sideBar}
        </div>
    )
}


export default Page4;
 