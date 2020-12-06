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

export function onTopping(topping){
    return {
        type: "SETTOPPING",
        payload: topping
    }
}