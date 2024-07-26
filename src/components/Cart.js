import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import {clearCart} from "../utils/cartSlicer"

const Cart = () => {
    const itemList = useSelector((store) => store?.cart?.items);

    const dispatch = useDispatch();

    if(itemList.length === 0){
        return <h1 className="font-bold">Looks like there is no items in your cart.... :(</h1>
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return(
        <div className="mt-3">
            <button className="bg-green-300 rounded m-2 ml-4 p-2 hover:bg-green-400" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
        {itemList.map((item) => {
            const {name, price, description, imageId, defaultPrice} = item;
            return(
                <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img src={CDN_URL + imageId} className="h-48 w-60 rounded-md"/>
                <span className="font-bold">Name: {name}</span><br/>
                <span className="font-bold">Price: {price ? (price/100) : (defaultPrice/100)} $</span><br/>
                <button className="bg-green-300 rounded m-2 p-2">Remove</button>
            </div>
            )
        })}
        </div>
       
        </div>
    )
}

export default Cart;