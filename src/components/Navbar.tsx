import { Container, Navbar as NavbarBs } from "react-bootstrap";
function Navbar(){
    return <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
        <div className="col-lg-10 col-md-9 col-8 ">
							<div className="header_right">
								<nav id="main-menu" className="ms-auto">
									<ul>
										<li><a href="#home">Home</a>
										</li>

										<li><a href="#about">About</a></li>
										<li><a href="#service">Service</a></li>
										<li><a href="#portfolio">Portfolio</a></li>
										<li><a href="#pricing">Pricing</a></li>
										<li><a href="#blog">Blog</a></li>
										<li><a href="#contact">Contact</a></li>
									</ul>
								</nav>
								<div id="mobile_menu">
									<div className="slicknav_menu">
										<a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{"outline":"none"}}>
											<span className="slicknav_menutxt"></span>
											<span className="slicknav_icon slicknav_no-text">
												<span className="slicknav_nav_icon fas fa-bars"></span>
												</span>
										</a>
										<nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{"display": "none"}}>
									<ul>
										<li><a href="#home" role="menuitem">Home</a>
										</li>

										<li><a href="#about" role="menuitem">About</a></li>
										<li><a href="#service" role="menuitem">Service</a></li>
										<li><a href="#portfolio" role="menuitem">Portfolio</a></li>
										<li><a href="#pricing" role="menuitem">Pricing</a></li>
										<li><a href="#blog" role="menuitem">Blog</a></li>
										<li><a href="#contact" role="menuitem">Contact</a></li>
									</ul>
								</nav></div></div>
							</div>
						</div>
        </Container>
    </NavbarBs>;
}

export default Navbar;