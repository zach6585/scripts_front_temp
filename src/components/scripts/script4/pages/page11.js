import { Component } from 'react';

import PracticeReminder from '../../general pages/practicereminder';
 

class Page11 extends Component {
   
    render() {
        return (
            <PracticeReminder startText="This week, keep paying attention to your symptoms" endText={<p>If you have challenges with your coping strategy, you can use the website!
                <br/><br/>
                The mood log will help you keep track of how you feel after you do the activity. You can use body scan workscripts if they help you with the mood logs.} />
                </p>} />
        )
            
    }
}

export default Page11;

