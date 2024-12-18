import React from "react"
class UserClass extends React.Component {
constructor(props){
    super(props);
console.log("Constructor is called ")
   this.state={
   count:22
   }
}

componentDidMount(){
console.log("Component Did Mount is called ")
}

//We make api calls inside component Did Mount because it is implemented last in class class based components
//like first the constructor of class will be called then the render of the class will be called and if that class 
//has child class then execution will go to child class and then constructor of child class be called
// then render of child class will be called and then componentDidMount of child class will be called 
//and then the componentDidMount of parent class will be called 

    render(){
console.log("render is called")
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