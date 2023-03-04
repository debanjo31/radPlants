function Header(props) {

  return (
    <div className="w-5/6 mx-auto">
        <div className="flex justify-between">
            <div className="font-bold text-xl font-mainFont">Rad Plants</div>
            <div className="hidden md:flex gap-8  ">
                <a href="#">Home</a>
                <a href="#">Catalogue</a>
                <a href="#">Contact</a>
            </div>
            <div className="hidden md:flex gap-4 ">
                <p>Search</p>
                <p>Cart(0)</p>
            </div>

        </div>
    </div>
    );
}


export default Header;