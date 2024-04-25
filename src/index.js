import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './App';
import CarDetails from './Car';
import Garage from './Garage';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import Toggle from "./Toggle";
import LoginControl from "./LoginControl";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <CarDetails color="red" />
        <Garage />
        <Toggle/>
        <LoginControl/>
    </React.StrictMode>
);

 class Car {
      constructor(name) {
        this.brand = name;
      }

     present() {
         return 'I have a ' + this.brand;
     }
    }

class Model extends Car{
    constructor(name,mod) {
        super(name);
        this.model = mod;
    }

    show(){
        return this.present()+', It is a '+ this.model;
    }
}


const mycar = new Car("Skoda");
const model = new Model("Ford", "Mustang");

const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
    <div style={{marginLeft:'12px'}}>
        {mycar.brand}
        <br/>
        {mycar.present()}

        <br/>
        <br/>
        {model.show()}
    </div>
);

const tag = React.createElement('h1', {}, 'I do not use JSX!');
const addTag = ReactDOM.createRoot(document.getElementById('makeHtml'));
addTag.render(tag);


const timeAdd = ReactDOM.createRoot(document.getElementById('timeAdd'));


function tick() {
    // const element = (
    //     <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //     </div>
    // );
    timeAdd.render(<Clock date={new Date()}/>);
}
setInterval(tick, 1000);

class AdjustClock extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
          <div >
              <div style={{color:'darkblue',fontSize:'40px'}}>Indian Time</div>
              <div><span style={{fontWeight:'bold'}}>Date: </span> {this.state.date.toLocaleDateString()}</div>
              <div><span style={{fontWeight:'bold'}}>Time: </span>{this.state.date.toLocaleTimeString()}</div>
          </div>
        );
    }
}

const adjustTime = ReactDOM.createRoot(document.getElementById('adjust-time'));
adjustTime.render(<AdjustClock/>);





// class App extends React.Component {
//
//     state = { inputValue: '' };
//
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label> Enter text </label>
//                     <input type="text"
//                            value={this.state.inputValue}
//                            onChange={(e) => this.setState(
//                                { inputValue: e.target.value })} />
//                 </form>
//                 <br />
//                 <div>
//                     Entered Value: {this.state.inputValue}
//                 </div>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App />,
//     document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
