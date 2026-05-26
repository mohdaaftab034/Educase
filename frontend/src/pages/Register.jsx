import { useState } from "react";
import "../styles/auth.css";

export default function Register({ navigate, onRegister }) {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleButtonClick = () => {
        if (form.fullName && form.email) {
            onRegister(form);
        }
    };

    return (
        <div className="phone-frame auth-frame relative h-screen max-h-[812px] bg-white pb-24 overflow-y-auto">

            <div className="auth-content gap-4 px-5 pt-10">
                <h1 className="auth-title text-[28px] font-bold text-[#1d1d1d] mb-6">
                    Create your<br />
                    PopX account
                </h1>

                <form className="auth-form flex flex-col gap-6">

                    {/* Full Name */}
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Marry Doe"
                            value={form.fullName}
                            onChange={handleChange}
                            className="w-full h-12 rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Marry Doe"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full h-12 rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Marry Doe"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full h-12 rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-violet-600 font-medium">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Marry Doe"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full h-12 rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Company Name */}
                    <div className="relative w-full">
                        <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#b0b0b0] font-medium">
                            Company name
                        </label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Marry Doe"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full h-12 rounded-md border border-gray-300 px-3 py-3 text-sm outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                        />
                    </div>

                    {/* Radio Group */}
                    <div className="field-group flex flex-col gap-2 mt-2">
                        <label className="field-label text-sm font-medium">Are you an Agency?<span className="text-red-500">*</span></label>
                        <div className="radio-group flex gap-6">
                            <label className="radio-label flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value="yes"
                                    checked={form.isAgency === "yes"}
                                    onChange={handleChange}
                                    className="radio-input w-4 h-4 accent-violet-600"
                                />
                                Yes
                            </label>
                            <label className="radio-label flex items-center gap-2 cursor-pointer text-sm">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value="no"
                                    checked={form.isAgency === "no"}
                                    onChange={handleChange}
                                    className="radio-input w-4 h-4 accent-violet-600"
                                />
                                No
                            </label>
                        </div>
                    </div>
                </form>

            </div>

            <div className="absolute bottom-4 left-0 w-full px-5 bg-white pt-2">
                <button
                    onClick={handleButtonClick}
                    type="button"
                    className="w-full h-12 bg-[#6c25ff] text-white font-medium text-[15px] rounded-md shadow-sm transition-all active:scale-[0.99]"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}