import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Navtabs from "../components/Navtabs";
import API from "../utils/API";
import Profile from "../components/Profile";
import "../App.css";

class Home extends Component {
    state = {
        loggedIn: false,
        loading: true,
        employees: [
            // {
            //     id: 1,
            //     name: "",
            //     title: "",
            //     img: ""
            // }
        ]
    }

    componentDidMount() {
        this.checkAuth();
        fetch("https://dog.ceo/api/breeds/image/random/5")
            .then(res => res.json())
            .then(data => data.message.map(item => (
                {
                    id: 1,
                    name: "dog",
                    title: "good boy",
                    img: item
                }
            )))
            .then(data => this.setState({ employees: data }))
            .catch(err => console.err(err))
    }

    checkAuth() {
        API.checkAuth()
            .then(res => {
                if (res.status === 200) {
                    this.setState({ loggedIn: true, loading: false });
                } else {
                    this.setState({ loading: false });
                }
            })
            .catch(() => this.setState({ loading: false }))
    }

    // handleLogout() {
    //     API.logout()
    //         .then(() => this.props.history.push('/login'))
    //         .catch(err => console.error(err));
    // }

    // state = {
    //     employee:[]
    // }

    // componentDidMount(){
    // let employeeLocal = JSON.parse( localStorage.getItem("personal"))
    //     this.setState({
    //         employee: employeeLocal
    //     })
    // }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        if (!this.state.loggedIn) {
            return <Redirect to='/login' />
        }
        return (
            <div className="home-cover">
                <Navtabs />
                <h3 className="greeting">Welcome to TOBY</h3>
                <h4>Employee List</h4>
                <h5>Select any employee to begin</h5>
                <div className="individuals-container">

                    {this.state.employees.map(item => (
                        <Profile
                            id={item.id}
                            name={item.name}
                            title={item.title}
                            img={item.img}
                        />
                    ))}
                    {/* {this.state.employee.map(item => (
                    <Profile
                        key={`individuals-${item}`}
                        id={item.id}
                        name={item.name}
                        title={item.title}
                        img={item.img}
                    />
                ))} */}

                </div>
            </div>
        )
    }
}

export default Home;