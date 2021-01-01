import axios from 'axios';


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

// ------------------chức năng search -------------

export function onSearchbox(searchbox){
    return (dispatch)=>{
        axios.get('http://localhost:3000/dishDefault')
        .then((response) => {
            let dish = response.data;
            let stateSeach;

            if(searchbox){
                stateSeach = dish.filter((task) => {
                    return task.name.toUpperCase().indexOf(searchbox.toUpperCase()) !== -1;
                });
            }

            if(searchbox === ''){
                stateSeach = dish;
            }

            dispatch(onSearchboxSu(stateSeach))
        }).catch((err)=>{
            
        });
    }
}
export function onSearchboxSu(searchbox){
    return {
        type: "SEARCHBOX",
        searchbox
    }
}
// ------------------------------------------------

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

export function onResetShowDetails3(){
    return {
        type: "RESET_SHOW_DETAILS_3"
    }
}

export function onShowOptions(){
    return {
        type: "RESET_SHOW_DETAILS_3"
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

//------------------------Lấy data oderSuccess ---------------
export function onfetchSuccess(){
    return (dispatch) =>{
        axios.get(`http://localhost:3000/oderSuccess`)
        .then((response) => {
            dispatch(onfetchSuccessSu(response.data))
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}

export function onfetchSuccessSu(oderSuccess){
    return {
        type: "FETCH_SUCCESS",
        oderSuccess
    }
}
//đẵ đặt hàng thành công

export function onOderSuccess(success){
    return (dispatch) =>{
        axios.post(`http://localhost:3000/oderSuccess`, success)
        .then((response) => {
            dispatch(onOderSuccessSu(success))
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}

export function onOderSuccessSu(success){
    return {
        type: "ODER_SUCCESS",
        payload: success
    }
}
//----------------------------------------------------

export function onFindPrice(price1,price2,price3){
    return {
        type: "FIND_PRICE",
        price1: price1,
        price2: price2,
        price3: price3
    }
}

// -----------------chức năng Filter----------------

export function onFindPriceStart(price1,price2,price3,start1,start2,start3,start4,start5){
    return (dispatch)=>{
        axios.get('http://localhost:3000/dishDefault')
        .then((response) => {
            let dish = response.data;
            let stateSeach;
            if(price1 === true){
                stateSeach = dish.filter((task) => {
                    return task.price < 15000;
                });
            }
            if(price2 === true){
                stateSeach = dish.filter((task) => {
                    return task.price > 15000 && task.price <= 30000;
                });
            }
            if(price3 === true){
                stateSeach = dish.filter((task) => {
                    return task.price > 30000;
                });
            }
            if(start1 === true){
                stateSeach = dish.filter((task) => {
                    return task.star === 1;
                });
            }
            if(start2 === true){
                stateSeach = dish.filter((task) => {
                    return task.star === 2;
                });
            }
            if(start3 === true){
                stateSeach = dish.filter((task) => {
                    return task.star === 3;
                });
            }
            if(start4 === true){
                stateSeach = dish.filter((task) => {
                    return task.star === 4;
                });
            }
            if(start5 === true){
                stateSeach = dish.filter((task) => {
                    return task.star === 5;
                });
            }

            // if(action.start1 == true || action.start2 == true || action.start3 == true || action.start4 == true || action.start5 == true ){
            //     return [...stateStart]
            // }
            if(start1 === false && 
            start2 === false && 
            start3 === false && 
            start4 === false && 
            start5 === false && 
            price1 === false && 
            price2 === false && 
            price3 === false) {
                stateSeach = dish
            }

            dispatch(onFindPriceStartSu(stateSeach))
        }).catch((err)=>{
            
        });
    }
}
export function onFindPriceStartSu(stateSeach){
    return {
        type: "FIND_PRICE_START",
        stateSeach
    }
}

// ---------------------------------------------------

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


// ----------------fetchData----------------

export function onfetchData(){
    return (dispatch)=>{
        axios.get('http://localhost:3000/dishDefault')
        .then((response) => {
            dispatch(onfetchDataSu(response.data))
        }).catch((err)=>{
            
        });
    }
}

export function onfetchDataSu(dish){
    return {
        type: "FETCH_DATA",
        payload: dish
    }
}
// ---------------------------------------------


export function onShowLogin(){
    return {
        type: "SHOW_MODAL"
    }
}

export function onCloseModal(){
    return {
        type: "CLOSE_MODAL"
    }
}

// ----------------fetchData----------------

export function onfetchLogin(){
    return (dispatch)=>{
        axios.get('http://localhost:3000/users')
        .then((response) => {
            dispatch(onfetchLoginSu(response.data))
        }).catch((err)=>{
            
        });
    }
}

export function onfetchLoginSu(dataLogin){
    return {
        type: "FETCH_LOGIN",
        dataLogin
    }
}

// -------------------------------------------


export function onLoginSuccess(){
    return {
        type: "LOGIN_SUCCESS"
    }
}

export function onShowRegistration(){
    return {
        type: "SHOW_REGISTRATION"
    }
}

export function onCloseRegistration(){
    return {
        type: "CLOSE_REGISTRATION"
    }
}

export function onLogout(){
    return {
        type: "LOGOUT"
    }
}

// ----------------Đăng ký----------------

export function onSendRegistration(account){
    return (dispatch)=>{
        axios.post('http://localhost:3000/users', account)
        .then((response) => {
            alert("Đăng ký thành công");
            dispatch(onSendRegistrationSu(account))
        }).catch((err)=>{
            
        });
    }
}
export function onSendRegistrationSu(account){
    return {
        type: "UPDATE_REGISTRATION",
        account
    }
}
// -----------------------------------------------

export function onShowInformation(){
    return {
        type: "SHOW_INFORMATION"
    }
}

// ------------------fetch Delivered -----------------

export function onfetchDelivered(){
    return (dispatch)=>{
        axios.get('http://localhost:3000/delivered')
        .then((response) => {
            dispatch(onfetchDeliveredSu(response.data))
        }).catch((err)=>{
            
        });
    }
}

export function onfetchDeliveredSu(dataDelivered){
    return {
        type: "FETCH_DELIVERED",
        dataDelivered
    }
}

// ----------------------thêm dữ liệu vào Delivered (giao hàng thành công)-------------------------

export function onDelivered(dataDelivered, id, index){
    return (dispatch)=>{
        axios.post('http://localhost:3000/delivered', dataDelivered)
        .then((response) => {
            dispatch(onDeliveredSu(dataDelivered))
        }).catch((err)=>{
        });

        axios.delete(`http://localhost:3000/oderSuccess/${id}`)
        .then((response) => {
            dispatch(deleteOderSuccess(index))
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}
export function onDeliveredSu(dataDelivered){
    return {
        type: "UPDATE_DELIVERED",
        dataDelivered
    }
}
export function deleteOderSuccess(index){
    return {
        type: "DELETE_ODER_SUCCESS",
        index
    }
}

// -----------------------Xóa 1 Delivered------------------------

export function onDeleteDelivered(id, index){
    return (dispatch)=>{
        axios.delete(`http://localhost:3000/delivered/${id}`)
        .then((response) => {
            dispatch(onDeleteDeliveredSu(index))
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}
export function onDeleteDeliveredSu(index){
    return {
        type: "DELETE_ONE_DELIVERED",
        index
    }
}

// -----------------------Xóa tất cả Delivered------------------------

export function onDeleteAll(){
    return (dispatch)=>{
        axios.delete(`http://localhost:3000/delivered/`)
        .then((response) => {
            // dispatch(onDeleteDeliveredSu())
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}

// ------------------------------Xóa tài khản người dùng-----------------------------

export function onDeleteUser(id, index){
    return (dispatch)=>{
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((response) => {
            dispatch(onDeleteUserSu(index))
        }).catch((err)=>{
            // dispatch(fetchDataErr());
        });
    }
}
export function onDeleteUserSu(index){
    return {
        type: "DELETE_USE",
        index
    }
}

// ----------------------------fetchData Login Admin---------------------------

export function onFetchAdminLogin(){
    return (dispatch)=>{
        axios.get('http://localhost:3000/useAdmin')
        .then((response) => {
            dispatch(onFetchAdminLoginSu(response.data))
        }).catch((err)=>{
            
        });
    }
}

export function onFetchAdminLoginSu(dataAdminLogin){
    return {
        type: "FETCH_ADMIN_LOGIN",
        dataAdminLogin
    }
}
