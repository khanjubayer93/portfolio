import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Education() {
    let [categories] = useState({
        Programing: [
            {
                id: 1,
                title: 'Web Developer',
                institute: 'Programing Hero',
                description: 'A React JS developer is a software engineer who specializes in building web applications using the React JS library. They use JavaScript to develop reusable components, which allows for efficient and scalable front-end development. A React JS developer is proficient in HTML, CSS, and JavaScript, and has a good understanding of web development concepts such as responsive design, RESTful APIs, and server-side rendering. They are also familiar with popular front-end development tools and frameworks, such as Node.js, Redux, and Webpack. A React JS developer is essential in creating high-performance and visually appealing user interfaces.',
                image: 'https://img.freepik.com/premium-vector/seo-web-development-software-coding-programming-application-laptop-computer-devices_251139-176.jpg'
            }
        ],
        HifzulQuran: [
            {
                id: 1,
                title: 'Hifzul Quran',
                institute: 'Jameul Uloom Madrasa',
                description: 'I completed Hifz in 2009 from Jameul Uloom Madrasah. Then give a hearing for a whole year. I participated in the board exam in 2010 and passed. In 2010 I participated in a Quran competition. In 2011, my life in Hifaz Division ended. Now I am going to tell something about Hifzul Quran: Hifzul Quran, also known as Hifaul Quran, is the process of memorizing the entire Quran by heart. It is a significant achievement and is highly regarded in Islamic culture. Hifzul Quran is a spiritual journey that requires dedication, discipline, and perseverance. The process involves learning the Arabic language, mastering the pronunciation and intonation of each word, and memorizing the Quranic verses in a specific order.',
                shareCount: 16,
                image: 'https://1.bp.blogspot.com/-lANfiXUOjI0/XpDH2lyJQfI/AAAAAAAAAak/y5t0j2uQ9e8mZceBdDlfVqs_-ps0JwdOgCLcBGAsYHQ/s1600/325708.jpg'
            }
        ],
        Kamil: [
            {
                id: 1,
                title: 'Arabic Literature',
                institute: 'Baitus Salam Arabic Madrasa',
                description: 'My journey in Arabic literature started in 2012 at Baitus Salam Madrasa. At that time, the golden age of Arabic literature was going on in Baitus Salam. I got many good teachers. One of them and my best teacher is Mufti Shariful Islam Sahib. He is the most loving and best teacher of my life. My Arabic language has come hand in hand. I studied here from the first year till Jalalain Jamaat. During this long time, I have gained a lot of knowledge from all these teachers. I have read many books from them. Which strengthened my Arabic foundation and helped me understand the correct interpretation of the Quran and Hadith. Here I met many great Arab writers. Among them, Ali Mia Nadvi, and Ali Tantabi are world-famous writers.',
                shareCount: 5,
                image: 'https://live.staticflickr.com/149/418981519_7ab643d53a_b.jpg'
            }
        ],
    })

    return (
        <div className='border-b-2 border-gray-300'>
            <div className='text-center mt-20'>
                <h1 className='text-5xl font-extrabold text-sky-500'>Education</h1>
            </div>
            <div className="w-full  px-2 py-16 sm:px-2 lg:px-10" id='5'>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 w-full h-full">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-xl font-bold leading-5 text-sky-500 transiction duration-300',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div>
                                    {posts.map((post) => (
                                        <div
                                            key={post.id}
                                            className="relative rounded-md p-5 lg:ms-10 mx-5 hover:bg-gray-100 transiction duration-300 flex justify-between"
                                        >
                                            <div className='lg:w-[550px] h-[550px]'>
                                                <h3 className="text-3xl text-sky-500 font-medium leading-5">
                                                    {post.title}
                                                </h3>
                                                <h2 className='my-5 text-xl font-semibold text-slate-500'>{post.institute}</h2>
                                                <p className='pr-5'>{post.description}</p>
                                            </div>
                                            <div className='hidden lg:block lg:w-1/2'>
                                                <img className='rounded-md w-auto h-[450px]' src={post?.image} alt="" />
                                            </div>
                                            <a
                                                href=""
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}
