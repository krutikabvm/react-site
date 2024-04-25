import logo from './logo.svg';
import './App.css';

const name = "Learner";
let i = 1;
const numbers = [1,2,3,4,5];
const updatedNums = numbers.map((number)=>{
    return <li>{number}</li>;
});
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)




function MyButton({ title }) {
    return (
        <button style={{backgroundColor:'deeppink',borderRadius:'10px',color:'white'}} onClick={() => console.log('Button clicked!')}>{title}</button>
    );
}

function MySecondButton(){
    return (
        <button style={{backgroundColor:'gray',borderRadius:'3px',color:'white',margin:'3px'}} onClick={() => alert('Button clicked!')}>Second Button</button>
    );
}
function App() {
  return (
      <div>
          <h1 style={{padding: "12px"}}>
              <span style={{color: 'red'}}>Hello, {name}.</span><br/>
              <span style={{color: 'green'}}>Welcome to GeeksforGeeks.</span>
          </h1>
          <h2 style={{paddingInlineStart: "12px"}}>{i == 1 ? "Hello World!" : "False!"} </h2>
          <ul>
              {updatedNums}
          </ul>
          <div style={{marginLeft: '12px'}}>
              {myList}
          </div>


          <img
              src="https://i.imgur.com/MK3eW3Am.jpg"
              alt="Katherine Johnson"
              style={{borderRadius: '75px', marginRight: '12px', height: '275px'}}
          />
          <img
              src="https://i.imgur.com/MK3eW3Am.jpg"
              alt="Katherine Johnson"
              style={{borderRadius: '50px', marginRight: '12px', height: '225px'}}
          />
          <img
              src="https://i.imgur.com/MK3eW3Am.jpg"
              alt="Katherine Johnson"
              style={{borderRadius: '100px', marginRight: '12px'}}
          />
          <img
              src="https://i.imgur.com/MK3eW3Am.jpg"
              alt="Katherine Johnson"
              style={{borderRadius: '30px', height: '175px'}}
          />

          <br/>


          <MyButton title="Test Button"/>
          <MySecondButton/>

          <h1>React is {5 + 5} times better with JSX</h1>

          <input type="text"/>
          <br/>
          <input type="number"/>
      </div>
  );
}

export default App;

// export default function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/MK3eW3Am.jpg"
//             alt="Katherine Johnson"
//         />
//     )
// }
