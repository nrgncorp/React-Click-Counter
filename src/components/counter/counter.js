import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    numCounter = () => {
        this.setState({ count: this.state.count + 1});
    }

    render() {
        return (
          <div className="counter">
            <p>
                Sayıyı arttırmak için butona basınız.
            </p>
            <div className="count-show">
                <p className="clickCount">{this.state.count}</p>
            </div>
            <button onClick={this.numCounter}>Sayıyı Arttır</button>
          </div>
        );
    }
}

export default Counter;