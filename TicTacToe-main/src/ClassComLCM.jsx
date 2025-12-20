// Life cycle method includes 4 phases
// 1.Intialization-constructor
// 2.Mounting-componentDidMount
// 3.Updating-componentDidUpdate
// 4.Unmounting-componentWillUnMount
// constructor & componentDidMount, componentWillUnMount methods will work only once in thier life cycle
import React, {Component} from 'react'
class ClassComLCM extends Component{
    constructor(props){
        console.log("1st constructor")
     super(props);
     this.state={count:0}
     this.increment=()=>{this.setState({count:this.state.count+1})}
    }
    render(){
        return(<>
             {console.log("UI Rendered")}
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
        </>
        )
    }
    componentDidMount(){
        console.log("Mounted");
    }
    componentDidUpdate(){
        console.log("component update");
    }
    componentWillUnmount(){
        console.log("unmounted")
    }
}
export default ClassComLCM