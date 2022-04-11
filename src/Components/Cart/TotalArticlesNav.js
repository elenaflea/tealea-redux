import { useSelector } from "react-redux";
import { getTotalArticles } from "../../redux/cartSlice";
// import CartItem from "./CartItem";

const TotalArticlesNav = () => {

 
      const totalArticles = useSelector(getTotalArticles);

    return ( 
        <div >
            
            <span className='spanQuantityCart'> { totalArticles }</span>

        </div>
        
    )
}
export default TotalArticlesNav;