const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-4 " style={{ backgroundColor: "#fffef2" }}>
            {/* <a className="navbar-brand" href="#edf">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Skin Care<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Body & Hand<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Hair<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Fragrance<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Home<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Kits & Travel<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Gifts<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Read<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Stores<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Facial Appointments<span className="sr-only">(current)</span></a>
                    </li>
                    <button  className=" border-0 " style={{background:'none'}} >
                        
                        <svg   viewBox="0 0 16 16" width="18" style={{ height: '18px', width: '18px'  }}>
                            <g>
                                <path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Login<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Cabinet<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#vdfv">Cart<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    )
}
export default Navbar;