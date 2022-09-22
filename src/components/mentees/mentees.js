import {useState, lazy, Suspense} from 'react';
import './mentees.css';


const DisplayMentees = lazy(() => import('./displayMentees'));
const MenteeCreationForm = lazy(() => import('./menteeCreationForm'));


const Mentees = () => {
    const [whichComponent, setWhichComponent] = useState('display'); //Acts as a flag for which component needs to be rendered
    
    const handleClick = (e) => {
        e.preventDefault();
        if (whichComponent === "display"){
            setWhichComponent('create');
        }
        else{
            setWhichComponent('display');
        }
    }
    if (whichComponent === "display"){
        return(
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className='mentee_main_div'>
                    <div id="display_mentees"><DisplayMentees /></div>
                    <br/>
                    <button id="button_to_make_a_mentee" onClick={event => handleClick(event)}>Add a new mentee</button>
                </div>
            </Suspense>
            
        )
    }
    
    else{
        return(
            <Suspense fallback={<h1>Loading...</h1>}>
                <MenteeCreationForm />
                <br/>
                <button id="button_to_choose_a_mentee" onClick={event => handleClick(event)}>Choose existing mentee</button>
            </Suspense>
            
        )
    }
}



export default Mentees;