"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define the Home component
export default function Home() {
  const router = useRouter();

  // Define the content for each route
  const routeContent = {
    "/home": "Welcome to the Home Page!",
    "/customer": "This is the Customer Page.",
    "/user": "You are on the User Page.",
    "/about": "Learn more About us here.",
  };

  // Get the current route
  const currentRoute = router.pathname;

  // Handle navigation click
  const handleNavigation = (route) => {
    router.push(route);
  };

  // Render the component
  return (
    <main className="bg-black h-screen flex items-center justify-center p-10">
      <div className="flex w-full h-full bg-white">
  
        <div className="flex-auto w-auto">
          <div className="p-4">{routeContent[currentRoute]}</div>
        </div>
      </div>
    </main>
  );
}
