import { Component } from 'react';

class Page1 extends Component {

    render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Peer mentoring session 9</h1>
                <div className="left container_for_medium_margin">
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Work on your mentee's second coping strategy</li>
                            <li>Review information about anxiety</li>
                            <li>Work on your mentee's toolkit</li>
                        </ul>
                    </div>
                    <br /><br />
                    <div>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentoring script</li>
                            <li>Body scan worksheet link</li>
                            <li>Mood log</li>
                            <li>Coping strategy toolkit</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;
	
