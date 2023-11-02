import { FaFacebook, FaInstagram, FaTwitter,FaGithub, FaGoogle} from "react-icons/fa";
import qZone1 from '../../../../src/assets/qZone1.png'
import qZone2 from '../../../../src/assets/qZone2.png'
import qZone3 from '../../../../src/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
                <div className="mb-10">
                    <h2 className='text-xl  font-bold mb-1'>Login With</h2>
                    <button className="btn btn-outline w-full mb-2"><FaGoogle></FaGoogle>Login with Google</button>
                    <button className="btn btn-outline w-full mb-2"><FaGithub></FaGithub>Login with Github</button>
                </div>
                <div className="mb-10">
                    <h2 className='text-xl  font-bold mb-1'>Find Us On</h2>
                    <a className="flex items-center p-2 border rounded-t-lg" href=""><FaFacebook className="mr-2"></FaFacebook>Facebook</a>
                    <a className="flex p-2 items-center border-x" href=""><FaTwitter className="mr-2"></FaTwitter>Twitter</a>
                    <a className="flex p-2 items-center border rounded-b-lg" href=""><FaInstagram className="mr-2"></FaInstagram>Instagram</a>
                </div>
                {/* Q-Zone */}
                <div className="mb-10">
                    <h2 className='text-xl  font-bold mb-1'>Q-Zone</h2>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
                <div className="p-10 bg-[url('https://i.ibb.co/YNhBCxM/bg1.png')]">
                <h2 className="text-white text-3xl font-bold mb-4 text-center">Create an Amazing Newspaper</h2>
                <p className="text-white text-base text-center mb-6">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn btn-secondary ml-10">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;