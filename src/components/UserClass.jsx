import React from "react"
class UserClass extends React.Component {

constructor(props){
    super(props);

  this.state = {
 userInfo:{
    name:"Krishna T",
    location:"Pune",
    
 }
  }
}


async componentDidMount(){
const data = await fetch("https://api.github.com/users/krishnatripathi09",{
    headers: {
      Authorization: `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`,
    },
  }) ;
const json = await data.json();
console.log(json)
this.setState({
    userInfo:json 
})

}

    render(){
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
              <h2>Name:{this.state.userInfo.name}</h2>
              <h2>Location:{this.state.userInfo.location}</h2>
              <h2>Contact: {this.state.userInfo.login}</h2>
            </div>
          )
    }
}
export default UserClass;