import React from "react";

import Menu from "./elements/Menu";

function Header({ containerType}) {
 
  return (
    <div className={`header-one`}>
      <Menu containerType={containerType} />
    </div>
  );
}

export default React.memo(Header);
