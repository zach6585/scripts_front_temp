import { Component } from 'react';

import RemindersAboutMentoring from '../../general pages/remindersaboutmentoring/remindersaboutmentoring.js';


class Page16 extends Component {
    
    render() { 
        return (
            <div>
                <RemindersAboutMentoring extrapractice={true} />
                <div className='sheet left'>
                    <p>
                        This week, when you do your mood logs, try using the body scan worksheet first. The body scan worksheet might help you do the mood log. 
                    </p>  
                </div>
            </div>
        )
    }
}

export default Page16;