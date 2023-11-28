import React from "react";
import product1 from "../../assets/img/product/pr1.jpg";
import product2 from "../../assets/img/product/pr2.jpg";
import product3 from "../../assets/img/product/pr3.jpeg";
import { useEffect, useState } from "react";
export default function CartComponent({ steps, setSteps, idx, setSelected }) {
    const items = [
        {
            name: "Đầm Trắng - Mẫu 01",
            image: product1,
            old_price: 238000,
            new_price: 119000,
            quantity: 2,
        },
        {
            name: "Áo Dài Trắng Lụa Trơn",
            image: product2,
            old_price: 238000,
            new_price: 119000,
            quantity: 1,
        },
        {
            name: "Đầm Trắng - Mẫu 02",
            image: product3,
            old_price: 238000,
            new_price: 119000,
            quantity: 1,
        },
    ];

    const [itemsData, setItemsData] = useState(items);

    const increaseQuantity = (idx) => {
        const updatedItems = [...itemsData];
        updatedItems[idx].quantity++;
        setItemsData(updatedItems);
        console.log(updatedItems);
    };

    const decreaseQuantity = (idx) => {
        const updatedItems = [...itemsData];
        if (updatedItems[idx].quantity > 0) {
            updatedItems[idx].quantity--;
        }
        setItemsData(updatedItems);
        console.log(updatedItems);
    };

    const handleClick = () => {
        setSelected(idx + 1);
        steps[idx + 1].active = true;
        setSteps(steps);
    };
    return (
        <React.Fragment>
            <div className="container">
                <table className="table border">
                    <thead>
                        <tr>
                            <th className="col-md-1"></th>
                            <th className="product" style={{fontSize: 16, fontWeight: 700, color: "#333333" }}>Sản Phẩm</th>
                            <th className="unit-price" style={{fontSize: 16, fontWeight: 700, color: "#333333", textAlign: "center"}}>Đơn giá</th>
                            <th className="quantity" style={{fontSize: 16, fontWeight: 700, color: "#333333", textAlign: "center"}}>Số lượng</th>
                            <th className="total-price-cart" style={{fontSize: 16, fontWeight: 700, color: "#333333", textAlign: "center"}}>Thành tiền</th>
                            <th className="operation" style={{fontSize: 16, fontWeight: 700, color: "#333333", textAlign: "center"}}>Thao tác</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {itemsData.map((item, idx) => (
                            <tr key={idx} style={{borderBottom: "1px solid #dddddd", }}>
                                <td className="align-middle text-center">
                                    <div style={{ height: "100%" }} className=" container d-flex justify-content-center">
                                        <input style={{ height: 20 }} type="checkbox" className=" check_cart__input" />
                                    </div>
                                </td>
                                <td className="d-flex">
                                    <div className="product-img">
                                        <img width={120} src={item.image} alt="" />
                                    </div>
                                    <div className="pl-2">
                                        <div className="text-title">
                                            <p style={{ color: "#333333", fontWeight: 600, fontSize: 16, }}>{item.name}</p>
                                        </div>
                                        <div className="text-type-size">
                                            <p style={{fontSize: 15, fontWeight: 500, color: "#666"}}>Phân loại: Trắng, Size M</p>
                                        </div>
                                        <div className="product-price">
                                            <div className="sale">
                                                <p style={{ fontSize: 15, fontWeight:500, color: "#E74B32" }}>Giảm giá 50%</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="d-flex">
                                        {/*  */}
                                        <div className="cost-price-container" 
                                        style={{display: "flex", margin: "auto", }}>
                                            <div className="cost-price">
                                                <p style={{ textDecoration: "line-through", fontSize: 16, fontWeight: 500, color: "#333333"}}>
                                                    {item.old_price.toLocaleString("vi-VN") + "đ"}
                                                </p>
                                            </div>
                                            <div className="pl-2">
                                                <p style={{ fontSize: 18, fontWeight: 600, color: "#333333" }}>
                                                    {item.new_price.toLocaleString("vi-VN") + "đ"}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="d-flex" style={{ gap: 3 }}>
                                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flex: 1, }}>
                                            <button
                                                onClick={() => decreaseQuantity(idx)}
                                                className="btn"
                                                style={{ cursor: "pointer", backgroundColor: "#ffffff", border: "1px solid #EDEDED", marginRight: 4, height: 38 }}
                                            >
                                                <i className="fa-sharp fa-solid fa-minus"></i>
                                            </button>
                                            <input
                                                style={{fontSize: 16, fontWeight: 500, color: "#333333", textAlign: "center", padding: 2, height: 38, backgroundColor: "#ffffff",  }}
                                                // type="number"
                                                className="col-2 align-center"
                                                min="0"
                                                max="999"
                                                onInput="null"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button
                                                onClick={() => increaseQuantity(idx)}
                                                style={{ cursor: "pointer", backgroundColor: "#ffffff", border: "1px solid #EDEDED",  marginLeft: 4,  height: 38 }}
                                                className="btn"
                                            >
                                                <i className="fa-sharp fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-center">
                                    <p style={{ fontSize: 18, color: "#00BBA6",fontWeight: 600 }}>
                                        {(item.new_price * item.quantity).toLocaleString("vi-VN") + "đ"}
                                    </p>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="option-crud__cart" style={{ marginTop: -15 }}>
                                        <button className="btn btn-hover-red" style={{ fontSize: 16, fontWeight: 600, }}>
                                            Xoá
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div
            className=" p-3 d-flex align-items-center justify-content-between"
            style={{ textAlign: "center", boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)" }}
        >
            {/* <div className="col-md-2 "> */}
            <input style={{ height: 20 }} className="col-1" type="checkbox" name="check_all" />
            {/* </div> */}
    
            <p className="mb-0" style={{fontSize: 16, fontWeight: 700, color: "#333333"}}>
                Chọn Tất Cả <span>(3)</span>
            </p>
    
            {/* <p className="mb-0 btn" style={{fontSize: 16, fontWeight: 700, color: "#333333", cursor: "pointer"}}>Xóa Tất Cả</p> */}
            <button className="btn btn-hover-red" style={{ fontSize: 16, fontWeight: 700, }}>
                    Xóa tất cả                        
            </button>                   
            <p className="mb-0" style={{fontSize: 16, fontWeight: 700, color: "#333333"}}>
                Tổng Thanh Toán <span>(2 Sản Phẩm):&nbsp;</span>
            </p>
    
            <p className="mb-0" style={{ fontSize: 22, fontWeight: 700, color: "#E74B32" }}>
                357.000đ
            </p>
    
            <button onClick={() => handleClick()} className="btn btn-active-red col-md-3" 
            style={{height: 40, fontSize: 18, fontWeight: 700 }}>
                Đặt Hàng
            </button>
        </div>
        </React.Fragment>
    );
}
