import React from "react";
import product1 from "../assets/img/product/pr1.png";
import {dataProduct} from "../data/product";
export default function FavoriteProduct() {
    return (
        <>
            <div className="container col-md-8">
                {Array.from({length: 2}).map((_,idx)=>(
                    <div key={idx} className="p-3 item border">
                    <div className="content_text d-flex justify-content-between">
                        <div className="d-flex">
                            <img width={120} src={dataProduct[idx].img} alt="" />

                            <div className="ml-2 info-product">
                                <div className="text-title prod_name">
                                    <p style={{
                                        fontStyle: 'normal',
                                        fontSize: 16,
                                        fontWeight: 600,
                                    }}>{dataProduct[idx].name}</p>
                                </div>
                               
                                <div className="product-price">
                                    <div className="cost-price old_price d-flex" style={{gap: 5}}>
                                        <p style={{
                                            textDecoration:"line-through",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: 15,
                                        }}>{dataProduct[idx].oldPrice}</p>
                                        <p style={{
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: 15,
                                            color: "#E74B32",
                                        }}>- 50%</p>
                                    </div>
                                    
                                </div>
                                <div className="price-sale">
                                    <p style={{
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: 18,
                                    }}>{dataProduct[idx].price}</p>
                                </div>
                                <p style={{
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: 13,
                                 }}>Còn lại: 29</p>
                            </div>
                        </div>

                        <div className=" pr-3 row flex-column justify-content-between align-items-end">
                            <input type="button" style={{fontSize: 16, fontWeight: 600, cursor: "pointer", color: "#00BBA6"}} className="text-right p-0 btn btn-link col-md-4" value="Xoá" />

                            <div className="option-btn right">
                                <button
                                    className="btn btn-active-red"
                                    style={{
                                        width: 220,
                                        height: 38,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        border: "none",
                                        backgroundColor: "#00BBA6",
                                    }}
                                >
                                    Thêm Vào Giỏ Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                

            </div>
        </>
    );
}
