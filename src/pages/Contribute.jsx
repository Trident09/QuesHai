import React from 'react';

const Contribute = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Contribute</h1>
                </div>
            </header>
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <form className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="batch" className="block text-lg font-semibold mb-2">Batch</label>
                            <input type="text" id="batch" name="batch" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="course" className="block text-lg font-semibold mb-2">Course</label>
                            <input type="text" id="course" name="course" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sub" className="block text-lg font-semibold mb-2">Subject</label>
                            <input type="text" id="sub" name="sub" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="examName" className="block text-lg font-semibold mb-2">Exam Name</label>
                            <input type="text" id="examName" name="examName" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="questionPaper" className="block text-lg font-semibold mb-2">Question Paper</label>
                            <input type="file" id="questionPaper" name="questionPaper" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
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

export default Contribute;