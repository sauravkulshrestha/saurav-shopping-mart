import React from "react";

class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Saurav Cart</a>
                    <h2 className="navbar-brand">Total Items - {this.props.ProductListLength}</h2>
                </div>
            </nav>

        );
    }
}

export default Navbar;