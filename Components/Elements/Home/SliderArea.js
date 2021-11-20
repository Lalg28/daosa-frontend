import React from "react";
import Image from "next/image";
import Banner from "/public/img/slider/header.png";

export default function SliderArea() {
  return (
    <section className="slider_area">
      <div className="slider_active" style={{ position: "relative" }}>
        {/* <div style={{ position: "absolute", width: "100%" }}>
          
        </div> */}
        <Image
            src={Banner}
            objectFit="cover" 
            layout="fill"
          />
        <div className="single_slider slider_height p-rel d-flex align-items-center align-items-md-end">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                <div className="slider_content text_space">
                  <div className="slider_text text_overlay">
                    <h2 className="slider_title">
                      {" "}
                      <span>Grupo</span> <br /> Daosa
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen booek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
