import { Component } from 'react';

class Page1 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
  }
    render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Peer mentoring session 13</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        
                    </div>
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Work on your mentee's third coping strategy </li>
                            <li>Review other possible coping strategies</li>
                            <li>Talk about what coping strategies would be good to use in different places</li>
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
                            <li>Coping strategy card sort</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;

