
let dishDefault = [];

let bought = [];       // arr sản phẩm được Oder

let subtotal = 0;      // tổng tiền thanh toán

let showDetails = 0; // hiển thị form chi tiết sản phẩm

let productDetails = {}; // arr chi tiết sản phẩm

let priceTopping = 0;    // tỏng tiền trong chi tiết sp có thêm topping

let oderSuccess = [];    // dữ liệu oder thành công

let menuActive = 0 ;      // active dòng kẻ xanh nav

let numberOder = 0;      // số lượng sản phẩm được Oder

let showModalLogin = false // bật tắt modal Login

let showModelRegistration = false // bật tắt modal Đăng ký

let dataLogin = [];        // arr các tài khoản người dùng đăng nhập

let loginSuccess = false;   // Đả đăng nhập  / chưa đăng nhập

let delivered = [];         // đơn hàng đã được giao đi

let dataAdminLogin = [];    // arr tài khoản Admin đăng nhập

export function reducerDish(state=dishDefault, action){
    switch(action.type){
        
        case "FETCH_DATA" : {
            return action.payload
        }

        case "SEARCHBOX" : {
            return action.searchbox
        }

        case "FIND_PRICE_START" : {
            return action.stateSeach
        }

        default: {
            return state
        }
    }      
}

export function reducerBought(state=bought, action){
    switch(action.type){
        case "PLUSITEAM" : {

            var index = state.findIndex(function(item, i){
              return item.idDish === action.payload.id
            });
            if(index === -1 ){
                let idNew = state.length + 1
                let dish = {
                    id: idNew,
                    idDish: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    amount:1,
                    size: action.payload.size,
                }
                return [dish, ...state]
            }else {
                state[index].amount ++;
                return [...state]
            }
        }

        case "PLUSMINI" : {
            state[action.index].amount += 1;
            return [...state]
        }

        case "MINUSMINI" : {
            if(state[action.index].amount>1){
                state[action.index].amount -= 1;
                return [...state]
            }else {
                state.splice(action.index, 1)
                return [...state]
            }
        }

        case "DELETEMINI" : {
            state.splice(action.index, 1)
            return [...state]
        }

        case "PLUS_ODER_DETAILS" : {
            var index = state.findIndex(function(item, i){
              return item.idDish === action.payload.idDish && item.size === action.payload.size
            });

            if(index === -1 ){
                let idNew = state.length + 1
                let dish = {
                    id: idNew,
                    idDish: action.payload.idDish,
                    name: action.payload.name,
                    price: action.priceTopping,
                    amount:1,
                
                    size: action.payload.size
                }
                return [dish, ...state]
            }else {
                state[index].amount ++;
                return [...state]
            }
        }
        
        case "LOGOUT" : {
            state = [];
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerSubtotal(state=subtotal, action){
    switch(action.type){
        case "PLUSITEAM" : {
            let a = parseInt(state) + parseInt(action.payload.price);
            return a
        }
        case "PLUSMINI" : {
            let a = parseInt(state);
            let b = parseInt(action.payload.price);
            a += b;
            return a
        }

        case "MINUSMINI" : {
            if(action.payload.amount > -1){
                if(parseInt(state) > 0){
                    let a = parseInt(state);
                    let b = parseInt(action.payload.price);
                    a = a - b;
                    return a
                }
            }
        }

        case "DELETEMINI" : {
            let a = action.payload.amount * action.payload.price;
            state -= a;
            return state
        }
        
        case "PLUS_ODER_DETAILS" : {
            let a = parseInt(state) + parseInt(action.priceTopping);
            return a
        }
        
        case "LOGOUT" : {
            state = 0;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerShowDetails(state=showDetails, action){
    switch(action.type){
        
        case "DETAILS" : {
            state = 1;  // 1 == true
            return state
        }

        case "CLOSEDETAILS" : {
            state = 0;
            return state
        }
        
        case "RESET_SHOW_DETAILS_3" : {
            state = 3;
            return state
        }

        case "SHOW_VIEW_CART" : {
            state = 2;  // 0 == false
            return state
        }
        
        case "RESET_SHOW_DETAILS" : {
            state = 0;
            return state
        }

        case "SHOW_INFORMATION" : {
            state = 4;
            return state
        }

        // case "LOGOUT" : {
        //     state = 0;
        //     return state
        // }
        default: {
            return state
        }
    }      
}

export function reducerProductDetails(state=productDetails, action){
    switch(action.type){
        
        case "DETAILS" : {
            let dishdetails = {
                idDish: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                describe: action.payload.describe,
                image: action.payload.image,
                star : action.payload.star,
                size : action.payload.size,
                amount: 1
            }
            return dishdetails
        }

        case "SETTOPPING" : {
            let sizeOder = '';
            if (action.small) {
                sizeOder = 'nhỏ';
            }if (action.medium) {
                sizeOder = 'vừa';
            }if (action.big) {
                sizeOder = 'lớn';
            }
            state.size = sizeOder;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerPriceTopping(state=priceTopping, action){
    switch(action.type){

        case "SETTOPPING" : {
            state = action.sumBox;
            return [state]
        }

        default: {
            return state
        }
    }      
}

export function reducerOderSuccess(state=oderSuccess, action){
    switch(action.type){
        
        case "FETCH_SUCCESS" : {
            state = action.oderSuccess;
            return state
        }

        case "ODER_SUCCESS" : {
            return [...state, action.payload]
        }
        
        case "DELETE_ODER_SUCCESS" : {
            state.splice(action.index, 1)
            return [...state]
        }

        default: {
            return state
        }
    }      
}

export function reducerMenuActive(state=menuActive, action){
    switch(action.type){
        
        case "ACTIVE_HOME" : {
            state = 0;
            return state
        }
        
        case "ACTIVE_MENU_ODER" : {
            state = 1;
            return state
        }
        
        case "ACTIVE_VIEWCART" : {
            state = 2;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerNumberOder(state=numberOder, action){
    switch(action.type){
        
        case "PLUSITEAM" : {
            state++;
            return state
        }
        
        case "PLUSMINI" : {
            state++;
            return state
        }
        
        case "MINUSMINI" : {
            if (state >=1 ) {
                state--;
            }
            return state
        }
        
        case "DELETEMINI" : {
            let a = action.payload.amount;
            state = state-a;
            return state
        }
        
        case "PLUS_ODER_DETAILS" : {
            state++;
            return state
        }
        
        case "LOGOUT" : {
            state = 0;
            return state
        }
        
        default: {
            return state
        }
    }      
}

export function reducerShowModalLogin(state=showModalLogin, action){
    switch(action.type){
        
        case "SHOW_MODAL" : {
            state = true;
            return state
        }

        case "CLOSE_MODAL" : {
            state = false;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerDataLogin(state=dataLogin, action){
    switch(action.type){
        
        case "FETCH_LOGIN" : {
            state = action.dataLogin
            return state
        }
        
        case "UPDATE_REGISTRATION" : {
            return [...state, action.account]
        }
        
        case "DELETE_USE" : {
            state.splice(action.index, 1)
            return [...state]
        }

        default: {
            return state
        }
    }      
}

export function reducerLoginSuccess(state=loginSuccess, action){
    switch(action.type){
        
        case "LOGIN_SUCCESS" : {
            state = true;
            return state
        }
        
        case "LOGOUT" : {
            state = false;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerShowModelRegistration(state=showModelRegistration, action){
    switch(action.type){
        
        case "SHOW_REGISTRATION" : {
            state = true;
            return state
        }

        case "CLOSE_REGISTRATION" : {
            state = false;
            return state
        }

        default: {
            return state
        }
    }      
}

export function reducerDelivered(state=delivered, action){
    switch(action.type){
        
        case "FETCH_DELIVERED" : {
            state = action.dataDelivered;
            return state
        }
        
        case "UPDATE_DELIVERED" : {
            let data = action.dataDelivered;
            console.log(data)
            return [data, ...state]
        }
        
        case "DELETE_ONE_DELIVERED" : {
            state.splice(action.index, 1)
            return [...state]
        }

        default: {
            return state
        }
    }      
}

export function reducerDataAdminLogin(state=dataAdminLogin, action){
    switch(action.type){
        
        case "FETCH_ADMIN_LOGIN" : {
            state = action.dataAdminLogin;
            return state
        }
        

        default: {
            return state
        }
    }      
}