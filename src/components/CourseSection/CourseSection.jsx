import React from "react";
import { Courses } from "../../assets/Data";
import MediaCard from "../Cards/MediaCard";

const CourseSection = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Courses</h1>
                </div>
            </header>
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-around gap-8">
                        {Courses.map((course, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <MediaCard prop={course} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CourseSection;