import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Destinations to Visit This Summer",
      date: "June 20, 2025",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1110.jpg?t=st=1751396254~exp=1751399854~hmac=232373d055da189d81c147df432a22cff81718ad10ef55af06acb6195c1afb19&w=1380",
      excerpt:
        "Explore the most exciting summer destinations with breathtaking views and unforgettable ",
      blogLink:
        "https://www.bengalnest.com/story-detail/summer-in-bangladesh-top-activities-and-destinations-X6pX2",
    },
    {
      id: 2,
      title: "Why Group Tours Are Trending in 2025",
      date: "May 15, 2025",
      image:
        "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747328.jpg?t=st=1751396340~exp=1751399940~hmac=156d569b6e24e18b22e09802604af3c56bd214c6f233023d66fb32d4ca9ff4d2&w=1380",
      excerpt:
        "Discover the rising popularity of group tours and what makes them perfect for social adventurers.",
      blogLink: "https://elevateglobaltravel.com/why-group-travel-is-trending-in-2025/",
    },
    {
      id: 3,
      title: "Travel Checklist: What You Must Pack",
      date: "April 10, 2025",
      image:
        "https://img.freepik.com/premium-photo/travel-summer-vacation-tourism-objects-concept_93675-121114.jpg?w=1380",
      excerpt:
        "Before you hit the road, make sure you're fully prepared with this essential travel checklist.",
      blogLink: "https://www.travelchecklist.app/packing-checklist/",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">From Our Blog</h2>
        <p className="text-base-content/70 mb-10">
          Tips, guides and stories from travel experts to make your journey smooth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left ">
                <div className="flex items-center text-sm mb-2 text-black">
                  <HiOutlineCalendar className="mr-2" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{blog.title}</h3>
                <p className="mb-4 text-black">{blog.excerpt}</p>
                <Link to={blog.blogLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-sm btn-secondary">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
