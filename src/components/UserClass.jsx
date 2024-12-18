import React from "react"
class UserClass extends React.Component {
constructor(props){
    super(props);

    console.log(props)
}


    render(){

        const {name,Location} =this.props
        return (
            <div className="user-card">
              <h2>Name:{name}</h2>
              <h2>Location:{Location}</h2>
              <h2>Contact: 9284640248</h2>
            </div>
          )
    }
}
export default UserClass;