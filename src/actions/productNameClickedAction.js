const productNameClickedAction = function(product){
    console.log("I am in action file. Action will be broadcasted/dispatched!");
    console.log(product);
    return(
        {
            type:"ONE_PRODUCT_CLICKED",
            payload:product
        }
    )

}

export default productNameClickedAction