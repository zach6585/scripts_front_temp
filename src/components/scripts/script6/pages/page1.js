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
                 <h1 className="bold center">Peer mentoring session 6</h1>
                <div className="left container_for_medium_margin">
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Helping your mentee practice the coping strategy</li>
                            <li>Helping your mentee solve challenges with their coping strategy</li>
                            <li>Helping your mentee be ready to practice their coping strategy on their own</li>
                        </ul>
                    </div>
                    <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentor session 6 script</li>
                            <li>Card sort activity-barriers and supports</li>
                            <li>Body scan worksheet link</li>
                            <li>Mood log link</li>
                            <li>Solutions website link</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;