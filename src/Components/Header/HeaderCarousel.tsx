import * as React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import './Header.css';

interface IHeaderCarouselProps {}

const HeaderCarousel: React.FunctionComponent<IHeaderCarouselProps> = (
    props
) => {
    return (
        <>
            <Container fluid className="carousel-container-1 mt-2">
                <div className="row carousel-content mx-4">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="true"
                    >
                        <Carousel>
                            <Carousel.Item>
                                <div className="d-flex flex-row">
                                    <div className="w-100 d-flex justify-content-center align-item-center align-self-center">
                                        <h2 className="txt col-8 justify-content-start text-white fs-2">
                                            Repair & Maintainence <br />
                                            Instant Doorstep Services On Demand
                                        </h2>
                                    </div>
                                    <Image
                                        className="d-flex caro-img justify-content-center"
                                        src="/static/image/carousel-img-1.png"
                                        alt="First slide"
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex flex-row">
                                    <div className="w-100 d-flex justify-content-center align-item-center align-self-center">
                                        <h2 className="txt col-8 justify-content-start text-white fs-2">
                                            Top Trained Experts <br/> at Your Doorstep
                                    Right Away!
                                        </h2>
                                    </div>
                                    <Image
                                        className="d-flex caro-img justify-content-center"
                                        src="/static/image/carousel-img-1.png"
                                        alt="First slide"
                                    />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex flex-row">
                                    <div className="w-100 d-flex justify-content-center align-item-center align-self-center">
                                        <h2 className="txt col-8 justify-content-start text-white fs-2">
                                            Easy Fix <br/> Superior Service Quality Parts
                                        </h2>
                                    </div>
                                    <Image
                                        className="d-flex caro-img justify-content-center"
                                        src="/static/image/carousel-img-1.png"
                                        alt="First slide"
                                    />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HeaderCarousel;
