import { Component } from 'react';

import PracticeReminder from '../../general pages/practicereminder';
 

class Page9 extends Component {
   
    render() {
        return (
            <PracticeReminder startText="This week, your job will be to practice using a coping strategy. We decided that you wanted to try " endText={<p>If you have challenges with your coping strategy, you can use the website!
                <br/><br/>
                The mood log will help you keep track of how you feel after you do the activity. You can use body scan worksheets if they help you with the mood logs.</p>}/>
        )
            
    }
}


export default Page9;

