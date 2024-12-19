import React from "react"
class UserClass extends React.Component {

constructor(props){
    super(props);
console.log("Constructor is called");
  this.state = {
 userInfo:{
    name:"Krishna T",
    location:"Pune",
    
 }
  }
}


async componentDidMount(){
const data = await fetch("https://api.github.com/users/krishnatripathi09") ;
const json = await data.json();
console.log("component did mount is called")
this.setState({
    userInfo:json 
})
}

componentDidUpdate(){
    console.log("component did update is called");
}

componentWillUnmount(){
    console.log("UnMount is called ")
}
    render(){
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>{console.log("Render  is called")}</h2>
              <h2>Name:{this.state.userInfo.name}</h2>
              <h2>Location:{this.state.userInfo.location}</h2>
              <h2>Contact: {this.state.userInfo.login}</h2>
            </div>
          )
    }
}
export default UserClass;