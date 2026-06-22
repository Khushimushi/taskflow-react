import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="flex justify-between items-center
                        px-8 py-4 shadow bg-white"
        >

            <Link to="/" className="text-xl font-bold">TaskFlow</Link>

            <div className="flex gap-6">
                <Link to="/" className=" hover:text-blue-600 transition-colors duration-200">
                   Home
                </Link>
                <Link to="/dashboard" className=" hover:text-blue-600 transition">
                   Dashboard 
                </Link>
                <Link to="/login" className=" hover:text-blue-600 transition"> 
                   Login
                </Link>
                <Link to="/register" className=" hover:text-blue-600 transition">
                   Register
                </Link>
            </div>               

        </nav>
    );
}

export default Navbar;