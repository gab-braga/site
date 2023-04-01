import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="menu">
                <NavLink to="/" className={({isActive}) => isActive ? "active item" : "item"}>Home</NavLink>
                <NavLink to="/portfolio" className={({isActive}) => isActive ? "active item" : "item"}>Portfólio</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? "active item" : "item"}>Blog</NavLink>
            </nav>
        </header>
    );
}