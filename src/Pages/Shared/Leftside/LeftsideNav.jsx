import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import png1 from '../../../../src/assets/1.png'
import png2 from '../../../../src/assets/2.png'
import png3 from '../../../../src/assets/3.png'


const LeftsideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-4 ">
            <h3 className="4xl">All Categories</h3>
            {
                categories.map(categori => <Link
                    className="block ml-4 text-xl font-semibold"
                    key={categori.id}
                    to={`/categori/${categori.id}`}>

                    {categori.name}</Link>)
            }
            <div>
                <div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={png1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-xl">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup

                            </h2>
                            

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={png2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-xl">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup

                            </h2>
                            

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={png3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-xl">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup

                            </h2>
                            

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default LeftsideNav;