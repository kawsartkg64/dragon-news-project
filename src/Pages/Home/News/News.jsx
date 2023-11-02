import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/NavBar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";


const News = () => {
    const news = useLoaderData();
    const { id } = useParams();

    const newss = news.find(newss => newss._id == id)


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 ">
                <div className=" col-span-3 mr-8">
                    <h3>Dragon News</h3>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src={newss.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{newss.title}</h2>
                            <p>{newss.details}</p>

                            <Link to='/'><button className="btn btn-secondary">All news in this category</button></Link>
                            
                        </div>
                    </div>



                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;