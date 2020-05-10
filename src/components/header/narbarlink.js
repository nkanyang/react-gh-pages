import React from "react";

function NavBarLink({className,href,children,onClick}){
  const clickMe = (event)=>{
    // event.preventDefault(); 
    onClick(children);
  }
  return(
  <a className={className} 
    href={href} 
    onClick={clickMe}
    >
      {children} 
  </a>
  );
}

export default NavBarLink;