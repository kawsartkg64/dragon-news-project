import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Breaking News</button>
            <Marquee>
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;