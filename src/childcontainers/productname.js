import React from 'react';
import { connect } from "react-redux";


class ProductName extends React.Component {
    state = {  }

    renderAllProductsFromProps = function(){
        console.log("Received products from store to props!");
        console.log(this.props.allProducts)
        return this.props.allProducts.map(product =>{
           console.log(product);
           console.log(product.name);
           return(
               <li key={product.id}>
                    {product.name}
               </li>
           )
        })

    }


    render() { 
        return ( 
            <ol>
                {this.renderAllProductsFromProps()}
            </ol>
         );
    }
}

function convertStoreToProps(appStore){
    console.log(appStore);
    return {
        allProducts: appStore.products1
    }
}


 
export default connect(convertStoreToProps)(ProductName);