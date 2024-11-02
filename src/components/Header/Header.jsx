import { NavLink } from "react-router-dom";

export const Header =() =>{
    return (
        <>
            <div className="flex h-20 items-center justify-between bg-white shadow-md px-4">
                
                
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                        <div className="text-3xl font-bold text-slate-600">your</div>
                        <div className="text-3xl font-bold text-orange-400">logo</div>
                        <div className="flex h-8 w-5 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-800">®</div>
                    </div>
                </div>

                
                <div className="hidden md:flex flex-1 justify-center space-x-8">
                    <ul className="flex space-x-8">
                        <li><NavLink to='/' className={({isActive}) =>`cursor-pointer font-semibold ${isActive? 'text-orange-500' : 'text-zinc-700'}  hover:text-orange-500 transition duration-300`}> Home </NavLink></li>
                        <li><NavLink to='/about' className={({isActive}) =>`cursor-pointer font-semibold ${isActive? 'text-orange-500' : 'text-zinc-700'}  hover:text-orange-500 transition duration-300`}> About </NavLink></li>
                        <li><NavLink to='/contact' className={({isActive}) =>`cursor-pointer font-semibold ${isActive? 'text-orange-500' : 'text-zinc-700'}  hover:text-orange-500 transition duration-300`}> Contact </NavLink></li>
                        <li><NavLink to='/github' className={({isActive}) =>`cursor-pointer font-semibold ${isActive? 'text-orange-500' : 'text-zinc-700'}  hover:text-orange-500 transition duration-300`}> Github </NavLink></li>
                        
                    </ul>
                </div>


                
                <div className="flex space-x-3">
                    <div className="cursor-pointer p-2 font-semibold text-zinc-700 hover:text-orange-500 transition duration-300">Log In</div>
                    <div className="cursor-pointer rounded-xl bg-orange-600 p-2 text-white hover:bg-orange-700 transition duration-300">Get Started</div>
                </div>
            </div>
        </>
    );
};
