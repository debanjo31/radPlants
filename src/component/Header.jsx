import { FaBars } from 'react-icons/fa';
import {useRecoilState} from 'recoil';
import { navAtom } from "../atom/navAtom.js";

function Header(props) {
    
    const [status, setStatus] = useRecoilState(navAtom);
  const checkStatus = (event) => {
     alert(status)
  };

  return (
    <div className="w-5/6 mx-auto">
        <div className="flex justify-between">
            <div className="font-bold text-2xl font-mainFont">Rad Plants</div>
            <div className="hidden md:flex gap-8  ">
                <a href="#">Home</a>
                <a href="#">Catalogue</a>
                <a href="#">Contact</a>
            </div>
            <div className="hidden md:flex gap-4 ">
                <p >Search</p>
                <p>Cart(0)</p>
            </div>
            <div className="md:hidden">
                <FaBars onClick={checkStatus} className="font-bold text-xl font-mainFont mt-1" />
            </div>
        </div>
    </div>
    );
}


export default Header;