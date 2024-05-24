import React, { useEffect, useState } from 'react';

// img
import logoImage from '../assets/images/icons/Logo.png';
import logoBanner from '../assets/images/banner-01.jpg';
// end img

import { NavLink } from 'react-router-dom';
import $ from 'jquery';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    /*==================================================================
      [ Fixed menu ]*/
    try {
      const posNav = $('.wrap-main-nav').offset()?.top; // Add "?" to handle potential undefined
      const menuDesktop = $('.container-menu-desktop');
      const mainNav = $('.main-nav');
      var lastScrollTop = 0;
      var st = lastScrollTop;

      $(window).on('scroll', function () {
        fixedHeader();
      });

      $(window).on('resize', function () {
        fixedHeader();
      });

      $(window).on('load', function () {
        fixedHeader();
      });

      var fixedHeader = function () {
        st = $(window).scrollTop() ?? 0;
        // st = typeof scrollTopValue === 'number' ? scrollTopValue : 0;

        const mainNavHeight = mainNav.outerHeight() || 0;
        if (posNav !== undefined && st > posNav + mainNavHeight) {
          // Check for undefined before accessing properties
          $(menuDesktop).addClass('fix-menu-desktop');
        } else if (posNav !== undefined && st <= posNav) {
          // Check for undefined before accessing properties
          $(menuDesktop).removeClass('fix-menu-desktop');
        }

        if (st > lastScrollTop) {
          $(mainNav).removeClass('show-main-nav');
        } else {
          $(mainNav).addClass('show-main-nav');
        }

        lastScrollTop = st;
      };
    } catch (er) {
      console.log(er);
    }

    // [ Menu mobile ]
    // try {
    //   $('.btn-show-menu-mobile').on('click', function () {
    //     $('.menu-mobile').slideToggle();
    //     $(this).toggleClass('is-active');
    //   });

    //   $('.arrow-main-menu-m').on('click', function () {
    //     $(this).parent().find('.sub-menu-m').slideToggle();
    //     $(this).toggleClass('turn-arrow-main-menu-m');
    //   });

    //   $(window).on('resize', function () {
    //     if ($(window).width() >= 992) {
    //       if ($('.menu-mobile').css('display') === 'block') {
    //         $('.menu-mobile').css('display', 'none');
    //         $('.btn-show-menu-mobile').toggleClass('is-active');
    //       }

    //       $('.sub-menu-m').each(function () {
    //         if ($(this).css('display') === 'block') {
    //           $(this).css('display', 'none');
    //           $('.arrow-main-menu-m').removeClass('turn-arrow-main-menu-m');
    //         }
    //       });
    //     }
    //   });
    // } catch (er) {
    //   console.log(er);
    // }
  });

  return (
    <>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          <div className="topbar">
            <div className="content-topbar container h-100">
              <div className="left-topbar">
                <span className="left-topbar-item flex-wr-s-c">
                  <span>GASKAN</span>
                </span>

                <a href="/" className="left-topbar-item">
                  About
                </a>

                <a href="/" className="left-topbar-item">
                  Contact
                </a>

                <a href="/" className="left-topbar-item">
                  Log in
                </a>
              </div>

              <div className="right-topbar">
                <a href="/">
                  <span className="fab fa-facebook-f"></span>
                </a>

                <a href="/">
                  <span className="fab fa-twitter"></span>
                </a>

                <a href="/">
                  <span className="fab fa-pinterest-p"></span>
                </a>

                <a href="/">
                  <span className="fab fa-vimeo-v"></span>
                </a>

                <a href="/">
                  <span className="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Header Mobile --> */}
          <div className="wrap-header-mobile">
            {/* <!-- Logo moblie -->		 */}
            <div className="logo-mobile">
              <a href="/">
                <img src={logoImage} alt="IMG-LOGO" />
              </a>
            </div>

            {/* <!-- Button show menu --> */}
            <div
              className={`btn-show-menu-mobile hamburger hamburger--squeeze m-r--8 ${
                isMenuOpen ? 'is-active' : ''
              }`}
              onClick={toggleMenu}
            >
              {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8"> */}
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

          {/* <!-- Menu Mobile --> */}
          {/* <div className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}> */}
          <div className="menu-mobile">
            <ul className="topbar-mobile">
              <li className="left-topbar">
                <span className="left-topbar-item flex-wr-s-c">
                  <span>New York, NY</span>

                  <img
                    className="m-b-1 m-rl-8"
                    src="assets/images/icons/icon-night.png"
                    alt="IMG"
                  />

                  <span>HI 58° LO 56°</span>
                </span>
              </li>

              <li className="left-topbar">
                <a href="/" className="left-topbar-item">
                  About
                </a>

                <a href="/" className="left-topbar-item">
                  Contact
                </a>

                <a href="/" className="left-topbar-item">
                  Log in
                </a>
              </li>

              <li className="right-topbar">
                <a href="/">
                  <span className="fab fa-facebook-f"></span>
                </a>

                <a href="/">
                  <span className="fab fa-twitter"></span>
                </a>

                <a href="/">
                  <span className="fab fa-pinterest-p"></span>
                </a>

                <a href="/">
                  <span className="fab fa-vimeo-v"></span>
                </a>

                <a href="/">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>

            <ul className="main-menu-m">
              <li>
                <a href="index.html">Home</a>

                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>

              <li>
                <a href="category-01.html">News</a>
              </li>

              <li>
                <a href="category-02.html">Pendidikan</a>
              </li>

              <li>
                <a href="category-01.html">Ekonomi</a>
              </li>

              <li>
                <a href="category-02.html">Hukum</a>
              </li>

              <li>
                <a href="category-01.html">Pemerintahan</a>
              </li>

              <li>
                <a href="/">Daerah</a>
                <ul className="sub-menu-m">
                  <li>
                    <a href="category-01.html">Luwu Timur</a>
                  </li>
                  <li>
                    <a href="category-02.html">Luwu Utara</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Palopo</a>
                  </li>
                  <li>
                    <a href="blog-list-01.html">Masamba</a>
                  </li>
                  <li>
                    <a href="blog-list-02.html">Malili</a>
                  </li>
                </ul>

                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>
            </ul>
          </div>

          {/* <!--  --> */}
          <div className="wrap-logo container">
            {/* <!-- Logo desktop -->		 */}
            <div className="logo">
              <NavLink to="/">
                <img src={logoImage} alt="LOGO" />
              </NavLink>
            </div>

            {/* <!-- Banner --> */}
            <div className="banner-header">
              <img src={logoBanner} alt="IMG" />
            </div>
          </div>

          {/* <!--  --> */}
          <div className="wrap-main-nav">
            <div className="main-nav">
              {/* <!-- Menu desktop --> */}
              <nav className="menu-desktop">
                <NavLink to="/" className="logo-stick">
                  <img src={logoImage} alt="LOGO" />
                </NavLink>

                <ul className="main-menu">
                  <li className="main-menu-item">
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li className="mega-menu-item">
                    <NavLink to="/">News</NavLink>
                  </li>

                  <li>
                    <NavLink to="channel/pendidikan">Pendidikan</NavLink>
                  </li>

                  <li className="mega-menu-item">
                    <NavLink to="/channel/ekonomi">Ekonomi</NavLink>
                  </li>

                  <li className="mega-menu-item">
                    <NavLink to="/channel/hukum">Hukum</NavLink>
                  </li>

                  <li className="mega-menu-item">
                    <NavLink to="/channel/pemerintahan">Pemerintahan</NavLink>
                  </li>

                  <li className="menu-scroll">
                    <a href="/">Daerah</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="category-01.html">Luwu Timur</a>
                      </li>
                      <li>
                        <a href="category-02.html">Luwu Utara</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Palopo</a>
                      </li>
                      <li>
                        <a href="blog-list-01.html">Masamba</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
