import React from 'react';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

class App extends React.Component{
    render() {
        return(
            <div className="App">
                <div className="App-header">

                    <h2>Welcome {this.props.user.username}</h2>
                </div>
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
            </div>
        )
    }
    handleLogout(){
        AuthService.logout()
        this.props.history.replace('/login');
    }
}

export default withAuth(App);


// import React, { Component } from "react";
// import HelloWorld from "./HelloWorld";
// import reducer from "./reducers";
// import { createStore } from "redux";
//
// const initialState = { tech: "React1 " };
// const store = createStore(reducer, initialState);
//
// class App extends Component {
//     render() {
//         return <HelloWorld tech={store.getState().tech}/>
//     }
// }
// export default App;
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((x,y) => x + y)
// console.log(sum);

// redux является предсказуемым контейнером состояний для приложений JavaScript.
// createStore используется для создания Redux store.
// Редуктор − единственный, кто имеет доступ к функции createStore().
// Редуктор − это просто функция. Функция, которая принимает два параметра. Первое − state, второе − action.
// Редуктор всегда возвращает newState.
// Исходное состояние вашего приложения − initialState − это второй аргумент, который передается в createStore.
// getState() возвращает текущее состояние вашего приложения.
