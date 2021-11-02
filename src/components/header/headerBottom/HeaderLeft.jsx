import React from 'react'

function HeaderLeft() {
    return (
        <div className="header-left">
        <div className="dropdown category-dropdown">
            <a href="/#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                Browse Categories <i className="icon-angle-down"></i>
            </a>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        <li className="item-lead"><a href="/#">Daily offers</a></li>
                        <li className="item-lead"><a href="/#">Gift Ideas</a></li>
                        <li><a href="/#">Beds</a></li>
                        <li><a href="/#">Lighting</a></li>
                        <li><a href="/#">Sofas & Sleeper sofas</a></li>
                        <li><a href="/#">Storage</a></li>
                        <li><a href="/#">Armchairs & Chaises</a></li>
                        <li><a href="/#">Decoration </a></li>
                        <li><a href="/#">Kitchen Cabinets</a></li>
                        <li><a href="/#">Coffee & Tables</a></li>
                        <li><a href="/#">Outdoor Furniture </a></li>
                    </ul>{/* End .menu-vertical*/}
                </nav>{/* End .side-nav*/}
            </div>{/* End .dropdown-menu*/}
        </div>{/* End .category-dropdown*/}
    </div>
    )
}

export default HeaderLeft
