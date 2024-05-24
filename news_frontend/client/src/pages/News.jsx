import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//Jquery
import $ from 'jquery';

function News() {
  useEffect(() => {
    /*==================================================================
      [ Respon tab01 ]*/
    // try {
    //   $('.tab01').each(function () {
    //     var tab01 = $(this);
    //     var navTabs = $(this).find('.nav-tabs');
    //     var dropdownMenu = $(tab01).find(
    //       '.nav-tabs>.nav-item-more .dropdown-menu'
    //     );
    //     var navItem = $(tab01).find('.nav-tabs>.nav-item');
    //     var navItemSize = [];
    //     var size = 0;
    //     var wNavItemMore = 0;
    //     $(window).on('load', function () {
    //       navItem.each(function () {
    //         size += $(this).width();
    //         navItemSize.push(size);
    //       });
    //       responTab01();
    //     });
    //     $(window).on('resize', function () {
    //       responTab01();
    //     });
    //     var responTab01 = function () {
    //       if (navTabs.width() <= navItemSize[navItemSize.length - 1] + 1) {
    //         $(tab01).find('.nav-tabs>.nav-item-more').removeClass('dis-none');
    //       } else {
    //         $(tab01).find('.nav-tabs>.nav-item-more').addClass('dis-none');
    //       }
    //       wNavItemMore = $(tab01)
    //         .find('.nav-tabs>.nav-item-more')
    //         .hasClass('dis-none')
    //         ? 0
    //         : $(tab01).find('.nav-tabs>.nav-item-more').width();
    //       for (var i = 0; i < navItemSize.length; i++) {
    //         if (navTabs.width() - wNavItemMore <= navItemSize[i] + 1) {
    //           $(tab01).find('.nav-tabs .nav-item').remove();
    //           for (var j = i - 1; j >= 0; j--) {
    //             $(navTabs).prepend($(navItem[j]).clone());
    //           }
    //           for (var j = i; j < navItemSize.length; j++) {
    //             $(dropdownMenu).append($(navItem[j]).clone());
    //           }
    //           break;
    //         } else {
    //           $(tab01).find('.nav-tabs .nav-item').remove();
    //           for (var j = i; j >= 0; j--) {
    //             $(navTabs).prepend($(navItem[j]).clone());
    //           }
    //         }
    //       }
    //     };
    //   });
    // } catch (er) {
    //   console.log(er);
    // }
    try {
      $('.slide100-txt').each(function () {
        var slideTxt = $(this);
        var itemSlideTxt = $(this).find('.slide100-txt-item');
        // Array with empty objects
        var data = new Array(itemSlideTxt.length).fill({});
        var count = 0;
        var animIn = $(this).data('in');
        var animOut = $(this).data('out');
        for (var i = 0; i < itemSlideTxt.length; i++) {
          data[i] = $(itemSlideTxt[i]).clone();
          $(data[i]).addClass('clone');
        }
        $(window).on('load', function () {
          $(slideTxt).find('.slide100-txt-item').remove();
          $(slideTxt).append($(data[0]).clone());
          $(slideTxt)
            .find('.slide100-txt-item.clone')
            .addClass(animIn + ' visible-true');
          count = 0;
        });
        setInterval(function () {
          $(slideTxt)
            .find('.slide100-txt-item.ab-t-l.' + animOut)
            .remove();
          $(slideTxt)
            .find('.slide100-txt-item')
            .addClass('ab-t-l ' + animOut);
          if (count >= data.length - 1) {
            count = 0;
          } else {
            count++;
          }
          console.log($(data[count]).text());
          $(slideTxt).append($(data[count]).clone());
          $(slideTxt)
            .find('.slide100-txt-item.clone')
            .addClass(animIn + ' visible-true');
        }, 3000);
      });
    } catch (er) {
      console.log(er);
    }
  });

  return (
    <>
      {/* <!-- Headline --> */}
      <div className="container">
        <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
          <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
            <span className="text-uppercase cl2 p-r-8">Trending Now:</span>

            <span
              className="dis-inline-block cl6 slide100-txt pos-relative size-w-0"
              data-in="fadeInDown"
              data-out="fadeOutDown"
            >
              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Interest rate angst trips up US equity bull market
              </span>

              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Designer fashion show kicks off Variety Week
              </span>

              <span className="dis-inline-block slide100-txt-item animated visible-false">
                Microsoft quisque at ipsum vel orci eleifend ultrices
              </span>
            </span>
          </div>

          <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
            <input
              className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
              type="text"
              name="search"
              placeholder="Search"
            />
            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
              <i className="zmdi zmdi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Feature post --> */}
      <section className="bg0">
        <div className="container">
          <div className="row m-rl--1">
            <div className="col-md-6 p-rl-1 p-b-2">
              <div
                className="bg-img1 size-a-3 how1 pos-relative"
                style={{
                  backgroundImage: 'url(assets/images/post-01.jpg)',
                }}
              >
                <Link
                  to="gaskan"
                  className="dis-block how1-child1 trans-03"
                ></Link>

                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                  <Link
                    to="/gaskan"
                    className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                  >
                    Business
                  </Link>

                  <h3 className="how1-child2 m-t-14 m-b-10">
                    <Link
                      to="/gaskan"
                      className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03"
                    >
                      Halo gess
                    </Link>
                  </h3>

                  <span className="how1-child2">
                    <span className="f1-s-4 cl11">Jack Sims</span>

                    <span className="f1-s-3 cl11 m-rl-3">-</span>

                    <span className="f1-s-3 cl11">Feb 16</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-rl-1">
              <div className="row m-rl--1">
                <div className="col-12 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-4 how1 pos-relative"
                    style={{
                      backgroundImage: 'url(assets/images/post-02.jpg)',
                    }}
                  >
                    <Link
                      to="/gaskan"
                      className="dis-block how1-child1 trans-03"
                    ></Link>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                      <Link
                        to="/gaskan"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Culture
                      </Link>

                      <h3 className="how1-child2 m-t-14">
                        <Link
                          to="/gaskan"
                          className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03"
                        >
                          London ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{
                      backgroundImage: 'url(assets/images/post-03.jpg)',
                    }}
                  >
                    <Link
                      to="/gaskan"
                      className="dis-block how1-child1 trans-03"
                    ></Link>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      <Link
                        to="/gaskan"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Life Style
                      </Link>

                      <h3 className="how1-child2 m-t-14">
                        <Link
                          to="/gaskan"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Pellentesque dui nibh, pellen-tesque ut dapibus ut
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-rl-1 p-b-2">
                  <div
                    className="bg-img1 size-a-5 how1 pos-relative"
                    style={{
                      backgroundImage: 'url(assets/images/post-04.jpg)',
                    }}
                  >
                    <Link
                      to="/gaskan"
                      className="dis-block how1-child1 trans-03"
                    ></Link>

                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                      <Link
                        to="/gaskan"
                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                      >
                        Sport
                      </Link>

                      <h3 className="how1-child2 m-t-14">
                        <Link
                          to="/gaskan"
                          className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03"
                        >
                          Motobike Vestibulum vene-natis purus nec nibh volutpat
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Latest --> */}
      <section className="bg0 p-t-60 p-b-35">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 p-b-20">
              <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                <h3 className="f1-m-2 cl3 tab01-title">Rekomendasi Berita</h3>
              </div>

              <div className="row p-t-35">
                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-01.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 18</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-02.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 16</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-03.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 15</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-04.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 13</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-05.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 10</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                  {/* <!-- Item latest -->	 */}
                  <div className="m-b-45">
                    <a
                      href="blog-detail-01.html"
                      className="wrap-pic-w hov1 trans-03"
                    >
                      <img src="assets/images/latest-06.jpg" alt="IMG" />
                    </a>

                    <div className="p-t-16">
                      <h5 className="p-b-5">
                        <a
                          href="blog-detail-01.html"
                          className="f1-m-3 cl2 hov-cl10 trans-03"
                        >
                          You wish lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl8">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 09</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10 col-lg-4">
              <div className="p-l-10 p-rl-0-sr991 p-b-20">
                <div>
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Most Popular</h3>
                  </div>

                  <ul className="p-t-35">
                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        1
                      </div>

                      <a
                        href="/"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                    </li>

                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        2
                      </div>

                      <a
                        href="/"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit consectetur non neque
                      </a>
                    </li>

                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        3
                      </div>

                      <a
                        href="/"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Nunc vestibulum, enim vitae condimentum volutpat
                        lobortis ante
                      </a>
                    </li>

                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        4
                      </div>

                      <a
                        href="/"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit justo consectetur non neque elementum
                      </a>
                    </li>

                    <li className="flex-wr-sb-s p-b-22">
                      <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                        5
                      </div>

                      <a
                        href="/"
                        className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                      >
                        Proin velit consectetur non neque
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Post --> */}
      <section className="bg0 p-t-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="p-b-20">
                {/* <!-- Pendidikan--> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl12 tab01-title">Pendidikan</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    <Link
                      to="/channel/pendidikan"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </Link>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab1-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-05.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  American live music lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-06.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Music
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-07.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Game
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-08.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Celebrity
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Ekonomi --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl13 tab01-title">Ekonomi</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    <Link
                      to="/channel/ekonomi"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </Link>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab2-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-10.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  Bitcoin lorem ipsum dolor sit amet consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Finance
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-11.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Small Business
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-12.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Economy
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-13.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Money & Markets
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Hukum --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl14 tab01-title">Hukum</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    <Link
                      to="/channel/hukum"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </Link>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab3-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Pemerintahan --> */}
                <div className="tab01 p-b-20">
                  <div className="tab01-head how2 how2-cl4 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    {/* <!-- Brand tab --> */}
                    <h3 className="f1-m-2 cl15 tab01-title">Pemerintahan</h3>

                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tab4-1"
                          role="tab"
                        >
                          All
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab4-2"
                          role="tab"
                        >
                          Hotels
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab4-3"
                          role="tab"
                        >
                          Flight
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab4-4"
                          role="tab"
                        >
                          Beachs
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tab4-5"
                          role="tab"
                        >
                          Culture
                        </a>
                      </li>

                      <li className="nav-item-more dropdown dis-none">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>

                        <ul className="dropdown-menu"></ul>
                      </li>
                    </ul>

                    <Link
                      to="/channel/pemerintahan"
                      className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                    >
                      View all
                      <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </Link>
                  </div>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab4-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab4-2" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab4-3" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab4-4" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-14.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab4-5" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-18.jpg" alt="IMG" />
                            </a>

                            <div className="p-t-20">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-m-3 cl2 hov-cl10 trans-03"
                                >
                                  You wish lorem ipsum dolor sit amet
                                  consectetur
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-4 cl8 hov-cl10 trans-03"
                                >
                                  Hotels
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 p-r-25 p-r-15-sr991">
                          {/* <!-- Item post -->	 */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-17.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Beachs
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 17</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-16.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Flight
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 16</span>
                              </span>
                            </div>
                          </div>

                          {/* <!-- Item post --> */}
                          <div className="flex-wr-sb-s m-b-30">
                            <a
                              href="blog-detail-01.html"
                              className="size-w-1 wrap-pic-w hov1 trans-03"
                            >
                              <img src="assets/images/post-15.jpg" alt="IMG" />
                            </a>

                            <div className="size-w-2">
                              <h5 className="p-b-5">
                                <a
                                  href="blog-detail-01.html"
                                  className="f1-s-5 cl3 hov-cl10 trans-03"
                                >
                                  Donec metus orci, malesuada et lectus vitae
                                </a>
                              </h5>

                              <span className="cl8">
                                <a
                                  href="/"
                                  className="f1-s-6 cl8 hov-cl10 trans-03"
                                >
                                  Culture
                                </a>

                                <span className="f1-s-3 m-rl-3">-</span>

                                <span className="f1-s-3">Feb 12</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-4">
              <div className="p-l-10 p-rl-0-sr991 p-b-20">
                {/* <!-- Video --> */}
                <div className="p-b-55">
                  <div className="how2 how2-cl4 flex-s-c m-b-35">
                    <h3 className="f1-m-2 cl3 tab01-title">Featured Video</h3>
                  </div>

                  <div>
                    <div className="wrap-pic-w pos-relative">
                      <img src="assets/images/video-01.jpg" alt="IMG" />

                      <button
                        className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03"
                        data-toggle="modal"
                        data-target="#modal-video-01"
                      >
                        <span className="fab fa-youtube"></span>
                      </button>
                    </div>

                    <div className="p-tb-16 p-rl-25 bg3">
                      <h5 className="p-b-5">
                        <a href="/" className="f1-m-3 cl0 hov-cl10 trans-03">
                          Music lorem ipsum dolor sit amet consectetur
                        </a>
                      </h5>

                      <span className="cl15">
                        <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                          by John Alvarado
                        </a>

                        <span className="f1-s-3 m-rl-3">-</span>

                        <span className="f1-s-3">Feb 18</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <!-- Tag --> */}
                <div className="p-b-55">
                  <div className="how2 how2-cl4 flex-s-c m-b-30">
                    <h3 className="f1-m-2 cl3 tab01-title">Tags</h3>
                  </div>

                  <div className="flex-wr-s-s m-rl--5">
                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Fashion
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Denim
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Crafts
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Magazine
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      News
                    </a>

                    <a
                      href="/"
                      className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                    >
                      Blogs
                    </a>
                  </div>
                </div>

                <div className="p-t-50">
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Stay Connected</h3>
                  </div>

                  <ul className="p-t-35">
                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="/"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-facebook-f"></span>
                      </a>

                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">6879 Fans</span>

                        <a
                          href="/"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Like
                        </a>
                      </div>
                    </li>

                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="/"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-twitter"></span>
                      </a>

                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">568 Followers</span>

                        <a
                          href="/"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Follow
                        </a>
                      </div>
                    </li>

                    <li className="flex-wr-sb-c p-b-20">
                      <a
                        href="/"
                        className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0"
                      >
                        <span className="fab fa-youtube"></span>
                      </a>

                      <div className="size-w-3 flex-wr-sb-c">
                        <span className="f1-s-8 cl3 p-r-20">
                          5039 Subscribers
                        </span>

                        <a
                          href="/"
                          className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03"
                        >
                          Subscribe
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
