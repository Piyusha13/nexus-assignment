import React from "react";
import Slider from "react-slick";

const Products = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div >
            {/* product1 */}
            <div className="my-5 py-5 products">
                <div className="product1">
                    <div className="text-black text mx-5 px-5" >
                        <p>A new Othertopias fragrance </p>
                        <p className="heading" >Ouranon Eau de Parfum</p>
                        <p  >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="Discover-btn text-black" >Discover Ouranon
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                    <div>
                        <video autoplay crossorigin="anonymous" data-testid="data-testid-VideoPlayer" loop="true" muted="" playsinline="">
                            <source src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4" type="video/mp4" />

                        </video>
                    </div>
                </div>
            </div>
            {/* product2 */}
            <div className="slider2 m-d-none my-5 py-5">
                <Slider {...settings}>
                    <div className="text-black m-d-none" >
                        <div className="text-black  mx-5 px-5" >
                            <p>A new Othertopias fragrance </p>
                            <p style={{ fontSize: '2rem' }} >Ouranon Eau de Parfum</p>
                            <p style={{}} >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                            <button className="Discover-btn text-black" >Discover Ouranon
                                <i aria-hidden="true" >
                                    <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                        <g>
                                            <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                            </path>
                                        </g>
                                    </svg>
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                </Slider>
            </div>
            {/* product2 mob */}
            <div className="d-d-none">
                <div className="text-black" >
                    <div className="text-black product2 mx-5 px-5" >
                        <p>A new Othertopias fragrance </p>
                        <p className="heading">Ouranon Eau de Parfum</p>
                        <p style={{}} >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="border-0  text-black" style={{background:'transparent'}} >See All Fragrance
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" className="mx-2" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
                <Slider {...settings2}>
                    <div className="">
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                </Slider>
            </div>
            {/* pproduct3 */}
            <div className="my-5 py-5 products ">
                <div className="product3">

                    <div>
                        <img alt="A texture shot of two products together" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg" />
                    </div>

                    <div className="text-black  text ">
                        <p>A new Othertopias fragrance </p>
                        <p className="heading" >Ouranon Eau de Parfum</p>
                        <p  >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="Discover-btn text-black" >Discover Ouranon
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* pproduct4 */}
            <div className="slider2 m-d-none my-5 py-5">
                <Slider {...settings}>
                    <div className="text-black" >
                        <div className="text-black  mx-5 px-5" >
                            <p>A new Othertopias fragrance </p>
                            <p style={{ fontSize: '2rem' }} >Ouranon Eau de Parfum</p>
                            <p style={{}} >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                            <button className="Discover-btn text-black" >Discover Ouranon
                                <i aria-hidden="true" >
                                    <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                        <g>
                                            <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                            </path>
                                        </g>
                                    </svg>
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                </Slider>
            </div>
            
            {/* pproduct4 mob */}
            <div className="d-d-none">
                <div className="text-black" >
                    <div className="text-black product2 " >
                        <p>A new Othertopias fragrance </p>
                        <p className="heading">Ouranon Eau de Parfum</p>
                        <p style={{}} >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="border-0  text-black" style={{background:'transparent'}} >See All Fragrance
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" className="mx-2" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
                <Slider {...settings2}>
                    <div className="">
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '80vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                </Slider>
            </div>
            
            {/* pproduct5 */}
            <div className="my-5 py-5 products">
                <div className="product4">
                    <div className="text-black w-50 text mx-5 px-5" >
                        <p>A new Othertopias fragrance </p>
                        <p className="heading" >Ouranon Eau de Parfum</p>
                        <p  >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="Discover-btn text-black" >Discover Ouranon
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                    <div className=" m-d-none w-50 p4-slider">
                        <Slider {...settings2}>
                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>
                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>

                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>


                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>

                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>
                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>
                            <div>
                                <img style={{ width: '100%' }} alt="Aesop MOKO store exteriors" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <Slider {...settings2}>
                    <div className="">
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg" />
                    </div>
                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>

                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                    <div>
                        <img style={{ width: '100vw' }} alt="An amber bottle of Ouranon Eau de Parfum alongside carton packaging. " loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
                    </div>
                </Slider>
            
            {/* pproduct6 */}
            <div className="my-5 py-5 products ">
                <div className="product6">

                    <div>
                        <img style={{ width: '100%' }} alt="" loading="lazy" src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg" />
                    </div>

                    <div className="text-black text  mx-5 px-5" >
                        <p>A new Othertopias fragrance </p>
                        <p className="heading" >Ouranon Eau de Parfum</p>
                        <p style={{}} >A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh.</p>
                        <button className="Discover-btn text-black" >Discover Ouranon
                            <i aria-hidden="true" >
                                <svg viewBox="0 0 50 50" width="12" style={{ height: '12px', width: '12px' }}>
                                    <g>
                                        <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* text */}
            <div className="my-5 py-5 text-center">
                ‘Nothing is ever ended, everything only begun.’
                <div>Sara Teasdale</div>

            </div>
        </div>
    )
}

export default Products;