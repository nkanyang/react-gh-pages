import React from "react";

function NavBarLink({className,href,children}){
  return(
  <a className={className} href={href}>{children}</a>
  );
}

export default NavBarLink;