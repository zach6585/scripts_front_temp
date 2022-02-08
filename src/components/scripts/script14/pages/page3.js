import { Component } from 'react';



class Page3 extends Component {
    
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Plan for the day</h1>
                <div className='left container_for_medium_margin'>
                    <p>Today's plan is:</p>
                    <ol>
                        <li>Icebreaker game</li>
                        <li>Check in about your coping strategies</li> 
                        <li>Begin talking about using your coping strategies when mentoring is finished</li>
                        <li>Practicing coping strategies, if you want or need to</li>
                        <li>Coping with triggers</li>
                        <li>Time for questions</li>
                        <li>Reminders about mentoring</li>
                        <li>Sharing about mentoring</li>
                        <li>Schedule for next week</li>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Page3;

