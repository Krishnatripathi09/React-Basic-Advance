import React from "react"
class UserClass extends React.Component {
constructor(props){
    super(props);

   this.state={
   count:22
   }
}


    render(){

        const {name,Location} =this.props
        const {count}=this.state;
        return (
            <div className="user-card">
                <h2>{count}</h2>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Click Me </button>
              <h2>Name:{name}</h2>
              <h2>Location:{Location}</h2>
              <h2>Contact: 9284640248</h2>
            </div>
          )
    }
}
export default UserClass;