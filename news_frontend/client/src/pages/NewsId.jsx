import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Api Backend News
import { getNews } from '../api/Api';

function NewsId() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await getNews();
      setNews(res.data);
      // console.log(res);
    };
    fetchNews();
  }, []);

  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div className="container">
        <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
          <div className="f2-s-1 p-r-30 m-tb-6">
            <Link to="/" className="breadcrumb-item f1-s-3 cl9">
              Home
            </Link>
            <a href="blog-list-01.html" className="breadcrumb-item f1-s-3 cl9">
              Blog
            </a>
            {news.map(
              (content: { id_berita: number, judul: string }, index) =>
                index === 2 && (
                  <span
                    className="breadcrumb-item f1-s-3 cl9"
                    key={content.id_berita}
                  >
                    {content.judul}
                  </span>
                )
            )}
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

      {/* <!-- Content --> */}
      <section className="bg0 p-b-140 p-t-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 p-b-30">
              <div className="p-r-10 p-r-0-sr991">
                {/* <!-- Blog Detail --> */}
                <div className="p-b-70">
                  <a
                    href="/"
                    className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase"
                  >
                    Technology
                  </a>

                  {news.map(
                    (content: { id_berita: number, judul: string }, index) =>
                      index === 2 && (
                        <h3
                          className="f1-l-3 cl2 p-b-16 p-t-33 respon2"
                          key={content.id_berita}
                        >
                          {content.judul}
                        </h3>
                      )
                  )}

                  <div className="flex-wr-s-s p-b-40">
                    <span className="f1-s-3 cl8 m-r-15">
                      <a href="/" className="f1-s-4 cl8 hov-cl10 trans-03">
                        by John Alvarado
                      </a>

                      <span className="m-rl-3">-</span>

                      <span>Feb 18</span>
                    </span>

                    <span className="f1-s-3 cl8 m-r-15">5239 Views</span>

                    <a href="/" className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
                      0 Comment
                    </a>
                  </div>

                  <div className="wrap-pic-max-w p-b-30">
                    <img src="assets/images/blog-list-01.jpg" alt="IMG" />
                  </div>

                  <p className="f1-s-11 cl6 p-b-25">
                    Curabitur volutpat bibendum molestie. Vestibulum ornare
                    gravida semper. Aliquam a dui suscipit, fringilla metus id,
                    maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae,
                    condimentum in orci. Integer eu sodales dolor. Maecenas
                    elementum arcu eu convallis rhoncus. Donec tortor sapien,
                    euismod a faucibus eget, porttitor quis libero.
                  </p>

                  {/* <!-- Tag --> */}
                  <div className="flex-s-s p-t-12 p-b-15">
                    <span className="f1-s-12 cl5 m-r-8">Tags:</span>

                    <div className="flex-wr-s-s size-w-0">
                      <a href="/" className="f1-s-12 cl8 hov-link1 m-r-15">
                        Streetstyle
                      </a>

                      <a href="/" className="f1-s-12 cl8 hov-link1 m-r-15">
                        Crafts
                      </a>
                    </div>
                  </div>

                  {/* <!-- Share --> */}
                  <div className="flex-s-s">
                    <span className="f1-s-12 cl5 p-t-1 m-r-15">Share:</span>

                    <div className="flex-wr-s-s size-w-0">
                      <a
                        href="/"
                        className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-facebook-f m-r-7"></i>
                        Facebook
                      </a>

                      <a
                        href="/"
                        className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-twitter m-r-7"></i>
                        Twitter
                      </a>

                      <a
                        href="/"
                        className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-google-plus-g m-r-7"></i>
                        Google+
                      </a>

                      <a
                        href="/"
                        className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                      >
                        <i className="fab fa-pinterest-p m-r-7"></i>
                        Pinterest
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Leave a comment --> */}
                <div>
                  <h4 className="f1-l-4 cl3 p-b-12">Leave a Comment</h4>

                  <p className="f1-s-13 cl8 p-b-40">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form>
                    <textarea
                      className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20"
                      name="msg"
                      placeholder="Comment..."
                    ></textarea>

                    <input
                      className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />

                    <input
                      className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                      type="text"
                      name="email"
                      placeholder="Email*"
                    />

                    <input
                      className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                      type="text"
                      name="website"
                      placeholder="Website"
                    />

                    <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-md-10 col-lg-4 p-b-30">
              <div className="p-l-10 p-rl-0-sr991 p-t-70">
                {/* <!-- Category --> */}
                <div className="p-b-60">
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Kategori</h3>
                  </div>

                  <ul className="p-t-35">
                    <li className="h  ow-bor3 p-rl-4">
                      <a
                        href="/"
                        className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13"
                      >
                        Fashion
                      </a>
                    </li>

                    <li className="how-bor3 p-rl-4">
                      <a
                        href="/"
                        className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13"
                      >
                        Beauty
                      </a>
                    </li>

                    <li className="how-bor3 p-rl-4">
                      <a
                        href="/"
                        className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13"
                      >
                        Street Style
                      </a>
                    </li>

                    <li className="how-bor3 p-rl-4">
                      <a
                        href="/"
                        className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13"
                      >
                        Life Style
                      </a>
                    </li>

                    <li className="how-bor3 p-rl-4">
                      <a
                        href="/"
                        className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13"
                      >
                        DIY & Crafts
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Archive --> */}
                <div className="p-b-37">
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Archive</h3>
                  </div>

                  <ul className="p-t-32">
                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>July 2018</span>

                        <span>(9)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>June 2018</span>

                        <span>(39)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>May 2018</span>

                        <span>(29)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>April 2018</span>

                        <span>(35)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>March 2018</span>

                        <span>(22)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>February 2018</span>

                        <span>(32)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>January 2018</span>

                        <span>(21)</span>
                      </a>
                    </li>

                    <li className="p-rl-4 p-b-19">
                      <a
                        href="/"
                        className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03"
                      >
                        <span>December 2017</span>

                        <span>(26)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Popular Posts --> */}
                <div className="p-b-30">
                  <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">Berita Populer</h3>
                  </div>

                  <ul className="p-t-35">
                    <li className="flex-wr-sb-s p-b-30">
                      <a
                        href="/"
                        className="size-w-10 wrap-pic-w hov1 trans-03"
                      >
                        <img
                          src="assets/images/popular-post-04.jpg"
                          alt="IMG"
                        />
                      </a>

                      <div className="size-w-11">
                        <h6 className="p-b-4">
                          <a
                            href="blog-detail-02.html"
                            className="f1-s-5 cl3 hov-cl10 trans-03"
                          >
                            Donec metus orci, malesuada et lectus vitae
                          </a>
                        </h6>

                        <span className="cl8 txt-center p-b-24">
                          <a href="/" className="f1-s-6 cl8 hov-cl10 trans-03">
                            Music
                          </a>

                          <span className="f1-s-3 m-rl-3">-</span>

                          <span className="f1-s-3">Feb 18</span>
                        </span>
                      </div>
                    </li>

                    <li className="flex-wr-sb-s p-b-30">
                      <a
                        href="/"
                        className="size-w-10 wrap-pic-w hov1 trans-03"
                      >
                        <img
                          src="assets/images/popular-post-05.jpg"
                          alt="IMG"
                        />
                      </a>

                      <div className="size-w-11">
                        <h6 className="p-b-4">
                          <a
                            href="blog-detail-02.html"
                            className="f1-s-5 cl3 hov-cl10 trans-03"
                          >
                            Donec metus orci, malesuada et lectus vitae
                          </a>
                        </h6>

                        <span className="cl8 txt-center p-b-24">
                          <a href="/" className="f1-s-6 cl8 hov-cl10 trans-03">
                            Game
                          </a>

                          <span className="f1-s-3 m-rl-3">-</span>

                          <span className="f1-s-3">Feb 16</span>
                        </span>
                      </div>
                    </li>

                    <li className="flex-wr-sb-s p-b-30">
                      <a
                        href="/"
                        className="size-w-10 wrap-pic-w hov1 trans-03"
                      >
                        <img
                          src="assets/images/popular-post-06.jpg"
                          alt="IMG"
                        />
                      </a>

                      <div className="size-w-11">
                        <h6 className="p-b-4">
                          <a
                            href="blog-detail-02.html"
                            className="f1-s-5 cl3 hov-cl10 trans-03"
                          >
                            Donec metus orci, malesuada et lectus vitae
                          </a>
                        </h6>

                        <span className="cl8 txt-center p-b-24">
                          <a href="/" className="f1-s-6 cl8 hov-cl10 trans-03">
                            Celebrity
                          </a>

                          <span className="f1-s-3 m-rl-3">-</span>

                          <span className="f1-s-3">Feb 12</span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <!-- Tag --> */}
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsId;
