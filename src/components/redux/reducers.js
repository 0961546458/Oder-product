
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
        "name" : "Cà Phê Đá Xay - Lạnh",
        "price": 45000, 
        "describe":"Một phiên bản “upgrade” từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến giọt cuối cùng.",
        "image": "./imge/espressonong.jpg",
        "star" : 4,
        "size" : "vừa"
    }
]

let bought = [];       // arr sản phẩm được Oder

let subtotal = 0;      // tổng tiền thanh toán

let productNumber = 0; // số lượng sản phẩm

let searchbox = '';    // tìm kiếm

let showDetails = false; // hiển thị form chi tiết sản phẩm

let productDetails = {}; // arr chi tiết sản phẩm

let priceTopping = 0;    // tỏng tiền trong chi tiết sp có thêm topping

export function reducerDish(state=dishDefault, action){
    switch(action.type){

        case "SEARCHBOX" : {
            if(action.payload){
                let stateSeach = dishDefault.filter((task) => {
                    return task.name.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1;
                });
                return [...stateSeach]
            }
            if(action.payload == ''){
                return dishDefault
            }
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
            if(index == -1 ){
                let idNew = state.length + 1
                let dish = {
                    id: idNew,
                    idDish: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    amount:1
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

        default: {
            return state
        }
    }      
}

export function reducerSubtotal(state=subtotal, action){
    switch(action.type){
        case "PLUSITEAM" : {
            let a = parseInt(state) + parseInt(action.payload.price);
            return [a]
        }
        case "PLUSMINI" : {
            let a = parseInt(state);
            let b = parseInt(action.payload.price);
            a += b;
            return [a]
        }

        case "MINUSMINI" : {
            if(action.payload.amount > -1){
                if(parseInt(state) > 0){
                    let a = parseInt(state);
                    let b = parseInt(action.payload.price);
                    a = a - b;
                    return [a]
                }
            }
        }

        case "DELETEMINI" : {
            
            let a = action.payload.amount * action.payload.price;
            state -= a;
            return [state]
        }

        default: {
            return state
        }
    }      
}

export function reducerShowDetails(state=showDetails, action){
    switch(action.type){
        
        case "DETAILS" : {
            state = true;
            return state
        }

        case "CLOSEDETAILS" : {
            state = false;
            return state
        }

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
                size : action.payload.size
            }
            return dishdetails
        }

        default: {
            return state
        }
    }      
}

export function reducerPriceTopping(state=priceTopping, action){
    switch(action.type){
        
        case "DETAILS" : {
            state = action.payload.price;
            return state
        }

        case "SETTOPPING" : {
            console.log(state)
            // state = parseInt(state) + action.payload;
            return state
        }

        default: {
            return state
        }
    }      
}