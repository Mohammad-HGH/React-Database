import React, { Component } from 'react';
import Introduce from './Introduce';
import Nav from './Nav';
import LazyLoad from "react-lazyload";
class Header extends Component {
 
    render() { 
return (
            <div>
             
                <header className="">
                    <div className="height-max">
                        <Nav />
                        <Introduce />
                    </div>
 
                </header>
                {/* <LazyLoad height={250} once>
        <img src="https://placedog.net/500/280" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        
</LazyLoad>
<LazyLoad height={250} once>
        <img src="https://placedog.net/500/280" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        
</LazyLoad>
<LazyLoad height={250} once>
        <img src="https://placedog.net/500/280" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        
</LazyLoad>
<LazyLoad height={250} once>
        <img src="https://placedog.net/500/280" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        <img src="https://placedog.net/500/300" alt="dog" />
        
</LazyLoad> */}

      
            </div>);
    }
}

export default Header;