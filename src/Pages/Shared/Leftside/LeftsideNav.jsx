import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-4">
            <h3 className="4xl">All Categories</h3>
            {
                categories.map(categori => <Link
                    className="block ml-4 text-xl font-semibold"
                    key={categori.id}
                    to={`/categori/${categori.id}`}>
                       
                    {categori.name}</Link>)
            }
        </div>
    );
};

export default LeftsideNav;