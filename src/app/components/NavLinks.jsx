import React from "react";
import Link from "next/link";

const NavLinks = ({href, title}) => {
    return ( 
        <Link 
            href={href} 
            className=" block py-3 pl-3 pr-3 text-[#737373] sm:text-1xl rounded md:p-0 hover:text-white"> 
            {title}
        </Link>
    );
}

export default NavLinks;