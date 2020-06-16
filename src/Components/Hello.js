import React from "react";

const Hello = (props) =>{
    return(
      <div className="App">
        <h1 style={styles.yellow}>{props.first}</h1>
        <h1 style={styles.blue}>{props.second}</h1>
        <h1 style={styles.white}>{props.third}</h1>
        
      </div>
    );
  }

  const styles = {
    hello: {
      color: "green",
      backgroundColor: "red",
    },
    yellow: {
        color: "black",
        backgroundColor: "yellow",
        width: "20vw",
        margin: "auto"
    },
    blue: {
        color: "black",
        backgroundColor: "blue",
        width: "20vw",
        margin: "auto"
    },
    white:{
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
        width: "20vw",
        margin: "auto"
    }
  };

  
export default Hello;