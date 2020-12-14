export function onPlusItem(dish){
    return {
        type: "PLUSITEAM",
        payload: dish
    }
}

export function onPlusMini(bought,index){
    return {
        type: "PLUSMINI",
        payload: bought,
        index
    }
}

export function onMinusMini(bought,index){
    return {
        type: "MINUSMINI",
        payload: bought,
        index
    }
}

export function onDeleteMini(bought,index){
    return {
        type: "DELETEMINI",
        payload: bought,
        index
    }
}

export function onSearchbox(searchbox){
    return {
        type: "SEARCHBOX",
        payload: searchbox
    }
}

export function onDetails(dish){
    return {
        type: "DETAILS",
        payload: dish
    }
}

export function onCloseDetails(){
    return {
        type: "CLOSEDETAILS"
    }
}


export function onResetShowDetails(){
    return {
        type: "RESET_SHOW_DETAILS"
    }
}

// export function onChangeDetails(){
//     return {
//         type: "CHANGE_DETAILS"
//     }
// }

export function onTopping(sumBox, small, medium, big){
    return {
        type: "SETTOPPING",
        sumBox,
        small, medium, big
    }
}

export function onPlusOderDetails(productDetails, priceTopping){
    return {
        type: "PLUS_ODER_DETAILS",
        payload: productDetails,
        priceTopping
    }
}

export function onShowViewCart(){
    return {
        type: "SHOW_VIEW_CART"
    }
}

export function onCloseViewCart(){
    return {
        type: "CLOSEDETAILS"
    }
}

export function onOderSuccess(success){
    return {
        type: "ODER_SUCCESS",
        payload: success
    }
}

export function onFindPrice(price1,price2,price3){
    return {
        type: "FIND_PRICE",
        price1: price1,
        price2: price2,
        price3: price3
    }
}

export function onFindPriceStart(price1,price2,price3,start1,start2,start3,start4,start5){
    return {
        type: "FIND_PRICE_START",
        price1,price2,price3,start1,start2,start3,start4,start5
    }
}

export function onActiveHome(){
    return {
        type: "ACTIVE_HOME"
    }
}

export function onActiveMenuoder(){
    return {
        type: "ACTIVE_MENU_ODER"
    }
}

export function onActiveViewcart(){
    return {
        type: "ACTIVE_VIEWCART"
    }
}