import { useDispatch } from "react-redux";
import {  filterCategory } from "../../redux/thesSlice";


const Filter = () => {

    
    const dispatch = useDispatch();


    return ( 
        <div className='column'>
            <button className='change noir' onClick={ ()=> dispatch(filterCategory("tout")) } > Tout </button> 
            <button className='change vert' onClick={ ()=> dispatch(filterCategory("vert")) }  > Thés verts </button>
            <button className='change noir' onClick={ ()=> dispatch(filterCategory("noir")) } > Thés noirs </button>
            <button className='change noel' onClick={ ()=> dispatch(filterCategory("noel")) } > Thés de Noël </button>
            <button className='change rouge' onClick={ ()=> dispatch(filterCategory("rouge")) } > Rooibos - Thés Rouges </button>
            <button className='change blanc' onClick={ ()=> dispatch(filterCategory("blanc")) } > Thés Blancs </button> 
            <button className='change detox' onClick={ ()=> dispatch(filterCategory("detox")) } > Bien-être - Détox </button> 
            
        </div>
    )
}
export default Filter;