  
import React, { Component } from 'react';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card"
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import M from "materialize-css";
import Skills from '../src/pages/Skills';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
    state = {
        skills: "",
        contact: "",
        portfolio: "",

    }
    componentDidMount() {
        M.AutoInit();
    }
    
    navClick = event => {
        this.setState({
            skills: "",
            contact: "",
            portfolio: "",
            [event.target.name]: "active"
        })
    }
    render() {
        return(
            <Router>
                <Navbar
                navClick={this.navClick}
                skills={this.state.skills}
                contact={this.state.contact}
                portfolio={this.state.contact}
                />         
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Card/>
                        </Route>
                        <Route path="/skills">
                            <Skills/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio/>
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        )
    }
}




// import React from "react";
// import Main from "./pages/Main";


// function App() {
//   return (
//     <Main />
//   );
// }

// export default App;
