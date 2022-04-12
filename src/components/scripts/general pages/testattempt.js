import { Component } from "react";
import componentWrapper from "../../../HOC";
import { connect } from 'react-redux';


class TestAttempt extends Component {

    componentDidMount = () => {
        console.log(this.props)
    }
    render(){
        return(

            <main style={{ padding: "1rem 0" }}>
                <h2>Expenses</h2>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(componentWrapper(TestAttempt));