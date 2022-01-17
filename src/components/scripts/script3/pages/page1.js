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
                <h1 className="bold center">Session 3</h1>
                <div className="left container_for_small_margin">
                    <h1 className="bold">Purpose</h1>
                    <ul>
                        <li>Help your mentee learn more about self-monitoring</li>
                    </ul>

                    <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Symptom card sort link </li>
                            <li>Body scan worksheets link</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;
