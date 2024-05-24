import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logoFooter from '../assets/images/icons/Logo.png';
import imgFooter1 from '../assets/images/popular-post-01.jpg';
import imgFooter2 from '../assets/images/popular-post-02.jpg';
import imgFooter3 from '../assets/images/popular-post-03.jpg';

import $ from 'jquery';
function Footer() {
  // useEffect(() => {
  //   const scrollTop = 0;
  //   const windowElement: Window = window;
  //   const buttonElement: HTMLElement | null = document.getElementById('myBtn');
  //   windowElement.addEventListener('scroll', () => {
  //     if (windowElement.scrollY > windowElement.innerHeight / 2) {
  //       buttonElement?.classList.add('show-btn-back-to-top');
  //     } else {
  //       buttonElement?.classList.remove('show-btn-back-to-top');
  //     }
  //   });

  //   buttonElement?.addEventListener('click', () => {
  //     document.documentElement.animate({ scrollTop }, 0); // Or document.body.scrollTop for older browsers
  //   });
  // });

  useEffect(() => {
    try {
      $(window).on('scroll', function () {
        if ($(this).scrollTop()) {
          $('#myBtn').addClass('show-btn-back-to-top');
        } else {
          $('#myBtn').removeClass('show-btn-back-to-top');
        }
      });

      $('#myBtn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
      });
    } catch (er) {
      console.log(er);
    }
  });
  return (
    <>
      {/* <!-- Footer --> */}
      <footer>
        <div className="bg2 p-t-40 p-b-25">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 p-b-20">
                <div className="size-h-3">
                  <NavLink to="/">
                    <img className="max-s-full" src={logoFooter} alt="LOGO" />
                  </NavLink>
                </div>

                <div>
                  <p className="f1-s-1 cl11 p-b-16">
                    GERAKAN ANTI KORUPSI DAN LINGKUNGAN HIDUP
                  </p>

                  <p className="f1-s-1 cl11 p-b-16">
                    Ada Pertanyaan? Hubungi Kami (+1) 96 716 6879
                  </p>

                  <div className="p-t-15">
                    <NavLink
                      to="/"
                      className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                    >
                      <span className="fab fa-facebook-f"></span>
                    </NavLink>

                    <NavLink
                      to="/"
                      className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                    >
                      <span className="fab fa-twitter"></span>
                    </NavLink>

                    <NavLink
                      to="/"
                      className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                    >
                      <span className="fab fa-pinterest-p"></span>
                    </NavLink>

                    <NavLink
                      to="/"
                      className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                    >
                      <span className="fab fa-vimeo-v"></span>
                    </NavLink>

                    <NavLink
                      to="/"
                      className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                    >
                      <span className="fab fa-youtube"></span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 p-b-20">
                <div className="size-h-3 flex-s-c">
                  <h5 className="f1-m-7 cl0">Popular Posts</h5>
                </div>

                <ul>
                  <li className="flex-wr-sb-s p-b-20">
                    <NavLink
                      to="/"
                      className="size-w-4 wrap-pic-w hov1 trans-03"
                    >
                      <img src={imgFooter1} alt="IMG" />
                    </NavLink>
                    <div className="size-w-5">
                      <h6 className="p-b-5">
                        <NavLink
                          to="/"
                          className="f1-s-5 cl11 hov-cl10 trans-03"
                        >
                          Donec metus orci, malesuada et lectus vitae
                        </NavLink>
                      </h6>

                      <span className="f1-s-3 cl6">Feb 17</span>
                    </div>
                  </li>

                  <li className="flex-wr-sb-s p-b-20">
                    <NavLink
                      to="/"
                      className="size-w-4 wrap-pic-w hov1 trans-03"
                    >
                      <img src={imgFooter2} alt="IMG" />
                    </NavLink>

                    <div className="size-w-5">
                      <h6 className="p-b-5">
                        <NavLink
                          to="/"
                          className="f1-s-5 cl11 hov-cl10 trans-03"
                        >
                          Lorem ipsum dolor sit amet, consectetur
                        </NavLink>
                      </h6>

                      <span className="f1-s-3 cl6">Feb 16</span>
                    </div>
                  </li>

                  <li className="flex-wr-sb-s p-b-20">
                    <NavLink
                      to="/"
                      className="size-w-4 wrap-pic-w hov1 trans-03"
                    >
                      <img src={imgFooter3} alt="IMG" />
                    </NavLink>

                    <div className="size-w-5">
                      <h6 className="p-b-5">
                        <NavLink
                          to="/"
                          className="f1-s-5 cl11 hov-cl10 trans-03"
                        >
                          Suspendisse dictum enim quis imperdiet auctor
                        </NavLink>
                      </h6>

                      <span className="f1-s-3 cl6">Feb 15</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-lg-4 p-b-20">
                <div className="size-h-3 flex-s-c">
                  <h5 className="f1-m-7 cl0">Category</h5>
                </div>

                <ul className="m-t--12">
                  <li className="how-bor1 p-rl-5 p-tb-10">
                    <NavLink
                      to="/"
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      Fashion
                    </NavLink>
                  </li>

                  <li className="how-bor1 p-rl-5 p-tb-10">
                    <NavLink
                      to="/"
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      Technology
                    </NavLink>
                  </li>

                  <li className="how-bor1 p-rl-5 p-tb-10">
                    <NavLink
                      to="/"
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      Street Style
                    </NavLink>
                  </li>

                  <li className="how-bor1 p-rl-5 p-tb-10">
                    <NavLink
                      to="/"
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      Life Style
                    </NavLink>
                  </li>

                  <li className="how-bor1 p-rl-5 p-tb-10">
                    <NavLink
                      to="/"
                      className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                    >
                      DIY & Crafts
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg11">
          <div className="container size-h-4 flex-c-c p-tb-15">
            <span className="f1-s-1 cl0 txt-center">
              Gaskan News ©2024 | All Right Reserved
            </span>
          </div>
        </div>
      </footer>

      {/* <!-- Back to top --> */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <span className="fas fa-angle-up"></span>
        </span>
      </div>

      {/* <!-- Modal Video 01--> */}
      <div
        className="modal fade"
        id="modal-video-01"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document" data-dismiss="modal">
          <div
            className="close-mo-video-01 trans-0-4"
            data-dismiss="modal"
            aria-label="Close"
          >
            &times;
          </div>

          <div className="wrap-video-mo-01">
            <div className="video-mo-01">
              <iframe
                title="yt"
                src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
