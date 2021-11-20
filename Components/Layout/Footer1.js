import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useRouter} from 'next/router'
import Link from "next/link";
import LoginModal from "../Elements/Modal/LoginModal";
import RegisterModal from "../Elements/Modal/RegisterModal";
import { logoutUser } from "../../redux/ducks/userDuck";

export default function Footer1() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const user = useSelector((state) => state.user);

  const signOut = () => {
    dispatch(logoutUser())
    router.push('/')
  }
  

  return (
    <>
      <footer>
        <div
          className="footer_top_area footer_default_area p-rel bg_cover"
          style={{ background: "url(/img/footer/footer_bg.jpg)" }}
        >
          <div className="footer_top_wrapper p-rel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-7 col-md-7 col-sm-7">
                  <div className="footer_widget mb-50">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">About Us</h4>
                    </div>
                    <p className="mb-25">
                      Because it does not spend hours selling to customers,
                      maintaining a brick and mortar stores, or paying for a
                      commissions, Carify Auto Center can run more with in
                      efficiently than a traditional.
                    </p>
                    <div className="footer_locate_link theme-1">
                      <ul>
                        <li>
                          <Link href="/tel:00997722717">
                            <a>
                              <i className="fal fa-phone"></i>
                              <strong>Phone:</strong>00997722717
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mailto:masum@gmail.com">
                            <a>
                              <i className="fal fa-envelope"></i>
                              <strong>Phone:</strong>masum@gmail.com
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-sm-5">
                  <div className="footer_widget mb-50 pl_37">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">Our Pages</h4>
                    </div>
                    <div className="footer_links theme-1">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Features</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Services</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Pricing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/volunteer">
                            <a>Team</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Terms & condition</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <a>News Insights</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq">
                            <a>Faq</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-7 col-md-7 col-sm-7">
                  <div className="footer_widget footer_news mb-50">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title text-center">¿Eres colaborador?</h4>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      {!user.jwt ? (
                        <>
                          <button
                            className="rad-30 g_btn to_right1 theme2_bg"
                            onClick={() => setShowModal(!showModal)}
                          >
                            Iniciar Sesión
                            <span></span>
                          </button>
                          <LoginModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                          />
                          <button
                            className="rad-30 g_btn to_right1 theme2_bg mt-3"
                            onClick={() => setRegisterModal(!registerModal)}
                          >
                            Registrarme
                            <span></span>
                          </button>
                          <RegisterModal
                            registerModal={registerModal}
                            setRegisterModal={setRegisterModal}
                          />
                        </>
                      ) : (
                        <button
                          className="rad-30 g_btn to_right1 theme2_bg"
                          onClick={signOut}
                        >
                          Cerrar Sesión
                          <span></span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright_area ">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 text-center">
                <p>
                  Copyright © 2021 All Rights Reserved by{" "}
                  <strong>
                    <Link href="#">
                      <a>ThemePure</a>
                    </Link>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
