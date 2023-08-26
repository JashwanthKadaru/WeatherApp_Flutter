import { useOutletContext } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import { FcAssistant } from 'react-icons/fc' 
import './../css/Home.css'
import ProductCard from "../components/ProductCard";
const Home = () => {
    const {searchText, setSearchText, productList, onSearch, onClickProduct} = useOutletContext();
    return (
        <div className="home">
            <div className="search-box">
                <input type="search" placeholder="type search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <BiSearch className="search-icon"/>
            </div>

            <div className="tags-div">
                    <button> All </button>
                    <button> Shoes </button>
                    <button> Clothes </button>
            </div>

            <span className='separate'></span>

            <div className="product-section-display">
                <div className="grid-layout">
                    {
                        productList.map((item) => {
                            return ( 
                                <ProductCard item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;