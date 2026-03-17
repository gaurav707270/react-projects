import "./Hero.css"

export const Hero = () => {
    return (
        <>
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

                {/* Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div className="carousel-item active hero-slide">
                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                            className="d-block w-100 hero-img"
                            alt="pest control"
                        />

                        <div className="carousel-caption hero-text">
                            <h1>Professional Pest Control</h1>
                            <p>Protect your home and family with our safe pest control services.</p>

                            <button className="btn btn-success me-3 px-4 py-2">Book Service</button>
                            <button className="btn btn-outline-light px-4 py-2">Learn More</button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item hero-slide">
                        <img
                            src="https://hibu.com/var/site/storage/images/9/1/5/6/376519-1-eng-US/4567b3e9f8fc-Pest-Control-Blog-Images-2-5-Pest-Control-Website-Design-Tips.png"
                            className="d-block w-100 hero-img"
                            alt="home protection"
                        />

                        <div className="carousel-caption hero-text">
                            <h1>Safe & Effective Solutions</h1>
                            <p>Advanced pest control technology for long-lasting protection.</p>

                            <button className="btn btn-success me-3 px-4 py-2">Our Services</button>
                            <button className="btn btn-outline-light px-4 py-2">Contact Us</button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item hero-slide">
                        <img
                            src="https://img.freepik.com/free-vector/pest-control-house-hygiene-disinfection-service-isometric-website-banner-with-professional-team-exterminating-insects-background_1284-32161.jpg"
                            className="d-block w-100 hero-img"
                            alt="termite control"
                        />

                        <div className="carousel-caption hero-text">
                            <h1>Termite & Pest Experts</h1>
                            <p>Trusted pest control services for homes and businesses.</p>

                            <button className="btn btn-success me-3 px-4 py-2">Get Quote</button>
                            <button className="btn btn-outline-light px-4 py-2">Read Blog</button>
                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
        </>
    )
}
