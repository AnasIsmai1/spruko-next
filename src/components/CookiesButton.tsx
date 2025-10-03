"use client";
import { useState } from "react";

export const CookieConsent = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed bg-white shadow-[rgba(40,37,89,0.6)_0px_8px_20px_0px] box-border caret-transparent hidden max-w-[368px] z-[9999] border border-gray-200 ml-[30px] p-5 rounded-[3px] border-solid left-0 bottom-[30px] md:block">
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent">
                <h4 className="text-slate-900 text-[21.525px] font-semibold box-border caret-transparent leading-[25.83px] mb-2 font-urbanist md:text-2xl md:leading-[28.8px]">
                    Cookies &amp; Privacy Policy?
                </h4>
            </div>
            <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                    <p className="box-border caret-transparent">
                        There are no cookies used on this site, but if there were this
                        message could be customised to provide more details. Click the
                        accept button below to see the optional callback in action...
                    </p>
                    <a
                        href="privacy-policy.html"
                        className="text-blue-700 box-border caret-transparent opacity-80 underline"
                    >
                        More information
                    </a>
                    <div className="box-border caret-transparent mt-4 flex space-x-4">
                        <button
                            className="text-white text-[13.6px] font-medium bg-blue-700 caret-transparent leading-[20.4px] text-center align-middle border border-blue-700 px-4 py-2 rounded-[4.8px] border-solid hover:bg-blue-700/80"
                            onClick={() => setVisible(false)}
                        >
                            Accept Cookies
                        </button>
                        <button
                            className="text-white text-[13.6px] font-medium bg-orange-500 caret-transparent leading-[20.4px] text-center align-middle border border-orange-500 px-4 py-2 rounded-[4.8px] border-solid"
                            onClick={() => setVisible(false)}
                        >
                            Customise Cookies
                        </button>
                    </div>
                    <div className="box-border caret-transparent hidden mt-4">
                        <h6 className="text-slate-900 font-semibold box-border caret-transparent leading-[19.2px] mb-2 font-urbanist">
                            Select cookies to accept
                        </h6>
                        <div className="box-border caret-transparent flex flex-wrap -mx-3">
                            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                                <div className="box-border caret-transparent min-h-6 mb-0.5 pl-6">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="text-neutral-600 bg-blue-700 bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%273%27%20d=%27m6%2010%203%203%206-6%27/%3e%3c/svg%3e)] bg-no-repeat bg-contain box-border caret-transparent block float-left h-4 opacity-50 align-top w-4 border border-blue-700 bg-center -ml-6 mt-1 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                                    />
                                    <label className="box-border caret-transparent inline-block opacity-50">
                                        {" "}
                                        Necessary{" "}
                                    </label>
                                </div>
                                <div className="box-border caret-transparent min-h-6 mb-0.5 pl-6">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="text-black bg-no-repeat bg-contain box-border caret-transparent block float-left h-4 align-top w-4 border border-gray-200 bg-center -ml-6 mt-1 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                                    />
                                    <label className="box-border caret-transparent inline-block">
                                        {" "}
                                        Site Preferences{" "}
                                    </label>
                                </div>
                            </div>
                            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                                <div className="box-border caret-transparent min-h-6 mb-0.5 pl-6">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="text-black bg-no-repeat bg-contain box-border caret-transparent block float-left h-4 align-top w-4 border border-gray-200 bg-center -ml-6 mt-1 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                                    />
                                    <label className="box-border caret-transparent inline-block">
                                        {" "}
                                        Analytics{" "}
                                    </label>
                                </div>
                                <div className="box-border caret-transparent min-h-6 mb-0.5 pl-6">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="text-black bg-no-repeat bg-contain box-border caret-transparent block float-left h-4 align-top w-4 border border-gray-200 bg-center -ml-6 mt-1 p-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                                    />
                                    <label className="box-border caret-transparent inline-block">
                                        {" "}
                                        Marketing{" "}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
