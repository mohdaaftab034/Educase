import { useState } from "react";
import "../styles/auth.css";

export default function Login({ navigate, onLogin }) {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleButtonClick = () => {
        if (form.email && form.password) {
            onLogin(form);
        }
    };

    return (
        <div className="phone-frame auth-frame">
            <div className="auth-content">
                <h1 className="auth-title">
                    Signin to your<br />
                    PopX account
                </h1>
                <p className="auth-subtitle">
                    Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit,
                </p>

                <form className="auth-form">
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Email Address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={form.email}
                            onChange={handleChange}
                            className="
                              w-full
                              h-12
                              rounded-md
                              border
                              border-gray-300
                              px-3
                              py-3
                              text-sm
                              outline-none
                              transition-all
                              focus:border-violet-500
                              focus:ring-2
                              focus:ring-violet-200
                            "
                        />
                    </div>

                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={form.password}
                            onChange={handleChange}
                            className="
                              w-full
                              h-12
                              rounded-md
                              border
                              border-gray-300
                              px-3
                              py-3
                              text-sm
                              outline-none
                              transition-all
                              focus:border-violet-500
                              focus:ring-2
                              focus:ring-violet-200
                            "
                        />
                    </div>
                </form>

                <button
                    onClick={handleButtonClick}
                    className="btn-submit fixed bottom-4 left-0 right-0 mt-auto h-12 pb-10 px-3"
                    disabled={!form.email || !form.password}
                >
                    Login
                </button>
            </div>
        </div>
    );
}