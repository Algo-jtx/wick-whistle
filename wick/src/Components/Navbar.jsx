import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Navbar({ isSignedUp, setIsSignedUp }) {
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.setItem("isSignedUp", "false"); 
    setIsSignedUp(false);
    Swal.fire('Logged Out', 'You have successfully logged out.', 'success');
  };
