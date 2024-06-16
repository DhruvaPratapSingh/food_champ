import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={ //useState
            // count:0,
            // count2:8,
            userInfo:{
            name:"dummy",
            login:"default",       
            avatar_url:"dummy url",
        },
        };
        // console.log("child constructor");
    }
   async componentDidMount(){
        // console.log("child componenet did mount")
        const data=await fetch("https://api.github.com/users/DhruvaPratapSingh");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    render (){
        // const {name,location}=this.props;
        // const {count,count2}=this.state;
        const {name,login,
            avatar_url
            }=this.state.userInfo
        // console.log("child render")
        return (
        <div class="user-card">
            {/* <h2>count:{count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>count ++</button>
            <h2>count2:{count2}</h2> */}
            <h3>name:{name}</h3>
            <h3>location:{login}</h3>
            <img src={avatar_url}/>
        </div>
        );
    }
}
export default UserClass;