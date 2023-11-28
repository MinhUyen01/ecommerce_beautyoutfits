import React, { useState } from "react";
export default function Profile() {
    return (
        <>
            <div
                className="row col-md-3 d-flex justify-content-center align-items-center "
                style={{ borderRight: "1px solid #dddddd" }}
            >
                <div className="mx-auto my-auto d-flex flex-column">
                    <i className="fa fa-user-circle-o mb-3" style={{ color: "#00BBA6", fontSize: 100 }} />
                    <button
                        type="button"
                        className="btn btn-active-darkgreen"
                        style={{ fontSize: 16, fontWeight: 600, color: "white", backgroundColor: "#00BBA6", height: 40 }}
                    >
                        Chọn Ảnh
                    </button>
                </div>
            </div>
            <div className="col-6 ml-3">
                <div>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>Nhập họ và tên</span>
                    <input
                        style={{ border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10 }}
                        value="Trần Thị Minh Uyên"
                    ></input>
                    <span style={{ cursor: "pointer", fontSize: 14, color: "#00BBA6", fontWeight: 500, }} className="float-right">
                            Thay đổi họ và tên
                    </span>
                </div>
                <div className="d-flex flex-row" style={{ gap: 4, marginTop: 30 }}>
                    <div className="col-md-6 pl-0 ">
                        <span style={{ fontSize: 16, fontWeight: 600 }}>Nhập số điện thoại</span>
                        <input
                            value="0967177830"
                            style={{ border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10 }}
                        ></input>
                        <span style={{ cursor: "pointer", fontSize: 14, color: "#00BBA6", fontWeight: 500, }} className="float-right">
                            Thay đổi số điện thoại
                        </span>
                    </div>
                    <div className="col-md-6 pr-0">
                        <span style={{ fontSize: 16, fontWeight: 600 }}>Email</span>
                        <input
                            style={{ border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10}}
                            value="uyentran99899@gmail.com"
                        ></input>
                        <span style={{ cursor: "pointer", fontSize: 14, color: "#00BBA6", fontWeight: 500  }} className="float-right">
                            Thay đổi email
                        </span>
                    </div>
                </div>
                <div>
                    <span style={{ fontSize: 16, fontWeight: 600, }}>Ngày sinh</span>
                    <div className="d-flex" style={{ gap: 10 }}>
                        <select
                            style={{ fontSize: 15, fontWeight: 500, border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10 }}
                            className="form-select col-md-3"
                            aria-label="Default select example"
                        >
                            {Array.from({ length: 31 }, (_, index) => (
                                <option key={index}>{index + 1}</option>
                            ))}
                        </select>
                        <select
                            style={{fontSize: 15, fontWeight: 500, border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10 }}
                            className="form-select col-md-3"
                            aria-label="Default select example"
                        >
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index}>{`Tháng ${index + 1}`}</option>
                            ))}
                        </select>
                        <select
                            style={{ fontSize: 15, fontWeight: 500, border: "1px solid #DDDDDD", backgroundColor: "#FFFFFF", marginTop: 10 }}
                            className="form-select col-md-3"
                            aria-label="Default select example"
                        >
                            {/* <option slected>{2001}</option> */}
                            {Array.from({ length: 100 }, (_, index) => (
                                <option key={index}>{2023 - index}</option>
                                // <option key={index}>{2023 - index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="d-flex flex-column" style={{marginTop: 30,}}>
                    <span style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>Giới tính</span>
                    <div className="d-flex" style={{ gap: 20, }}>
                        <div className="form-check">
                            <input
                                style={{ height: 15, }}
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                            />
                            <label className="form-check-label" for="male"style={{ fontSize: 16, fontWeight: 500, color: "#333"}}>
                                Nam
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                style={{ height: 15 }}
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                defaultChecked={true}
                            />
                            <label className="form-check-label" for="female" style={{ fontSize: 16, fontWeight: 500, color: "#333"}}>
                                Nữ
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                style={{ height: 15 }}
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                            />
                            <label className="form-check-label" for="female" style={{ fontSize: 16, fontWeight: 500, color: "#333"}}>
                                Khác
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="btn col-md-4 btn-active-darkgreen"
                            style={{ fontSize: 16, fontWeight: 600, backgroundColor: "#00BBA6", color: "white", height: 40 }}
                        >
                            Lưu Chỉnh Sửa
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
