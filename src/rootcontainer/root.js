import React from 'react';
import ProductName from '../childcontainers/productname';
import ProductDetail from '../childcontainers/productdetail';

class ParentComponent extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <h3>I aspire to be redux app!</h3>
                Product Names:
                <ProductName></ProductName>
                <hr></hr>
                Product Details:
                <br></br>
                <br></br>
                <ProductDetail></ProductDetail>
            </div>
          );
    }
}
 
export default ParentComponent;