import { useDispatch } from "react-redux";
import {  filterCategory } from "../../redux/thesSlice";


const Filter = () => {

    
    const dispatch = useDispatch();


    return ( 
        <div className='column'>
            <button tabIndex="0" className='change noir' onClick={ ()=> dispatch(filterCategory("tout")) } > Tout </button> 
            <button tabIndex="1" className='change vert' onClick={ ()=> dispatch(filterCategory("vert")) }  > Thés verts </button>
            <button tabIndex="2" className='change noir' onClick={ ()=> dispatch(filterCategory("noir")) } > Thés noirs </button>
            <button tabIndex="3" className='change noel' onClick={ ()=> dispatch(filterCategory("noel")) } > Thés de Noël </button>
            <button tabIndex="4" className='change rouge' onClick={ ()=> dispatch(filterCategory("rouge")) } > Rooibos - Thés Rouges </button>
            <button tabIndex="5" className='change blanc' onClick={ ()=> dispatch(filterCategory("blanc")) } > Thés Blancs </button> 
            <button tabIndex="6" className='change detox' onClick={ ()=> dispatch(filterCategory("detox")) } > Bien-être - Détox </button> 
        </div>
    )
}
export default Filter;
