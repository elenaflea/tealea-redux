import { dataThes } from "../../data/dataThes";
import The from "./The";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/thesSlice";

const Thes =()=> {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className=' products'  >
            { dataThes
            .filter(the => {
                if (selectedCategory === 'tout') return true;
                return selectedCategory === the.searchTerm;
            }
                )
            .map(the => <The the={ the } key ={ the.id }/>) }
        </div>
    )
}
export default Thes;