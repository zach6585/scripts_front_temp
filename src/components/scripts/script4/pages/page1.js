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
                <h1 className="bold center">Peer mentoring session 4</h1>
                <div className="left container_for_medium_margin">
                    <h1 className="bold">Purpose:</h1>
                    <ul>
                        <li>Teach your mentee about coping strategies</li>
                        <li>Help your mentee figure out activities that will help them with their mental health</li>
                    </ul>
            
                   <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentoring script</li>
                            <li>Coping strategy card sort link</li>
                            <li>Body scan link</li>
                            <li>Mood log link</li>
                        </ul>
                   </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;



