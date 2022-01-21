import { Component } from 'react';

class Page1 extends Component {

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Session 5</h1>
                <div className="left container_for_small_margin">
                    <h1 className="bold">Purpose</h1>
                    <ul>
                        <li>Review coping strategies</li>
                        <li>Help your mentee identify coping strategies to work on during mentoring</li>
                    </ul>
                    <br /><br />
                    <div>
                        <h1 className="bold container_for_medium_margin">Materials</h1>
                        <ul>
                            <li>Peer mentor script 5</li>
                            <li>Coping strategy card sort link</li>
                            <li>Mood log link</li>
                            <li>Body scan worksheet link</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;
