import { Component } from 'react';
import axios from 'axios';

class Page3 extends Component {
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        axios.get("http://localhost:3001/scripts")
        .then(res => {
            const sheets = res.data;
            let flag = false;
            for (const sht of sheets){
                if (sht.script === "dummy" && sht.page_number === "3"){
                    flag = true;
                }
            }
            if (flag === false){
                console.log('here');
                const cntnt = document.getElementById("bigboy");
                axios.post("http://localhost:3001/scripts", {
                    content: cntnt.innerHTML, 
                    page_number: "3", script: "dummy" })
            }
              
    })
}
    render() {
        return (
            <div id="bigboy">
            <div className="sheet">
                <h1 className="bold center">Plan for the day</h1>
                <div className='left container_for_medium_margin'>
                    <ol>
                        <li>Icebreaker game</li>
                        <li>Learning about mental health conditions</li>
                        <li>Learning about self-monitoring</li>
                        <li>Time for questions</li>
                        <li>Reminders about mentoring</li>
                        <li>Make a plan for practice</li>
                    </ol>
                </div>
            </div>
            </div>
        )
    }
}
export default Page3;
