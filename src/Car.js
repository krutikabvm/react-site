import React from "react";
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            year: 2013,
            color: "white",
            model: "Mustang"
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {color: props.color };
    }

    shouldComponentUpdate() {
        return true;
    }
    changeYear =()=>{
        this.setState({year: 2001});
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}<br/>
                    {this.state.model}<br/>
                    from {this.state.year}.
                </p>

                <button
                    type="button"
                    onClick={this.changeYear}
                >Change color
                </button>
            </div>
        );
    }
}

export default Car
