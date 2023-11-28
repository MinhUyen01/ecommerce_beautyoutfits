import { useEffect, useState } from "react";
import Product1 from "../assets/img/product/pr1.jpg";
import Product2 from "../assets/img/product/pr2.jpg";
import { useNavigate } from "react-router-dom";

export default function OrderDetail() {

    const navigate = useNavigate();

    const handleExit = (e) => {
        e.preventDefault();
        navigate("/user/order");
    };

    return (
        <div className="container" style={{maxWidth: "75%"}}>
            <div className="container border mb-2" style={{padding: "12px 20px"}}>
                <span style={{ fontSize: 16, fontWeight: "bold" }}>Chi tiết đơn hàng #DH003 - </span>
                <span style={{ fontSize: 16, fontWeight: "bold", color: "#018576" }}>Giao hàng và trả hàng thành công</span>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{ gap: 10 }}>
                <div className="border" style={{ padding: "12px 20px", width: "49%", fontSize: 15, fontWeight: 500}}>
                    <span style={{ lineHeight: 2, fontSize: 16, fontWeight: "bold", textTransform: "uppercase"}}>Địa chỉ nhận hàng</span>
                    <br />
                    <span style={{ lineHeight: 1.8, fontSize: 16, fontWeight: 600 }}>Trần Thị Minh Uyên</span>
                    <br />
                    <span style={{lineHeight: 1.8, fontSize: 16, fontWeight: 500}}>Địa chỉ: K02/12 Phan Hành Sơn, Phường Mỹ An, Quận Ngũ hành Sơn, Đà Nẵng.</span>
                    <br />
                    <span style={{lineHeight: 1.8, fontSize: 16, fontWeight: 500}}>Điện thoại: 0967177830</span>
                </div>
                <div className="border" style={{ padding: "12px 20px", width: "49%", fontSize: 15, fontWeight: 500 }}>
                    <span style={{ lineHeight: 2, fontSize: 16, fontWeight: "bold", textTransform: "uppercase" }}>Hình thức giao hàng</span>
                    <br />
                    <span style={{ lineHeight: 1.8, fontSize: 16, fontWeight: 600 }}>Giao Hàng Nhanh</span>
                    <br />
                    <span style={{lineHeight: 1.8, fontSize: 16, fontWeight: 500 }}>Phí vận chuyển: 15.000đ</span>
                    <br />
                    <span style={{lineHeight: 1.8, fontSize: 16, fontWeight: 500 }}>Đã giao: 22/03/2023</span>
                    <br />
                    <span style={{lineHeight: 1.8, fontSize: 16, fontWeight: 500 }}>Đã trả: 25/03/2023</span>
                </div>
            </div>
            <table className="table" style={{marginBottom: 0}}>
                <thead style={{ backgroundColor: "#f2f2f2", border: "1px solid #dddddd" }}>
                    <tr>
                        <th scope="col" style={{padding: "20px 30px", fontSize: 16, fontWeight: 700}}>Sản phẩm</th>
                        <th style={{ textAlign: "center", padding: "20px 30px", fontSize: 16, fontWeight: 700}} scope="col">
                            Đơn giá
                        </th>
                        <th scope="col" style={{textAlign: "center", padding: "20px 30px", fontSize: 16, fontWeight: 700}}>Số lượng</th>
                        <th scope="col" style={{textAlign: "center", padding: "20px 30px", fontSize: 16, fontWeight: 700}}>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ border: "1px solid #DDDDDD" }}>
                        <td style={{padding: "20px 30px"}}>
                            <div className="product-detail" style={{ display: "flex" }}>
                                <div className="product-img">
                                    <img style={{ width: 120 }} src={Product1} alt="product img1" />
                                </div>
                                <div className="info-product p-2">
                                    <div className="text-title">
                                        <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p style={{fontSize: 15, marginBottom: 5, fontWeight: 500, color: "#666"}}>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="old_price d-flex">
                                        <p style={{ color: "#E74B32", fontSize: 15, fontWeight: 500, marginBottom: 5,}}> Giảm giá 50%</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="align-middle text-center">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p className="mr-2" style={{fontSize: 16, fontWeight: 500, color: "#666", textDecorationLine: "line-through", marginBottom: 0 }}>
                                    238.000đ{" "}
                                </p>
                                <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                            </div>
                        </td>
                        <td className="align-middle text-center" 
                            style={{ textAlign: "center",fontStyle: "normal",fontWeight: 600,fontSize: 18 }}>1
                        </td>
                        <td  className="align-middle text-center"
                        style={{ textAlign: "center", color: "#00BBA6",fontStyle: "normal",fontWeight: 600,fontSize: 18 }}>119.000đ
                        </td>
                    </tr>
                    <tr style={{ border: "1px solid #DDDDDD" }}>
                        <td style={{padding: "20px 30px"}}>
                            <div className="product-detail" style={{ display: "flex" }}>
                                <div className="product-img">
                                    <img style={{ width: 120 }} src={Product2} alt="product img1" />
                                </div>
                                <div className="info-product p-2">
                                    <div className="text-title">
                                        <p style={{fontSize: 16, fontWeight: 600, marginBottom: 5 }}>Đầm trắng - Mẫu 01</p>
                                    </div>
                                    <div className="text-type-size">
                                        <p style={{fontSize: 15, marginBottom: 5, fontWeight: 500, color: "#666"}}>Phân loại: Trắng, Size M</p>
                                    </div>
                                    <div className="old_price d-flex">
                                        <p style={{ color: "#E74B32", fontSize: 15, fontWeight: 500, marginBottom: 5, }}> Giảm giá 50%</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="align-middle text-center">
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p className="mr-2" style={{ fontSize: 16, fontWeight: 500, color: "#666", textDecorationLine: "line-through", marginBottom: 0 }}>
                                    238.000đ{" "}
                                </p>
                                <p style={{ fontWeight: 600, marginBottom: 0, fontSize: 18 }}>199.000đ</p>
                            </div>
                        </td>
                        <td  className="align-middle text-center" 
                            style={{ textAlign: "center",fontStyle: "normal", fontWeight: 600, fontSize: 18 }}>1</td>
                        <td  className="align-middle text-center"
                            style={{ textAlign: "center", color: "#00BBA6",fontStyle: "normal", fontWeight: 600, fontSize: 18, }}>119.000đ</td>
                    </tr>
                </tbody>
            </table>

            <div className="container d-flex justify-content-end mb-3" style={{ padding: 20, gap: 20, border: "1px solid #dddddd", borderTop: "none"}}>
                <div className="col-col-md-5 d-flex flex-column gap-3">
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Tổng tiền hàng:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Phí vận chuyển:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Mã giảm giá: </span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Tổng thanh toán:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Phương thức thanh toán:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Ngày bắt đầu thuê:</span>
                    <br />
                    <span style={{ fontSize: 18, fontFamily: "Quicksand",fontStyle: "normal", fontWeight: 500 }}>Ngày trả hàng:</span>
                </div>
                <div className=" col-col-md-5 d-flex flex-column gap-3 float-right">
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        238.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        15.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 500 }}>
                        -10.000đ
                    </span>
                    <br />
                    <span
                        className="align-self-end"
                        style={{ color: "#E74B32", fontSize: 20, float: "right",fontStyle: "normal", fontWeight: 700, }}
                    >
                        243.000đ
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 600 }}>
                        Thanh toán khi nhận hàng
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 600 }}>
                        22/03/2023
                    </span>
                    <br />
                    <span className="align-self-end" style={{ fontSize: 18, fontFamily: "Quicksand", float: "right",fontStyle: "normal", fontWeight: 600 }}>
                        25/03/2023
                    </span>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button
                    onClick={(e) => handleExit(e)}
                    className="btn btn-lg btn-link"
                    style={{ cursor: "pointer", alignItems: "center", color: "#018576", fontSize: 16, fontWeight: 600 }}
                >
                    <i style={{ color: "#018576" }} className="fa-solid fa-chevron-left mr-1"></i>
                    Quay lại
                </button>
                <div className="btn-option d-flex" style={{ float: "right", gap: 10 }}>
                    <button
                        className="btn btn-active-greyish"
                        style={{ height: 38, width: 190, alignItems: "center", fontSize: 16, fontWeight: 700,backgroundColor:"transparent", border: "1px solid #333333", cursor:"pointer" }}
                    >
                        Liên hệ
                    </button>
                    <button
                        className="btn btn-active-greyish"
                        style={{ height: 38, width: 190, alignItems: "center", fontSize: 16, fontWeight: 700,backgroundColor:"transparent", border: "0.3px solid #333333", cursor:"pointer"  }}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Xác nhận huỷ
                    </button>
                </div>
            </div>

            {/** MODAL */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center" style={{ display: "block" }}>
                            <h5 className="modal-title" id="exampleModalLabel">
                                LÝ DO HUỶ
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item1"
                                    />
                                    <label style={{ fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item1">
                                        Tôi muốn cập nhật địa chỉ, số điện thoại
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item2"
                                    />
                                    <label style={{fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item2">
                                        Tôi muốn thay đổi/thêm mã giảm giá
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item3"
                                    />
                                    <label style={{ fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item3">
                                        {`Tôi muốn thay đổi sản phẩm (size, màu sắc, số lượng)`}
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item4"
                                    />
                                    <label style={{ fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item4">
                                        Tôi muốn thay đổi hình thức thanh toán
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item5"
                                    />
                                    <label style={{ fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item5">
                                        Tôi không có nhu cầu thuê nữa
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginBottom: 10, padding: "0px 20px" }}>
                                    <input
                                        style={{ position: "relative", width: "10%", height: 12 }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadio"
                                        id="item6"
                                    />
                                    <label style={{ fontSize: 15, fontWeight: 500, padding: 0 }} className="form-check-label" for="item6">
                                        Tôi không tìm thấy lý do phù hợp hơn
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button
                                style={{ height: 38, width: 190, backgroundColor: "#00BBA680", fontSize: 16, fontWeight: 600, color: "#ffffff", cursor: "pointer" }}
                                type="button"
                                className="btn"
                            >
                                Huỷ Đơn Hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
