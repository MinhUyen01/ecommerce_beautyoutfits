import ThieuNhi from "../assets/img/thieunhi.jpg";
import TruyenThong from "../assets/img/truyenthong.jpg";
import CacNuoc from "../assets/img/cacnuoc.jpg";
import HoaTrang from "../assets/img/hoatrang.jpg";
import ThuongNgay from "../assets/img/thuongngay.png";
import DuTiec from "../assets/img/dutiec.jpg";

import Quat from "../assets/img/quat.jfif";
import TramCai from "../assets/img/botramcaitoc.jfif";
import TuiXach from "../assets/img/tuixach.jfif";
import Dep from "../assets/img/giaydep.jpg";
import Cavat from "../assets/img/cavat_no.jfif";
import TocGia from "../assets/img/tocgia.jfif";

import Carousel from "react-bootstrap/Carousel";

import SpanNew from "../assets/img/cart/span-new.png";
import SpanHot from "../assets/img/cart/span-hot.png";

// import Product1 from "../assets/img/product/pr1.png";
// import Product2 from "../assets/img/product/pr2.png";
// import Product3 from "../assets/img/product/pr3.png";
// import Product4 from "../assets/img/product/pr4.png";
// import Product5 from "../assets/img/product/pr5.png";
// import Product6 from "../assets/img/product/pr6.png";
// import Product7 from "../assets/img/product/pr7.png";
// import Product8 from "../assets/img/product/pr8.png";
// import Product9 from "../assets/img/product/pr9.png";
// import Product10 from "../assets/img/product/pr10.png";
// import Product11 from "../assets/img/product/pr11.png";



// import SpanHot from "../assets/img/cart/span-hot.png";
import Product1 from "../assets/img/product/pr1.jpg";
import Product2 from "../assets/img/product/pr2.jpg";
import Product3 from "../assets/img/product/pr3.jpeg";
import Product4 from "../assets/img/product/pr4.jpg";
import Product5 from "../assets/img/product/pr5.jfif";
import Product6 from "../assets/img/product/pr6.jfif";
import Product7 from "../assets/img/product/pr7.jfif";
import Product8 from "../assets/img/product/pr8.jfif";
import Product9 from "../assets/img/product/pr9.jfif";
import Product10 from "../assets/img/product/pr10.jpg";
import Product11 from "../assets/img/product/pr11.jfif";
import Product12 from "../assets/img/product/pr12.jfif";

import Product13 from "../assets/img/product/pr13.jpg";
import Produc14 from "../assets/img/product/pr14.jpg";
import Produc15 from "../assets/img/product/pr15.jpg";

import slider2 from "../assets/img/slider/slider1.jpg";
import slider3 from "../assets/img/slider/slider2.jpeg";
import slider4 from "../assets/img/slider/slider3.jpg";
import { useCallback, useEffect, useRef, useState } from "react";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// rating
import { Rating } from "react-simple-star-rating";

//data
import { dataProduct } from "../data/product";
import { Link } from "react-router-dom";

