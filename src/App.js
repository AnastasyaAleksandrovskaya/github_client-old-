import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React1 " };
const store = createStore(reducer, initialState);

class App extends Component {
    render() {
        return <HelloWorld tech={store.getState().tech}/>
    }
}
export default App;
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((x,y) => x + y)
// console.log(sum);
