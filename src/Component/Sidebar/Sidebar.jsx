'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
function Sidebar() {
    const router = useRouter();

    // Define the content for each route
    const routeContent = {
        "/home": "Welcome to the Home Page!",
        "/customer": "This is the Customer Page.",
        "/user": "You are on the User Page.",
        "/about": "Learn more About us here.",
    };
    const currentRoute = router.pathname;

    // Handle navigation click
    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <div className="flex-none w-72">
            <div className="mx-auto p-4">
                <Image
                    className="rounded-full w-32 h-32 mb-4"
                    alt="photo"
                    width={100}
                    height={200}
                    justify-center
                    src="/fuzhe-xiu-avatargirl-2.jpg"
                ></Image>
                <h1 className="text-2xl font-bold mb-4 justify-right flexitems-center">
                    Suman Ghising
                </h1>
            </div>

            <div id="nav" className="w-full px-6">
                <div
                    onClick={() => handleNavigation("/home")}
                    className={`w-full px-2 inline-flex space-x-2 items-center border py-3 ${currentRoute === "/home"
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                        }`}
                >
                    Home
                </div>

                <div
                    onClick={() => handleNavigation("/customer")}
                    className={`w-full px-2 inline-flex space-x-2 items-center border py-3 ${currentRoute === "/customer"
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                        }`}
                >
                    Customer
                </div>

                <div
                    onClick={() => handleNavigation("/user")}
                    className={`w-full px-2 inline-flex space-x-2 items-center border py-3 ${currentRoute === "/user"
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                        }`}
                >
                    User
                </div>

                <div
                    onClick={() => handleNavigation("/about")}
                    className={`w-full px-2 inline-flex space-x-2 items-center border py-3 ${currentRoute === "/about"
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                        }`}
                >
                    About
                </div>
            </div>
        </div>
    )
}

export default Sidebar
