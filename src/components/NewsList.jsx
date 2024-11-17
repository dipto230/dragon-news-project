import React, { useEffect, useState } from 'react';

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          setNewsData(data.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 grid gap-6 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
      {newsData.map((newsItem) => (
        <div
          key={newsItem.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Image Section */}
          <img
            src={newsItem.image_url}
            alt={newsItem.title}
            className="w-full h-48 object-cover"
          />

          {/* Content Section */}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{newsItem.title}</h3>
            <div className="text-gray-500 text-sm mb-4">
              {newsItem.details.substring(0, 80)}...
            </div>
            <div className="flex justify-between text-gray-400 text-xs">
              <span>{newsItem.category}</span>
              <span>{new Date(newsItem.published_date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
