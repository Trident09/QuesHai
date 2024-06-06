import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                </div>
            </header>
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <p className="text-lg mb-4">Have any questions or suggestions? Feel free to reach out to us!</p>
                    <form className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
                            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
                            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="5" className="border border-gray-300 rounded-md px-4 py-2 w-full"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default ContactUs;