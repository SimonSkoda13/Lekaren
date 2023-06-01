"use client"
import React from 'react';
import {Callback} from "escalade";
import Link from "next/link";

const data = {
    logo: "/logo.svg",
    items: [{
        text: <span>Pon-Pia: <span className="text-primary.600">8:00 - 18:00</span></span>,
        icon: "/clock.svg",
    },
        {
            text: "0905 123 456",
            icon: "/phone.svg"
            ,href:"tel:0905123456"
        },
        {
            text: "BB, Na Troskách 26",
            icon: "/map.svg",
            href:"https://goo.gl/maps/4Z1Z6Z2Z2Z2Z2Z2Z2"
        }]
}

function Hamburger(props: { onClick?: any }) {
    return (
        <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
                <svg
                    className="w-6 h-6 text-gray-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    );
}

function Header() {
    // const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div className="cntn flex items-center justify-between">
            <div className="h-full">
                <img src="/logo.svg" alt="logo" className="h-full"/>
            </div>
            <div className="hidden md:flex md:flex-row justify-between w-[50%]">
                {data.items.map((item, index) => (
                    <Link key={index} className="flex flex-row gap-2" href={}>
                        <img src={item.icon} alt="icon"/>
                        <span className="text-xs font-extrabold">{item.text}</span>
                    </Link>
                ))}
            </div>
            <Hamburger/>
            {/*<div className={'hidden'}>*/}
            {/*    <ul className="">*/}
            {/*        <li className="active">*/}
            {/*            <a href="index.html"*/}
            {/*               className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href="#services"*/}
            {/*               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href="#about"*/}
            {/*               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>*/}
            {/*        <li>*/}
            {/*            <a href="#contact"*/}
            {/*               className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
}

export default Header;