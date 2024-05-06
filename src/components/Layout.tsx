"use client"
import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import { usePathname } from "next/navigation";

const Layout = () => {
  const navbar = [
    { heading: "Requests", path: "/admin/requests" },
    { heading: "Users", path: "/admin/users" },
    { heading: "Cycles", path: "/admin/cycles" },
  ];


  const currentPath = usePathname();

  return (
    <div className=" flex flex-col" style={{ zIndex: "1", top: "0", left: "0" }}>
      <div className="w-64 h-[90vh] bg-gray-900 text-white px-4 py-8 rounded-xl">
        <Link href="/admin">
          <h5 className="text-xl font-bold text-center mb-4">Joerides Dashboard</h5>
        </Link>
        <nav>
          {navbar.map((nav, key) => (
            <Link
              key={key}
              href={nav.path}
              className={`block py-2 hover:bg-gray-700 p-3 rounded-xl ${currentPath === nav.path ? "bg-blue-500 text-white rounded-xl p-3" : ""
                }`}
            >
              {nav.heading}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Layout;
