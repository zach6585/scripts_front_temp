import { Component } from 'react';

import SharingAboutMentoring from '../../general pages/sharingaboutmentoring'; 


class Page13 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        

    }
    
    render() {
        return (
            <SharingAboutMentoring script={"11"} />
        )
    }
}
export default Page13;
