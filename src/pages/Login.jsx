import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const { login, isAuthenticated } = useAuthContext();
    const [isLoginFailed, setIsLoginFailed] = useState(false);

    const navigate = useNavigate();

    const phoneRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLogin = () => {
        const phone = phoneRef.current.value;
        const password = passwordRef.current.value;
        if (phone === "0967177830" && password === "a12345678") {
            setIsLoginFailed(false);
            login(phone, password);
            console.log(isAuthenticated);
            toast.success("Đăng nhập thành công");
            navigate("/");
        } else {
            phoneRef.current.value = "";
            phoneRef.current.focus();
            passwordRef.current.value = "";
            setIsLoginFailed(true);
        }
    };
    return (
        <div className="bg-login">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <div className="card-log">
                        <h5>Đăng nhập</h5>
                        <p>
                            Bạn chưa có tài khoản?
                            <Link to={"/register"}>
                                <span style={{ color: "#00BBA6" }}>Đăng ký ngay </span>
                            </Link>
                        </p>

                        <div className="login_form_container">
                            <div className="account_login_form">
                                <form action="#">
                                    <br />
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>Số điện thoại</b>
                                        </label>
                                        <input
                                            ref={phoneRef}
                                            type="text"
                                            name="first-name"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>
                                            <b>Mật khẩu</b>
                                        </label>
                                        <input
                                            ref={passwordRef}
                                            type="password"
                                            name="first-name"
                                            placeholder="Nhập mật khẩu"
                                        />
                                        <div className="d-flex"></div>
                                        <p style={{ float: "right", cursor: "pointer" }}>
                                            <b>Quên mật khẩu?</b>
                                        </p>
                                    </div>

                                    <div className="d-flex align-items-center mt-3">
                                        <input type="checkbox" className="item-checkbox" style={{ height: "15px" }} />
                                        <p>Lưu thông tin đăng nhập</p>
                                    </div>
                                    {isLoginFailed && (
                                        <p
                                            style={{
                                                color: "#E74B32",
                                                fontStyle: "normal",
                                                fontWeight: "bold",
                                                fontSize: 15,
                                            }}
                                        >
                                            Sai tài khoản hoặc mật khẩu
                                        </p>
                                    )}
                                    <div onClick={handleLogin} className="bt-main">
                                        <b>Đăng nhập</b>
                                    </div>
                                </form>
                            </div>

                            <div className="lihe">
                                <p>Hoặc</p>
                            </div>
                            <div className="list-bt">
                                <div className="btn-ne">
                                    <i className="fa-brands fa-facebook"></i>
                                    <div style={{fontWeight: 500,}}>Facebook</div>
                                </div>
                                <div className="btn-ne">
                                    <i className="fa-brands fa-google"></i>
                                    <div style={{fontWeight: 500,}}>Google</div>
                                </div>
                            </div>
                            <div className="text-center" style={{fontWeight: 500,}}>
                                Bằng việc chọn Đăng Nhập, bạn xác nhận đã đọc &<br />
                                đồng ý với các
                                <span style={{ fontWeight: 500, color: "#00BBA6", cursor: "pointer" }}>
                                    {" "}
                                    Chính Sách Bảo Mật & Chia Sẻ Thông Tin
                                </span>
                                <br />
                                <span style={{ fontWeight: 500, color: "red",}}>của Beauty Outfits.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
