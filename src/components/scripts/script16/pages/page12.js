import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";

import { useState } from "react";

const Page12 = () =>{

    const [greenCheckWords, setGreenCheckWords] = useState("")
    const [redXWords, setRedXWords] = useState("")

    const handleClick = (e, letter) => {
        if (letter === 'c'){
            setGreenCheckWords("Go to next page");
        }
        else if (letter === 'x'){
            setRedXWords("Say goodbye and thank your mentee")
        }
    }

    return (
        <div className="sheet">
            <h1>Keeping in touch</h1>
            <div className="left">
                <div className='container_for_extra_small_margin'>
                    <img className="check" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className="what_does_your_mentor_say">You want to stay in touch with your mentee</p>
                    <br/>
                    <div className="choicePicked">{greenCheckWords}</div>
                    <br/><br/>
                    <img className="redX" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className="what_does_your_mentor_say">You do not want to stay in touch with your mentee</p>
                    <br/>
                    <p className="choicePicked">{redXWords}</p>
                </div>
            </div>
        </div>
    )
}

export default Page12;