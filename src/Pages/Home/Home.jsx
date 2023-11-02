import { useLoaderData } from "react-router-dom";
import BrakingNews from "../Shared/Header/BrakingNews";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/Leftside/LeftsideNav";
import Navbar from "../Shared/NavBar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCards from "./NewsCards";


const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4">
                <div className="border text-2xl"><LeftsideNav></LeftsideNav></div>

                <div className="col-span-2 text-2xl">
                    {
                        news.map(Anew => <NewsCards
                            key={Anew._id}
                            news={Anew}
                        ></NewsCards>)
                    }
                </div>
                
                <div className=" text-2xl"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;