import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/NavBar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";


const News = () => {
 const Newss = useLoaderData();
    const {id,thumbnail_url} = useParams();
    const idInt = parseInt(id)
    const news = Newss.find(news => news.id === idInt)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4">
                <div className=" col-span-3">
                    <h3>The news Details</h3>
                    <p>{id}</p>
                    <img src={thumbnail_url} alt="" />
                   
                    
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;