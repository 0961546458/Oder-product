
let dishDefault = [
    { 
        "id": 1, 
        "name" : "Bạc xỉu",
        "price": 35000, 
        "describe":"Theo chân những người gốc Hoa đến định cư tại Sài Gòn, Bạc sỉu là cách gọi tắt của “Bạc tẩy xỉu phé” trong tiếng Quảng Đông, chính là: Ly sữa trắng kèm một chút cà phê.",
        "image": "./imge/bac_siu.jpg",
        "star" : 5,
        "size" : "nhỏ"
    },
    { 
        "id": 2, 
        "name" : "Espresso-nóng",
        "price": 45000, 
        "describe":"Một phiên bản “upgrade” từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến giọt cuối cùng.",
        "image": "./imge/espressonong.jpg",
        "star" : 4,
        "size" : "nhỏ"
    },
    { 
        "id": 3, 
        "name" : "Chanh sả dá xay",
        "price": 20000, 
        "describe":"Một phiên bản “upgrade” từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến giọt cuối cùng.",
        "image": "./imge/chanh_sa_da_xay.jpg",
        "star" : 2,
        "size" : "nhỏ"
    },
    { 
        "id": 4, 
        "name" : "Macca",
        "price": 10000, 
        "describe":"Một phiên bản “upgrade” từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến giọt cuối cùng.",
        "image": "./imge/macca.jpg",
        "star" : 1,
        "size" : "nhỏ"
    }
]

let bought = [];       // arr sản phẩm được Oder

let subtotal = 0;      // tổng tiền thanh toán

let productNumber = 0; // số lượng sản phẩm

let searchbox = '';    // tìm kiếm

let showDetails = 0; // hiển thị form chi tiết sản phẩm

let productDetails = {}; // arr chi tiết sản phẩm

let priceTopping = 0;    // tỏng tiền trong chi tiết sp có thêm topping

let oderSuccess = {};    // oder thành công

let menuActive = 0 ;      // active dòng kẻ xanh nav

export function reducerDish(state=dishDefault, action){
    switch(action.type){

        case "SEARCHBOX" : {
            if(action.payload){
                let stateSeach = dishDefault.filter((task) => {
                    return task.name.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1;
                });
                return [...stateSeach]
            }

            if(action.payload === ''){
                return dishDefault
            }
        }

        case "FIND_PRICE_START" : {

            switch (true) {
                case action.price1:{
                    var stateSeach = dishDefault.filter((task) => {
                        return task.price < 15000;
                    });
                    return stateSeach
                }
                case action.price2:{
                    var stateSeach = dishDefault.filter((task) => {
                        return task.price > 15000 && task.price <= 30000;
                    });
                    return stateSeach
                }
                case action.price3:{
                    var stateSeach = dishDefault.filter((task) => {
                        return task.price > 30000;
                    });
                    return stateSeach
                }
                default:
                    // statements_def
                    break;
            }


            console.log(action.price1,action.price2,action.price3)

            // if(action.price1 === true){
            //     var stateSeach1 = dishDefault.filter((task) => {
            //         return task.price < 15000;
            //     });
            //     return [...stateSeach1]
            // }
            // if(action.price2 === true){
            //     var stateSeach2 = dishDefault.filter((task) => {
            //         return task.price > 15000 && task.price <= 30000;
            //     });
            //     return [...stateSeach2]
            // }
            // if(action.price3 === true){
            //     var stateSeach3 = dishDefault.filter((task) => {
            //         return task.price > 30000;
            //     });
            //     return [...stateSeach3]
            // }
                
            
            // if(action.price1 == true || action.price2 == true || action.price3 == true){
            //     return [...stateSeach]
            // }
            // if(action.price1 == false && action.price2 == false && action.price3 == false){
            //     return dishDefault
            // }

            if(action.start1 === true){
                var stateStart = dishDefault.filter((task) => {
                    return task.star === 1;
                });
                return [...stateStart]
            }
            if(action.start2 === true){
                var stateStart = dishDefault.filter((task) => {
                    return task.star === 2;
                });
                return [...stateStart]
            }
            if(action.start3 === true){
                var stateStart = dishDefault.filter((task) => {
                    return task.star === 3;
                });
                return [...stateStart]
            }
            if(action.start4 === true){
                var stateStart = dishDefault.filter((task) => {
                    return task.star === 4;
                });
                return [...stateStart]
            }
            if(action.start5 === true){
                var stateStart = dishDefault.filter((task) => {
                    return task.star === 5;
                });
                return [...stateStart]
            }

            // if(action.start1 == true || action.start2 == true || action.start3 == true || action.start4 == true || action.start5 == true ){
            //     return [...stateStart]
            // }
            if(action.start1 === false && 
            action.start2 === false && 
            action.start3 === false && 
            action.start4 === false && 
            action.start5 === false && 
            action.price1 === false && 
            action.price2 === false && 
            action.price3 === false) {
                return dishDefault
            }
        }
        break;

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
            if(state[action.index].amount>0){
                state[action.index].amount -= 1;
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
        
        case "SHOW_VIEW_CART" : {
            state = 2;  // 0 == false
            return state
        }
        
        case "RESET_SHOW_DETAILS" : {
            state = 0;
            return state
        }
        
        // case "CLOSE_VIEW_CART" : {
        //     state = 0;  // 0 == false
        //     return state
        // }
        
        // case "CHANGE_DETAILS" : {
        //     state = 3;  // 0 == false
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
        
        // case "DETAILS" : {
        //     state = action.payload.price;
        //     return state
        // }

        case "SETTOPPING" : {
            // console.log(state);
            // console.log(action.small,action.medium,action.big);
            // var stateDefault = state;
            // if(action.small == true) {
            //     let stateNew1 = stateDefault;
            //     return stateNew1
            // }
            // if(action.medium == true) {
            //     let stateNew2 = stateDefault + 6000;
            //     stateDefault = stateDefault - 60000;
            //     return stateNew2
            // }
            // if(action.big == true) {
            //     let stateNew3 = stateDefault + 13000;
            //     stateDefault = stateDefault - 13000;
            //     return stateNew3
            // }
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
        
        case "ODER_SUCCESS" : {
            state = action.payload;
            return state
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