function Hero() {
    return (
        <>
            <div className="p-5 my-5 text-center" >
                <div className="d-block mx-auto mb-4 border border-5 border-dark rounded-circle overflow-hidden" id="hero-img-container">
                    <img src="./cs-3.jpg" alt="" id="hero-img" ></img>
                </div>

                <h1 className="display-5 fw-bold text-body-emphasis">Maxwell Hayden</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        A Computer Science Student and Musician with a passion for front-end, back-end, and everyting in between. Here you can Check out my Life in Coding and Music:)
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="https://github.com/maxhayden"
                            className="btn btn-primary btn-lg px-4 gap-3"
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/max-hayden-7378932ab/?trk=nav_responsive_tab_profile_pic&originalSubdomain=ca"
                            className="btn btn-primary btn-lg px-4 gap-3"
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;