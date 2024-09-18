import React from 'react';

const StudentPortrait: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            {/* Image and Portrait */}
            <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col items-center justify-center p-6">
                    <img
                        src="path_to_your_image.png"
                        alt="Student Portrait"
                        className="w-full h-auto object-cover"
                    />
                </div>
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
                    <h1 className="text-white text-4xl font-bold">STUDENT PORTRETT</h1>
                    <p className="text-white mt-2 text-lg">September 6th, 2024</p>
                    <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                        VIEW GALLERY
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4">
                <p className="text-sm text-gray-600">LEE MEDIA</p>
            </div>
        </div>
    );
};

export default StudentPortrait;
