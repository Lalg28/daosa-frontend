import React from "react";
import Image from "next/image";
import Layout2 from "../Components/Layout/Layout2";
import SliderArea from "../Components/Elements/Home/SliderArea";
import { Carousel, CarouselItem } from "react-bootstrap";
import Banner from "/public/img/slider/BANNER.jpg";
import Seguros from "/public/img/servicios/seguros.png";
import ServicioUno from "/public/img/servicios/servicio1.png";
import ServicioDos from "/public/img/servicios/servicio2.png";
import ServicioTres from "/public/img/servicios/servicio3.png";
import ServicioCuatro from "/public/img/servicios/servicio4.png";
import ServicioCinco from "/public/img/servicios/servicio5.png";
import ServicioSeis from "/public/img/servicios/servicio6.png";
import MapProof from "/public/img/placeholders/map.png";
import Slider from "react-slick";

const carouselPromos = {
  centerMode: false,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
};

const carouselServicios = {
  centerMode: false,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export default function Home() {
  return (
    <Layout2>
      <main>
        <SliderArea />

        <div className="mt-5 container">
          <h3 className="text-center">CONOCE NUESTRAS PROMOCIONES</h3>
          <hr style={{ width: "50%", margin: "0 auto" }} />
          <div className="mt-5">
            <Slider {...carouselPromos}>
              <div>
                <Image src={Banner} className="px-3" />
              </div>
              <div>
                <Image src={Banner} className="px-3" />
              </div>
              <div>
                <Image src={Banner} className="px-3" />
              </div>
            </Slider>
          </div>
        </div>

        <div className="mt-5 container">
          <h3 className="text-center">SERVICIOS NISSAN</h3>
          <hr style={{ width: "50%", margin: "0 auto" }} />
          <div className="mt-5">
            <Slider {...carouselServicios}>
              <div className="carouselServiceItems">
                <button className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </button>
                <div className="bg-service mx-3"></div>
                <Image
                  src={Seguros}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioUno}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioDos}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioTres}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioCuatro}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo prueba</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioCinco}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="carouselServiceItems">
                <div className="text-service d-flex justify-content-center align-items-center h-100 mx-3">
                  <p>Hola mundo</p>
                </div>
                <div className="bg-service mx-3"></div>
                <Image
                  src={ServicioSeis}
                  className="img-service mx-3"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="my-5">
          <div>
            <h3 className="text-center">ENCUÉNTRANOS</h3>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="container my-5">
              <div style={{ width: "100%", height: 400 }}>
                <Image src={MapProof} layout="responsive" />
              </div>
            </div>
          </div>
        </div>

        {/* <AboutArea />
        <CausesArea />

        <SupportArea />
        <FeaturedArea />
        <NewsFeed /> */}
      </main>
    </Layout2>
  );
}
