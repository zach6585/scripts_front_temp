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
                 <h1 className="bold center">Peer mentoring session 7</h1>
                <div className="left container_for_medium_margin">
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Helping your mentee practice the coping strategy</li>
                            <li>Helping your mentee practice rating how they feel</li>
                            <li>Helping your mentee problem solve to make doing their coping strategy easier</li>
                        </ul>
                    </div>
                    <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentor session 7 script</li>
                            <li>Audio recorder</li>
                            <li>Solutions website link</li>
                            <li>Body scan worksheet link</li>
                            <li>Mood log link</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;