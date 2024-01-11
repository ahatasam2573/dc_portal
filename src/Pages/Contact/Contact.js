import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className=" dark:text-snow-white text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 dark:text-snow-white-toned ">Send us any query and any sugession to improve. we will respond you within 24 hrs.</p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                        <div className="overflow-hidden bg-white dark:bg-opacity-10 rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-snow-white-toned" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-snow-white-toned">+8801767630437</p>
                                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-snow-white-toned">+8801590578936</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white dark:bg-opacity-10 rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-snow-white-toned" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-snow-white-toned" >sayem97@gmail.com</p>
                                <p className="mt-1 text-lg font-medium text-gray-900 dark:text-snow-white-toned">sayem35-597@diu.edu.bd</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-xl dark:bg-opacity-10" >
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-snow-white-toned" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-snow-white-toned">Mirpur 1 sha, ali bag</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden bg-white rounded-xl dark:bg-opacity-10">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-snow-white-toned">Send us a message</h3>

                            <form className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900 dark:text-snow-white-toned"> Your name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" className="contact-form-spec form-input" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900 dark:text-snow-white-toned"> Email address </label>
                                        <div className="mt-2.5 relative">
                                            <input type="email" name="" id="" placeholder="Enter your full name" className="contact-form-spec form-input" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900 dark:text-snow-white-toned"> Phone number </label>
                                        <div className="mt-2.5 relative">
                                            <input type="tel" name="" id="" placeholder="Enter your full name" className="contact-form-spec form-input" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900 dark:text-snow-white-toned"> Company name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="" id="" placeholder="Enter your full name" className="contact-form-spec form-input" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="" className="text-base font-medium text-gray-900 dark:text-snow-white-toned"> Message </label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="" id="" placeholder="" className="contact-form-spec form-input" rows="4"></textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="btn-primary w-full mx-auto">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;