import React ,{Component,PureComponent} from 'react';
class RegularChild extends Component{
    render(){
        console.log("regularchild rendered");
        return <div>RegularChild:{this.props.value}</div>
    }
}
class PureChild extends PureComponent{
    render(){
        console.log("purechild rendered");
        return <div>Pure child:{this.props.value}</div>
    }
}
class Parent extends Component{
    state={count:0,dummy:0};
   increment = () => {
    this.setState({count:this.state.count+1});
   };
   rerender = () => {
    this.setState({dummy:this.state.dummy+1});
   }
   render(){
    return (
        <div>
            <h2>Parent component</h2>
            <button onClick={this.increment}>Increment count</button>
            <button onClick={this.rerender}>trigger-rerender</button>
            <RegularChild value={this.state.count}/>
            <PureChild value={this.state.count}/>
        </div>
    );
   }
}
export default Parent;