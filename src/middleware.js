import { NextResponse } from "next/server";

export default function middleware(req) {
    const verify = req.cookies.get('auth');
    const url = req.url;

    // Check if the user is authenticated
    if (!verify && url.includes('/user')) {
        // If the user is not authenticated and tries to access admin pages, redirect to login
        return NextResponse.redirect('http://localhost:3000/');
    }

    // Assuming verify contains the user's role (e.g., 'admin')
    const userRole = verify; // This should be replaced with your actual logic to retrieve the user's role

    // if (userRole === 'admin' && url.includes('http://localhost:3000')) {
    //     // If the user is not an admin and tries to access admin pages, redirect to unauthorized page or homepage
    //     return NextResponse.redirect('http://localhost:3000/admin/requests');
    // }
    // // Check if the user is trying to access admin pages without being an admin
    // if (userRole !== 'admin' && url.includes('/admin')) {
    //     // If the user is not an admin and tries to access admin pages, redirect to unauthorized page or homepage
    //     return NextResponse.redirect('http://localhost:3000/');
    // }


    // Check if the user is logged in and tries to access the login page
    // if (verify && url.includes('/login')) {
    //     // If the user is already logged in and tries to access the login page, redirect to homepage
    //     return NextResponse.redirect('http://localhost:3000/user/dashboard');
    // }

    // Allow access for authenticated users and non-admin pages
    return NextResponse.next();
}
