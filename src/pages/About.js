import Footer from "../components/Footer.js";
import Header from '../components/Header.js';

function About() {
    return (
        <>
            <Header />
            <div className="container my-5">
                <h1 className="text-center fw-bold">About Me!</h1>
                <div className="d-flex align-items-center m-5">
                    <img src="./cs-3.jpg" alt="Max Hayden" id="about-me-img" className="w-25 rounded-circle me-4" />
                    <p className="fw-bold">
                        My name is Max Hayden, and I'm a 4th-year Computer Science student at Dalhousie University.
                        Through my degree, I have developed a strong passion for software development, web technologies,
                        and cloud computing. I enjoy working on full-stack applications, leveraging my skills in JavaScript,
                        HTML, CSS, and frameworks like React and Bootstrap. I have experience developing Android applications,
                        RESTful APIs, and cloud-based projects using AWS.
                        <br /><br />
                        Beyond coding, I have a background in music and graphic design. From writinfg music to being stuck in a van for 
                        weeks while touring across canada, i have really been able to learn how to live, colaborate, and harmonize with my band mates.
                        <br /><br />
                        I'm always excited to collaborate on innovative projects and explore new technologies!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
