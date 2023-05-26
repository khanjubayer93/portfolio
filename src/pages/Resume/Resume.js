import React from 'react';

const resumeFilePDFURL = 'http://localhost:3000/jubayer-resume.pdf'
const Resume = () => {
    const downloadResumeFile = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className='h-[750px] border-b-2 border-gray-300 flex justify-center items-center' id='4'>
            <div className='mx-5'>
                <button onClick={() => { downloadResumeFile(resumeFilePDFURL) }} className='uppercase lg:text-5xl mt-5 shadow-xl px-10 py-5 rounded-full text-sky-500 font-semibold  hover:bg-sky-500 hover:text-white transiction duration-300'>Download Resume</button>
            </div>
        </div>
    );
};

export default Resume;