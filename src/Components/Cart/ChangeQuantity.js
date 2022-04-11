
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const ChangeQuantity =( { quantity, setQuantity, the })=> {

    const dispatch = useDispatch();

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <=1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className='addLine'>

                <div className='btnQuantity'  >
                  <button className='btnMore' onClick={removeQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </button>

                  <span className="spanQuantity"> { quantity } </span>

                  <button className='btnMore' onClick={addQuantity}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  </button>
                </div>

                  <button className='btnMore' onClick={ ()=> {dispatch(addItemToCart({the, quantity}))} }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                      <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                  </button>

                </div>
    )
}

export default ChangeQuantity;