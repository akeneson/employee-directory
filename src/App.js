// returns the Main.js component
import React,{useState, useEffect} from "react";
import axios from "axios";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";
import EmployeeTable from "./components/Table";

function App() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        //Display the value in the console. Initially it is empty.
        axios.get("https://randomuser.me/api/?results=10&nat=us")
        .then(response => {
            console.log(response);
            setEmployees([
                ...response.data.results
            ])
        })
    }, []);


    return (
        <div className="App">
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
        </div>
    );
}







export default App;
