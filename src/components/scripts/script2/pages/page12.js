import { Component } from 'react';

import SharingAboutMentoring from '../../general pages/sharingaboutmentoring'; 


class Page12 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        

    }
    
    render() {
        return (
            <SharingAboutMentoring script={"2"} />
        )
    }
}
export default Page12;
