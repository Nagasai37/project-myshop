import Banner from '../components/banner.jsx';
import CategoryCard from '../components/categoricard';

function Home(){

return(

<>

<Banner/>

<h2 style={{marginTop:"30px"}}>

Categories

</h2>

<CategoryCard title="Electronics"/>

<CategoryCard title="Fashion"/>

<CategoryCard title="Shoes"/>

<CategoryCard title="Furniture"/>

</>

)

}

export default Home;