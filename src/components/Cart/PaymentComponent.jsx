import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { dataProduct } from "../../data/product";

export default function PaymentComponent({ steps, setSteps, idx, setSelected }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleClick = () => {
        setSelected(idx + 1);
        steps[idx + 1].active = true;
        setSteps(steps);
    };

    const handlePrevious = () => {
        setSelected(idx - 1);
        steps[idx].active = false;
        setSteps(steps);
    }
    return (
        <div className="row p-3">
            <div className="pay" style={{ width: "100%", padding: 30 }}>
                <div className="pay_left left col-8 p-0">
                    <div className="border section_container">
                        <div className="address">
                            <div className="title-content d-flex justify-content-between" style={{padding: "16px 20px", borderBottom: "1px solid #dddddd"}}>
                                <p
                                    style={{
                                        display: "flex",
                                        margin: 0,
                                        alignItems: "center",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: 20,
                                    }}
                                >
                                    Địa Chỉ Nhận Hàng
                                </p>

                                <a
                                    className="btn btn-text"
                                    style={{
                                        border: "none",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        color: "#00BBA6",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: 18,
                                    }}
                                >
                                    Thay đổi
                                </a>
                            </div>
                            <div className="content-txt" style={{padding: "20px 20px 16px"}}>
                                <div className="dislay-flex name-phone">
                                    <div className="name-customer padding-right-10">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                fontSize: 18,
                                            }}
                                        >
                                            Trần Thị Minh Uyên | 0967177830
                                        </p>
                                    </div>
                                </div>
                                <div className="txt-address">
                                    <p
                                        style={{
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: 18,
                                        }}
                                    >
                                        Địa chỉ: K02/12 Phan Hoành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-detail" style={{marginTop: 30}}>
                        <div className="table-wrapper">
                            <table className="cart mb-2" style={{ width: "100%" }}>
                                <thead className="table-head bg-table">
                                    <tr>
                                        <th className="product" style={{textAlign: "start", paddingLeft: 30}}>Sản Phẩm</th>
                                        <th className="quantity">Số Lượng</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>

                                <tbody className="mr-3">
                                    {Array.from({ length: 2 }).map((_, idx) => (
                                        <tr key={idx}>
                                            <td className="product" style={{margin: "20px 30px"}}>
                                                <div className="product-img">
                                                    <img src={dataProduct[idx].img} alt="" />
                                                </div>
                                                <div className="info-product">
                                                    <div className="text-title">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 600,
                                                                fontSize: 16,
                                                                color: "#333",
                                                            }}
                                                        >
                                                            {dataProduct[idx].name}
                                                        </p>
                                                    </div>
                                                    <div className="text-type-size">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 500,
                                                                fontSize: 15,
                                                                color: "#666"
                                                            }}
                                                        >
                                                            Phân loại: Trắng, Size M
                                                        </p>
                                                    </div>
                                                    <div className="product-price">
                                                        <div className="cost-price old_price">
                                                            <p
                                                                style={{
                                                                    fontStyle: "normal",
                                                                    fontWeight: 500,
                                                                    fontSize: 16,
                                                                    textDecoration: "line-through",
                                                                }}
                                                            >
                                                                {dataProduct[idx].oldPrice}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="price-sale">
                                                        <p
                                                            style={{
                                                                fontStyle: "normal",
                                                                fontWeight: 600,
                                                                fontSize: 18,
                                                            }}
                                                        >
                                                            {dataProduct[idx].price}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="quantity">
                                                <p
                                                    style={{
                                                        fontStyle: "normal",
                                                        fontWeight: 600,
                                                        fontSize: 18,
                                                        color: "#333"
                                                    }}
                                                >
                                                    {idx === 0 ? 1 : 1}
                                                </p>
                                            </td>
                                            <td className="into-money">
                                                <p
                                                    style={{
                                                        fontStyle: "normal",
                                                        fontWeight: 600,
                                                        fontSize: 18,
                                                        color: "#00BBA6",
                                                    }}
                                                >
                                                    119.000đ
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex" style={{ gap: 3 }}>
                        <div className="col-6 pl-0">
                            <p
                                style={{
                                    marginTop: 30, 
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: 16,
                                }}
                            >
                                Ngày Bắt Đầu Thuê
                            </p>
                            <div style={{border: "1px solid #dddddd"}}>
                                <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="col-6 pr-1">
                            <p
                                style={{
                                    marginTop: 30, 
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: 16,
                                }}
                            >
                                Ngày Trả Hàng
                            </p>
                            <div style={{border: "1px solid #dddddd"}}>
                                <DatePicker showIcon selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: 30}}>
                        <textarea
                            name="not"
                            id=""
                            cols="30"
                            rows="10"
                            style={{
                                width: " 100%",
                                height: "100px",
                                backgroundColor: "transparent",
                                fontSize: 20,
                                fontWeight: 500,
                                color: "#333",
                            }}
                            placeholder="Ghi chú: "
                        ></textarea>
                    </div>
                </div>

                {/* <!-- right --> */}
                <div className="pay-right right col-4" style={{padding: "0 0 0 30px"}}>
                    <div className="border section_container ">
                        <div>
                            <div className="title-content" style={{ padding: "16px 20px", borderBottom: "1px solid #dddddd" }}>
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Phương Thức Thanh Toán</p>
                            </div>
                            <div className="content-txt p-3" style={{marginLeft: 5,}}>
                                <form>
                                    <div className="d-flex align-items-center" style={{ gap: 10, margin: "5px 0 20px 0", }}>
                                        <input
                                            className="test"
                                            type="checkbox"
                                            value=""
                                            defaultChecked
                                            id="check1"
                                            style={{ height: 20, width: 20 }}
                                        />
                                        <label
                                            className="m-0"
                                            for="check1"
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                                color: "#333"
                                            }}
                                        >
                                            Thanh toán khi nhận hàng
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center" style={{ gap: 10, margin: "0 0 5px 0" }}>
                                        <input type="checkbox" value="" id="check2" style={{ height: 20, width: 20 }} />
                                        <label
                                            className="m-0"
                                            for="check2"
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                                color: "#333"
                                            }}
                                        >
                                            Chuyển khoản
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="border section_container" style={{marginTop: 30}}>
                        <div>
                            <div className="title-content">
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0 , padding: "16px 20px", borderBottom: "1px solid #dddddd"}}>Mã Giảm Giá</p>
                            </div>

                            <div className="form-group margin-020" style={{margin: 20}}>
                                <input placeholder="Nhập mã giảm giá" type="text" className="border form-control" style={{height: 50}}/>
                            </div>
                            <div className="otp-option margin-020" style={{margin: 20}}>
                                <button
                                    type="button"
                                    className="btn btn-active-red"
                                    style={{
                                        width: 168,
                                        height: 40,
                                        fontWeight: 700,
                                        fontSize: 18,
                                    }}
                                >
                                    Áp Dụng
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border section_container" style={{marginTop: 30}}>
                        <div>
                            <div className="title-content" style={{borderBottom: "1px solid #dddddd"}}>
                                <p style={{ fontSize: 20, fontWeight: 700, margin: 0, padding: "20px 30px"}}>Đơn Hàng</p>
                            </div>

                            <div className="all_bill">
                                <div className="d-flex justify-content-between" style={{padding: "20px 30px", borderBottom: "1px solid #dddddd"}}>
                                    <div className="title_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Tổng tiền hàng:
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Phí vận chuyển:
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            Khuyến mãi:
                                        </p>
                                    </div>
                                    <div className="value_bill" style={{display: "flex", flexDirection: "column", alignItems: "end"}}>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            238.000đ
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            15.000đ
                                        </p>
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            -10.000đ
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between" style={{padding: "20px 30px", }}>
                                    <div className="title_sum_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                fontSize: 18,
                                                margin: 0,
                                            }}
                                        >
                                            Tổng thanh toán:
                                        </p>
                                    </div>
                                    <div className="sum_value_bill">
                                        <p
                                            style={{
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                fontSize: 20,
                                                color: "#E74B32",
                                                margin: 0
                                            }}
                                        >
                                            243.000đ
                                        </p>
                                    </div>
                                </div>
                                <div style={{margin: "0 30px 30px"}}>
                                    <button
                                        onClick={() => handleClick()}
                                        className="btn btn-active-red"
                                        style={{ height: 40, fontSize: 18, fontWeight: 700, color: "#ffffff", width: "100%" }}
                                    >
                                        Đặt Hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <button className="btn" onClick={()=> handlePrevious()} style={{border:"none", backgroundColor:"transparent", color: "#00BBA6", cursor: "pointer", fontStyle: "normal", fontWeight:"bold", fontSize: 18}}>{"<<"} Quay lại</button>
            </div>
        </div>
    );
}
