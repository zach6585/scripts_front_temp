import { useState } from 'react';

import Five from './five';
import OTFZ from './otfz';
import DNS from './dns';
import ExtraPracticeSection from './extrapracticesection';

const RemindersAboutMentoring = (props) => {

    const [five, setFive] = useState(null);
    const [otf, setOTF] = useState(null);
    const [dns, setDNS] = useState(null);
    const [highlight_f, set_highlight_f] = useState("");
    const [highlight_o, set_highlight_o] = useState("");
    const [highlight_z, set_highlight_z] = useState("");
    const [highlight_d, set_highlight_d] = useState("");


    const handleClick = (e, letter) => {
       if (letter === 'f'){
            setFive(<Five />);
            setOTF(null);
            setDNS(null);
            set_highlight_f("highlighted");
            set_highlight_o("");
            set_highlight_z("");
            set_highlight_d("");
        }
        else if (letter === 'o'){
            setFive(null);
            setOTF(<OTFZ otf_or_z={'otf'}/>);
            setDNS(null);
            set_highlight_f("");
            set_highlight_o("highlighted");
            set_highlight_z("");
            set_highlight_d("");
        }
        else if (letter === 'z'){
            setFive(null);
            setOTF(<OTFZ otf_or_z={'z'}/>);
            setDNS(null);
            set_highlight_f("");
            set_highlight_o("");
            set_highlight_z("highlighted");
            set_highlight_d("");
        }
        else if (letter === 'd'){
            setFive(null);
            setOTF(null);
            setDNS(<DNS />);
            set_highlight_f("");
            set_highlight_o("");
            set_highlight_z("");
            set_highlight_d("highlighted");
        }
    }

    if (props.script === "1"){
        return (
            <div className="sheet">
                <h1 className="bold center">Reminders about mentoring</h1>
                <div className="left container_for_small_margin">
                    <p>
                        It was really great to talk with you. <br/>
                        <span className='uline'>Mood log reminder</span>
                    </p>
                    <ul>
                        <div className={`${highlight_f}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'f')}>Your mentee completed 5 mood logs.</li></div>
                        <div className={`${highlight_o}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'o')}>Your mentee completed 1-4 mood logs.</li></div>
                        <div className={`${highlight_z}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'z')}>Your mentee completed 0 mood logs.</li></div>
                        <div className={highlight_d}><li className="square_bullets" onClick={(event) => handleClick(event, 'd')}>Your mentee hasn't started their mood logs</li></div>
                    </ul>
                    {five}
                    {otf}
                    {props.extrapractice ? <ExtraPracticeSection /> : null}
                    {dns}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="sheet">
                <h1 className="bold center">Reminders about mentoring</h1>
                <div className="left container_for_small_margin">
                    <p>
                        It was really great to talk with you. <br/>
                        <span className='uline'>Mood log reminder</span>
                    </p>
                    <ul>
                        <div className={`${highlight_f}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'f')}>Your mentee completed 5 mood logs.</li></div>
                        <div className={`${highlight_o}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'o')}>Your mentee completed 1-4 mood logs.</li></div>
                        <div className={`${highlight_z}`}><li className="square_bullets" onClick={(event) => handleClick(event, 'z')}>Your mentee completed 0 mood logs.</li></div>
                    </ul>
                    {five}
                    {otf}
                    {props.extrapractice ? <ExtraPracticeSection /> : null}
                    {dns}
                </div>
            </div>
        )
    }
}



export default RemindersAboutMentoring;

