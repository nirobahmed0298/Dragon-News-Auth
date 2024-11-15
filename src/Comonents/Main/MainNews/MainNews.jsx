import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { BsBookmark, BsShare } from 'react-icons/bs';
const MainsiglesiglesigleNews = () => {
    let { data: news } = useLoaderData();
    return (
        <section>
            <h1 className='font-semibold'>Dragon News</h1>
            <section className='py-4'>
                <div>
                    {
                        news.map((singleNews,i) =>
                            <div key={i}>
                                <div className="bg-white shadow-md border rounded-md overflow-hidden border border-gray-200 p-2 mb-4">
                                    {/* Header with author info */}
                                    <div className="flex items-center px-4 py-3 bg-gray-100">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover"
                                            src={singleNews.author.img}
                                            alt="Author"
                                        />
                                        <div className="ml-3">
                                            <p className="text-gray-800 font-semibold">{singleNews.author.name}</p>
                                            <p className="text-gray-500 text-sm">
                                                {new Date(singleNews.author.published_date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="ml-auto flex items-center space-x-2 text-gray-500">
                                            <BsBookmark className="cursor-pointer" />
                                            <BsShare className="cursor-pointer" />
                                        </div>
                                    </div>

                                    {/* Thumbnail Image */}
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={singleNews.thumbnail_url}
                                        alt="siglesigleNews Thumbnail"
                                    />

                                    {/* Title and Details */}
                                    <div className="p-4">
                                        <h2 className="text-gray-800 font-bold text-lg mb-2">{singleNews.title}</h2>
                                        <p className="text-gray-600 text-sm">
                                            {singleNews.details.substring(0, 150)}...
                                            <Link to={`/news/${singleNews._id}`}  className="text-blue-500 cursor-pointer"> Read More</Link>
                                        </p>
                                    </div>

                                    {/* Rating and Views */}
                                    <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-100">
                                        <div className="flex items-center">
                                            <AiFillStar className="text-yellow-500 mr-1" />
                                            <span className="text-gray-800 font-semibold">{singleNews.rating.number}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <AiOutlineEye className="text-gray-500 mr-1" />
                                            <span className="text-gray-800">{singleNews.total_view}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </section>
    );
};

export default MainsiglesiglesigleNews;