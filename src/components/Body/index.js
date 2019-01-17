import React, { Component } from "react";
import "./style.css"

class Body extends Component {
    state = {
        count: 0
      };

      handleClick = () => {
        this.setState(({ count }) => ({
          count: count + 1
        }));
      };

      handleReset = () => {
        alert("You win!")
        this.setState(({ count }) => ({
          count: count - count
        }));
      };

    render() {
        return(
        <div>
            <h2 className="score">Score: {this.state.count}</h2>
            <button className="reset" onClick={this.handleReset}>Reset Score</button>
            <div className="images">
                <img className="pokeImage" onClick={this.handleClick} src={require("./images/pikachu.png")} height="200px" width="200px" alt="An adorable little Pikachu"></img>
                <img className="pokeImage" onClick={this.handleClick} src={require("./images/charmander.png")} height="200px" width="200px" alt="An adorable little Charmander"></img>  
                <img className="pokeImage" onClick={this.handleClick} src={require("./images/squirtle.jpg")} height="200px" width="200px" alt="An adorable little Squirtle"></img>
                <img className="pokeImage" onClick={this.handleClick} src={require("./images/bulbasaur.jpg")} height="200px" width="200px" alt="An adorable little Bulbasaur"></img>
                <img className="pokeImage" onClick={this.handleClick} src={require("./images/eevee.jpg")} height="200px" width="200px" alt="An adorable little Eevee"></img>
            </div>
        </div>
        )
    }
}
  
export default Body;