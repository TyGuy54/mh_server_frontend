import React from "react";

export const HomeComponent = () => {
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome to the admin page for [insert name here]
                        </h1>
                        <div class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <h2 class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is this?</h2>
                                <p>This is the admin page for the Monster Hunter Freedom Unite api. If you have ended up here, thank you for being interested in my project!</p>
                                <p>This is an admin page to primarily insert data in the for of a CSV into the sqlite database for the api as easily as possable. Id ont know about you but writing anything into a CSV by hand kinda sucks!</p>
                                <p>Plus this is a fun project for myself (or maybe for you as well 🤔) to continue to work on and improve. </p>
                            </div>
                            <div>
                                <h2 class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">How to use</h2>
                                <p>[placeholder]</p>
                            </div>
                            <div>
                                <h2 class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Wanna Contribute?J</h2>
                                <p>[placeholder]</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}