import Nav from './Nav'

function Header (){
    return (
        <header>
            <div className="devGreg Logo"><img src="#" alt="devgreg logo"/></div>
            <Nav />
            <button className="nav-toggle"></button>
        </header>
    )
};

export default Header