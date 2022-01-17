import { Component } from 'react';
import SessionStart from '../../general pages/sessionstart';


class Page2 extends Component {
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        

    }

    render() {
        return (
           <SessionStart script={"13"} /> 
        )
    }
}


export default Page2;

