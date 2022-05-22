import AllCategories from '../Filter/AllCategories';
import Welcome from '../Welcome';
import Thes from './Thes';

const Home = ()=> {


    return (
        <div className="App">
           <Welcome  />
          <br/>
    
        <div className='App'>
        <section id ="down"></section>
            <p className='back'>Home /</p>
            
            <h3 className='tete'>Les Produits</h3>
          </div>
        <AllCategories />
        
        <Thes />
            
        </div>
    )
}

export default Home;
