import React from 'react';
import { connect } from "react-redux"

class ProductDetail extends React.Component {
    state = {}
    render() {
        if (this.props.checkProduct === null) {
            return (
                <div>
                    Will display the details of product. Click on Product Name! ABOVE!!!!
                </div>
            )
        }else {
            return (
                <div>
                    Will display the details of product you click on! ABOVE!!!!
                <br></br>
                    <br></br>
                    Product Id: {this.props.checkProduct.id}
                    <br></br>
                    Product Name: {this.props.checkProduct.name}
                    <br></br>
                    Product Up Vote: {this.props.checkProduct.upvote}
                    <br></br>
                    Product Down Vote: {this.props.checkProduct.downvote}
                    <br></br>
                    Product Description: {this.props.checkProduct.description}
                </div>
            );
        }
    }
}


function convertStoreToProps(store) {
    console.log("store received by Product Detail Container");
    console.log(store);
    return {
        checkProduct: store.clickedProduct
    }


}

export default connect(convertStoreToProps)(ProductDetail);