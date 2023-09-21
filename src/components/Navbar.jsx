import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <header>
      <Link to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Products</Link>
        <Link to="/products/new">
=======
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to="/" className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to="/products">Products</Link>
        <Link to="/carts">Products</Link>
        <Link to="/products/new" className='text-2xl'>
>>>>>>> master
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
