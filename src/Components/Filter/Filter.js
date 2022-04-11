import { useDispatch } from "react-redux";
import {  filterCategory } from "../../redux/thesSlice";


const Filter = () => {

    
    const dispatch = useDispatch();


    return ( 
        <div className='column'>
            <button tabindex="0" className='change noir' onClick={ ()=> dispatch(filterCategory("tout")) } > Tout </button> 
            <button tabindex="1" className='change vert' onClick={ ()=> dispatch(filterCategory("vert")) }  > Thés verts </button>
            <button tabindex="2" tabindex="0" className='change noir' onClick={ ()=> dispatch(filterCategory("noir")) } > Thés noirs </button>
            <button tabindex="3" className='change noel' onClick={ ()=> dispatch(filterCategory("noel")) } > Thés de Noël </button>
            <button tabindex="4" className='change rouge' onClick={ ()=> dispatch(filterCategory("rouge")) } > Rooibos - Thés Rouges </button>
            <button tabindex="5" className='change blanc' onClick={ ()=> dispatch(filterCategory("blanc")) } > Thés Blancs </button> 
            <button tabindex="6" className='change detox' onClick={ ()=> dispatch(filterCategory("detox")) } > Bien-être - Détox </button> 
            
        </div>
    )
}
export default Filter;
