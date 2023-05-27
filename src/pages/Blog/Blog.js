import React from 'react';

const blogItems = [
    {
        image: "https://edynamiclearning.com/wp-content/uploads/2020/10/EDL322_Programming-2a-Procedural-Programming.jpg",
        title: "Ho to become a software enginner",
        description: "To become a software engineer, start with a strong foundation in programming languages like Python or Java. Learn data structures, algorithms, and software development principles. Practice by building projects, contribute to open-source, and pursue relevant education or certifications. Stay updated with industry trends and continuously learn and improve your skills. Gain practical experience through internships or entry-level positions, and network with professionals in the field."
    },
    {
        image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/12/tes_gen_blog_post_071921_1233182206-1-800x412.jpg",
        title: "Ho to become a web developer",
        description: "To become a web developer, start by learning HTML, CSS, and JavaScript. Master front-end frameworks like React or Vue.js. Gain proficiency in back-end technologies such as Node.js or PHP. Build projects, practice responsive design, and learn about databases. Stay updated, explore different tools and libraries, and showcase your work through a portfolio. Network, collaborate, and continuously enhance your skills for career opportunities as a web developer."
    },
    {
        image: "https://img.freepik.com/premium-vector/programming-code-icon-3d-low-polygonal-abstract-programming-code-symbol-hand_127544-1212.jpg",
        title: "Ho to become a software developer",
        description: "To become a software developer, learn programming languages such as Python or JavaScript. Acquire knowledge in data structures, algorithms, and software development principles. Build projects, contribute to open-source, pursue relevant education, and gain practical experience through internships. Continuously learn, improve skills, and stay updated with industry trends. Network with professionals for opportunities and growth."
    },
]

const Blog = () => {
    return (
        <div className='lg:h-[750px] border-b-2 border-gray-300 my-20' id='6'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold mb-5 text-sky-500'>My Blogs</h1>
                <h2 className='text-red-500'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mx-5 lg:px-10 mb-20'>
                {
                    blogItems.map(blog =>
                        <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img class="object-cover w-full h-56" src={blog.image} alt="avatar" />

                            <div class="py-5 px-3">
                                <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{blog.title}</a>
                                <span class="text-sm text-gray-700 dark:text-gray-200">{blog.description}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;