import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500
                        text-white p-10 py-20">

            <div className="max-w-4xl mx-auto text-center">
            
               <h1 className="text-4xl font-bold mb-6">Manage Tasks Effortlessly</h1>
               <br />
               <p className="text-xl mb-8">Track tasks, stay organized and boost productivity</p>
               
               <div className="flex justify-center gap-4">

                   <Link to="/register" className="bg-white text-blue-600 hover:bg-gray-300 px-6 py-3 rounded-lg font-semibold">
                       Get Started
                   </Link>

                   <Link to="/login" className="border border-white text-white hover:text-blue-600 hover:bg-white px-6 py-3 rounded-lg font-semibold transition">
                       Login
                   </Link>

               </div>
               <br />
            
               <br />
               <div className="mt-12">
                    <ul className="space-y-4 text-xl">
                        <li>✓ Create Tasks</li>
                        <li>✓ Track Progress</li>
                        <li>✓ Stay Organized</li>
                    </ul>
               </div>
            </div>
        </div>
    );
}

export default Hero;