import React from "react";
import Image from "next/image";
import Layout2 from "../Components/Layout/Layout2";
import SliderArea from "../Components/Elements/Home/SliderArea";
import { Carousel, CarouselItem } from "react-bootstrap";
import Banner from "/public/img/slider/BANNER.jpg";
import Seguros from "/public/img/servicios/seguros.png";
import ServicioUno from "/public/img/servicios/servicio1.png";
import ServicioDos from "/public/img/servicios/servicio2.png";
import MapProof from "/public/img/placeholders/map.png";

const images = {
  Banner,
  Banner,
  Banner,
};

console.log("Prueba", Banner.src);

export default function Home() {
  return (
    <Layout2>
      <main>
        <SliderArea />

        <div className="mt-5">
          <h3 className="text-center">CONOCE NUESTRAS PROMOCIONES</h3>
          <hr style={{ width: "50%", margin: "0 auto" }} />
          <div className="d-flex justify-content-center mt-5">
            <Carousel className="w-75" fade>
              <CarouselItem>
                <Image src={Banner} className="w-100" />
              </CarouselItem>
              <CarouselItem>
                <Image src={Banner} className="w-100" />
              </CarouselItem>
              <CarouselItem>
                <Image src={Banner} className="w-100" />
              </CarouselItem>
              <CarouselItem>
                <Image src={Banner} className="w-100" />
              </CarouselItem>
            </Carousel>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-center">SERVICIOS NISSAN</h3>
          <hr style={{ width: "50%", margin: "0 auto" }} />
          <div className="d-flex justify-content-center mt-5">
            <div
              className="card"
              style={{ width: 300, height: 450, marginRight: 30 }}
            >
              <Image src={Seguros} objectFit="cover" layout="fill" />
            </div>

            <div
              className="card"
              style={{ width: 300, height: 450, marginRight: 30 }}
            >
              <Image src={ServicioUno} objectFit="cover" layout="fill" />
            </div>

            <div className="card" style={{ width: 300, height: 450 }}>
              <Image src={ServicioDos} objectFit="cover" layout="fill" />
            </div>
          </div>
        </div>

        <div className="my-5">
          <div>
            <h3 className="text-center">ENCUENTRANOS</h3>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="container my-5">
              <div style={{width: '100%', height: 400}}>
                <Image src={MapProof} layout="responsive"/>
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
