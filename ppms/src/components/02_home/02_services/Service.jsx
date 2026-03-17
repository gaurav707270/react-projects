import React from "react";
import { FaLeaf, FaSprayCan, FaFileAlt, FaBug, FaShoppingCart, FaWallet, FaBox } from "react-icons/fa";

export const Service = () => {
    const services = [
        {
            icon: <FaLeaf />,
            title: "ECO FRIENDLY TECHNOLOGIES",
            desc: "Eco friendly technologies is also used to describe a class of electronic devices that can promote and help to pest control",
        },
        {
            icon: <FaSprayCan />,
            title: "FREE HOME INSPECTION",
            desc: "A home inspection is a limited, non-invasive examination of the condition of a home, often in connection with the sale",
        },
        {
            icon: <FaFileAlt />,
            title: "LICENSED & PROTECTED",
            desc: "We have a great, professional and high-quality team, our trained staff will protect your home and family against any pests",
        },
        {
            icon: <FaBug />,
            title: "FAST PEST REMOVAL",
            desc: "We are the company for safe pest removal. We know all about dangerous insects and provide insects control treatments",
        },
    ];

    return (
        <section className="relative bg-green-600 py-20 text-white overflow-hidden">

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto flex flex-wrap justify-center gap-10 px-4">

                {services.map((item, index) => (
                    <div key={index} className="w-64 text-center">

                        {/* Icon */}
                        <div className="w-24 h-24 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="mt-6 font-bold text-lg leading-tight">
                            {item.title}
                        </h3>

                        {/* Yellow Line */}
                        <div className="w-10 h-1 bg-yellow-400 mx-auto my-3"></div>

                        {/* Description */}
                        <p className="text-sm text-green-100 leading-relaxed">
                            {item.desc}
                        </p>

                    </div>
                ))}
            </div>

            {/* Right Floating Buttons */}
            <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col z-50">

                <button className="bg-yellow-500 p-4 border-b border-green-700 hover:bg-yellow-600">
                    <FaShoppingCart className="text-white" />
                </button>

                <button className="bg-yellow-500 p-4 border-b border-green-700 hover:bg-yellow-600">
                    <FaWallet className="text-white" />
                </button>

                <button className="bg-yellow-500 p-4 hover:bg-yellow-600">
                    <FaBox className="text-white" />
                </button>

            </div>

        </section>
    );
};

