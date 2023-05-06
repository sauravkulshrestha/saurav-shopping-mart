import React from "react";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            productPrice: 0,
        };
    }
    render() {
        return (
            <form
                className="row mb-5 ms-5" 
                style={{marginRight: "0px"}}
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addItem(this.state.Name, Number(this.state.productPrice));
                }}
            >
                
                <div className="mb-3 col-4">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        aria-describedby="name"
                        name="productName"
                        onChange={(e) => {
                            this.setState({ Name: e.currentTarget.value });
                        }}
                        value={this.state.Name}
                    />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="Price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="Price"
                        onChange={(e) => {
                            this.setState({ productPrice: e.currentTarget.value });
                        }}
                        value={this.state.Price}
                    />
                </div>
                <button type="submit" className="btn btn-primary col-2" style={{height : "40px" , marginTop : "30px" }}>
                    Add Item
                </button>
            </form>
        );
    }
}

export default AddItem;