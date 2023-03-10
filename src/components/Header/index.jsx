import React from "react";
import "./style.css";

export default function Header() {
    return (
        <header class="header">
            <nav class="menu">
                <a href="#" className="item">Home</a>
                <a href="#" className="item">Portifólio</a>
                <a href="#" className="item">Blog</a>
            </nav>
        </header>
    );
}