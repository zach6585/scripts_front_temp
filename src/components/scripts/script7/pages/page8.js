import { Component } from 'react';

import Step1 from './page8_child_components/step1.js';
import Step2 from './page8_child_components/step2.js';
import Step3 from './page8_child_components/step3.js';
import Step4 from './page8_child_components/step4.js';

import hamburgerMenu from "../../pictures/hamburger_menu.png"


class Page8 extends Component {
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
       this.handleScroll()
    }


    hamburgerClick = (event) => {
        if (this.state.hamburger_is_clicked === true){
            this.setState({hamburger_is_clicked: false, options: ''})
        }

        else if (this.state.hamburger_is_clicked === false){
            this.setState({hamburger_is_clicked: true,
            options: 
            <div>
                <p onClick={event => this.stepClick(event, 1)}>Step 1</p>
                <p onClick={event => this.stepClick(event, 2)}>Step 2</p>
                <p onClick={event => this.stepClick(event, 3)}>Step 3</p>
                <p onClick={event => this.stepClick(event, 4)}>Step 4</p>
            </div>
        })
        }
    }

    stepClick = (e, choice) => {
        if (choice === 1){
            this.setState({curr_component: <Step1 />, hamburger_is_clicked: false, options: ''})
        }
        else if (choice === 2){
            this.setState({curr_component: <Step2 />, hamburger_is_clicked: false, options: ''})
        }
        else if (choice === 3){
            this.setState({curr_component: <Step3 />, hamburger_is_clicked: false, options: ''})
        }
        else if (choice === 4){
            this.setState({curr_component: <Step4 />, hamburger_is_clicked: false, options: ''})
        }
        
        
    }

    state = {
        hamburger_is_clicked: false,
        curr_component: <Step1 />, 
        options: ''
        }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Practicing coping strategies</h1>
                <div className='left container_for_small_margin'>
                    <div className="hamburger_menu_div">
                        <img className={this.state.hamburger_is_clicked ? "rotate" : "no_rotate"} src={hamburgerMenu} alt="Hamburger menu icon" onClick={(event) => this.hamburgerClick(event)} />
                        {this.state.options}
                    </div>
                    {this.state.curr_component}
                </div>
            </div>
        )
    }
}
export default Page8;






