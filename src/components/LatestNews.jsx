import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    "https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a"
                );
                const data = await response.json();
                // Ensure the data is an array and set it to state
                setNews(Array.isArray(data.data) ? data.data : []);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch news:", error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="flex gap-2 items-center bg-base-200 py-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-2">Latest</p>
            {loading ? (
                <p>Loading...</p>
            ) : news.length > 0 ? (
                <Marquee pauseOnHover={true} className="space-x-10">
                    {news.map((item) => (
                        <Link
                            key={item._id}
                            to={`/news/${item._id}`} // Update with your dynamic route
                            className="text-[#D72050]"
                        >
                            {item.title}
                        </Link>
                    ))}
                </Marquee>
            ) : (
                <p>No news available.</p>
            )}
        </div>
    );
};

export default LatestNews;
