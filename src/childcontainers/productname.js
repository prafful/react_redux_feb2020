import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import productNameClickedAction from '../actions/productNameClickedAction';


class ProductName extends React.Component {
    state = {  }

    renderAllProductsFromProps = function(){
        console.log("Received products from store to props!");
        console.log(this.props.allProducts)
        return this.props.allProducts.map(product =>{
           console.log(product);
           console.log(product.name);
           return(
               <li key={product.id}  onClick={()=>this.props.clickProduct(product) }>
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
    console.log("store received by Product Name Container")
    console.log(appStore);
    return {
        allProducts: appStore.products1
    }
}

function mapActionToPropsAndDispatchItNow(dispatch){
    //console.log(dispatch);
    return bindActionCreators({
        clickProduct: productNameClickedAction
    }, dispatch)


}

 
export default connect(convertStoreToProps, mapActionToPropsAndDispatchItNow)(ProductName);