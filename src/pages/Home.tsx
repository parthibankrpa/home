function Home() {
  return (
    <div className="container ">
				<div className="my-auto row atf-content-details align-items-center">
					<div className="col-md-7 atf-single-details text-start aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
						<h5>Hello, I'm</h5>
						<h2 className="mb-0 d-block d-lg-block">Parthiban K<span className="theme_gray"></span><span className="typed-word"> React Developer.</span><span className="typed-cursor typed-cursor--blink">|</span> </h2>
						<p className="">Senior software Engineer with 12+ years of Technical experience in solution analysis, design, development and implementation of Enterprise Application modules. Excellent experience in various web technologies, programming languages, Also taken care of Mentoring, and training. Moderate knowledge on multiple AWS services and tools. I am also having 5 years of experience with leading a team and owning the team deliverables .
.</p>
						<div className="atf-main-btn aos-init" data-aos="fade-up" data-aos-duration="1000"> 
							<a href="#hire" className="atf-themes-btn me-4">Hire Me</a>
							<a href="/home/resume.pdf" className="atf-themes-btn">Download Cv</a>
						</div>
						<div className="atf-banner-social">
							<ul className="atf-banner-icon  list-unstyled">
								<li className="facebook aos-init" data-aos="fade-in" data-aos-duration="1000"><a title="Facebook" href="#"><i className="fab fa-facebook"></i></a></li>
								<li className="linkedin aos-init" data-aos="fade-in" data-aos-duration="1000"><a title="Linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
								<li className="twitter aos-init" data-aos="fade-in" data-aos-duration="1000"><a title="Twitter" href="#"><i className="fab fa-twitter"></i></a></li>
								<li className="instagram aos-init" data-aos="fade-in" data-aos-duration="1000"><a title="Instagram" href="#"><i className="fab fa-instagram"></i></a></li>
								<li className="whatsapp aos-init" data-aos="fade-in" data-aos-duration="1000"><a title="Whatsapp" href="#"><i className="fab fa-whatsapp"></i></a></li>		  
							</ul>
						</div>
					</div>
					<div className="col-md-5 atf_home_img2 order-2 order-md-1 text-center aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
						<img src="assets/img/3.jpg" alt="portfolio" className="card-s"/>
					</div>
				</div>
			</div>
  )
}

export default Home;