const Home = () => {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    const next1 = () => {
        sliderRef1.current.slickNext();
    };

    const previous1 = () => {
        sliderRef1.current.slickPrev();
    };

    const next2 = () => {
        sliderRef2.current.slickNext();
    };

    const previous2 = () => {
        sliderRef2.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    };

    return (
        <>
            <div className="pos_home_section">
                <div className="row">
                    {/*banner slider start*/}
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    // style={{ height: 550 }}
                                    className="d-block w-100"
                                    src={slider2}
                                    alt="First slide"
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img className="d-block w-100" src={slider3} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img className="d-block w-100" src={slider4} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/*new product area start*/}
                <div className="new_product_area product_two mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Danh mục trang phục</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={ThieuNhi} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Thiếu Nhi</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TruyenThong} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Truyền Thống</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={CacNuoc} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Các Nước</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={HoaTrang} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Hóa Trang</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={ThuongNgay} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Thường Ngày</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={DuTiec} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Dự tiệc</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*new product area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Danh mục phụ kiện</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TocGia} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Tóc giả</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Cavat} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Cà vạt & nơ</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Dep} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Giày dép</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TuiXach} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Túi xách</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TramCai} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Trâm cài tóc</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Quat} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3 d-flex justify-content-center">
                                    <h3 className="product_title">
                                        <a href="">Quạt</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*banner area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title d-flex justify-content-between align-items-center">
                                <h3 className="mb-3">Sản phẩm mới</h3>
                                <div className="d-flex mb-3" style={{ textAlign: "center", gap: 8 }}>
                                    <button
                                        className="btn btn-sm"
                                        onClick={previous1}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        onClick={next1}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div> */}
                    <Slider ref={sliderRef1} {...settings}>
                        {dataProduct.map((product, idx) => (
                            <div key={idx} className="col-12">
                                <div className="single_product">
                                    <div className="product_thumb">
                                        <Link to={`/detail-product/${product.id}`}>
                                            <img src={product.img} alt="" />
                                        </Link>
                                        <div className="img_icone">
                                            <img src={SpanNew} alt="" />
                                        </div>
                                        <div className="product_action">
                                            <Link to={`/detail-product/${product.id}`}>
                                                <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product_content pt-2">
                                        <h3 className="product_title">
                                            <a href="">{product.name}</a>
                                        </h3>
                                        <div
                                            className="row align-items-center"
                                            style={{ marginLeft: 0, marginRight: 0 }}
                                        >
                                            <p
                                                className="old-price"
                                                style={{
                                                    textDecoration: "line-through",
                                                    display: "inline",
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {product.oldPrice}
                                            </p>
                                            <p
                                                style={{
                                                    display: "inline",
                                                    marginBottom: 0,
                                                    fontWeight: 500,
                                                    fontSize: 15,
                                                }}
                                            >
                                                - 50%
                                            </p>
                                        </div>
                                        <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                            {product.price}
                                        </span>

                                        <div className="d-flex" style={{ gap: 10 }}>
                                            <Rating
                                                size={15}
                                                initialValue={4}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                            <span style={{fontSize: 12, fontWeight: 500}}>Đã thuê: 76</span>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <ul>
                                            <li>
                                                <a href="#" title=" Thêm vào danh sách yêu thích ">
                                                    Thêm vào danh sách yêu thích
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* </div> */}
                </div>
                <div className="banner_area banner_two">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Product13} alt="" />
                                </a>
                                <div className="banner_title">
                                    <p>
                                        Giảm <span> 40%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Produc14} alt="" />
                                </a>
                                <div className="banner_title title_2">
                                    <p>
                                        Giảm <span> 50%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Produc15} alt="" />
                                </a>
                                <div className="banner_title title_3">
                                    <p>
                                        Giảm <span> 60%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*banner area end*/}
                {/*featured product area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title d-flex justify-content-between align-items-center">
                                <h3>Sản phẩm thuê nhiều</h3>
                                <div className="d-flex mb-3" style={{ textAlign: "center", gap: 8 }}>
                                    <button
                                        className="btn btn-sm"
                                        onClick={previous2}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button
                                        className="btn btn-sm"
                                        onClick={next2}
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: "#CCCCCC",
                                            color: "#FFFFFF",
                                            padding: "0px 10px",
                                            fontSize: 10,
                                            height: 22,
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row"> */}
                    <Slider ref={sliderRef2} {...settings}>
                        {dataProduct.map((product, idx) => (
                            <div key={idx} className="col-12">
                                <div key={idx} className="single_product">
                                    <div className="product_thumb">
                                        <Link to={`/detail-product/${product.id}`}>
                                            <img src={product.img} alt="" />
                                        </Link>
                                        <div className="hot_img">
                                            <img src={SpanHot} alt="" />
                                        </div>
                                        <div className="product_action">
                                            <Link to={`/detail-product/${product.id}`}>
                                                <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product_content pt-2">
                                        <h3 className="product_title">
                                            <a href="">{product.name}</a>
                                        </h3>
                                        <p
                                            className="old-price"
                                            style={{ textDecoration: "line-through", display: "inline", marginRight: 5 }}
                                        >
                                            {product.oldPrice}
                                        </p>
                                        <p
                                                style={{
                                                    display: "inline",
                                                    marginBottom: 0,
                                                    fontWeight: 500,
                                                    fontSize: 15,
                                                }}
                                            >
                                                - 50%
                                            </p>
                                        <br />
                                        <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                            {product.price}
                                        </span>

                                        <div className="d-flex" style={{ gap: 10 }}>
                                            <Rating
                                                size={15}
                                                initialValue={4}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                            <span style={{fontSize: 12, fontWeight: 500}}>Đã thuê: 76</span>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <ul>
                                            <li>
                                                <a href="#" title=" Thêm vào danh sách yêu thích ">
                                                    Thêm vào danh sách yêu thích
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default Home;
