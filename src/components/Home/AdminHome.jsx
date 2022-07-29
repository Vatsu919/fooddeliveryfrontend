import React from 'react';
import { useSelector } from 'react-redux';
import AdminNavbar from '../Navbar/AdminNavbar';
import AdminRestaurant from '../Restaurant/AdminRestaurant';

const AdminHome = () => {
    const restaurants = useSelector(state => state.restaurants);
    return ( 
        <>
            <AdminNavbar />
           <h1>Admin Home</h1>
        </>
     );
}
 
export default AdminHome;