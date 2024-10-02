import { useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "./blogs.json"; // Import the JSON file directly
import logo from "../assets/Images/logo.png"; // Assuming logo is in the assets folder
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog

  // Handle the selection of a blog
  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <article className="flex flex-col h-screen bg-primaryGreen/10 overflow-hidden">
      <Navbar />
      <section className="flex flex-row lg:mt-5">
        {/* Left side: Full Blog Content */}
        <div
          className={`w-full lg:flex flex-col xl:h-full transition-all duration-500 ease-in-out ${
            selectedBlog === null ? "opacity-100" : "opacity-100"
          }`}
        >
          <div
            className={`mb-10 mx-10 mr-auto ${
              selectedBlog
                ? "flex flex-col items-center pt-16"
                : "flex flex-col items-center justify-center h-full"
            }`}
          >
            {selectedBlog ? (
              <div className="w-[90%] overflow-auto">
                <h2 className="text-3xl font-bold text-gray-dark/90 text-center mb-10">
                  <span className="text-customRed italic">
                    {selectedBlog.title}
                  </span>
                </h2>
                <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-dark/90 text-center">
                  <span className="text-customRed italic">Stay updated</span>{" "}
                  with the latest trends in rental management
                </h2>
                <p className="mt-2 text-gray-dark/70 text-center">
                  Read our latest blog posts for insights and tips to make the
                  most of your rental experience
                </p>
                <img
                  src="undraw_blog_posts_re_2cbj.svg"
                  alt="Blog Illustration"
                  className="m-10"
                />
              </>
            )}
          </div>
        </div>

        {/* Right side: Blog List */}
        <div
          className={`w-full lg:w-[60%] h-[100vh] justify-between lg:rounded-bl-3xl lg:rounded-tl-3xl bg-primaryGreen/10 transition-all duration-500 ease-in-out`}
          style={{
            width: selectedBlog ? "35%" : "60%", // Change width after clicking
          }}
        >
          <div className="w-full h-full flex flex-col justify-start mt-20 lg:mt-10  items-center">
            <TitleCard />
            <div
              className="w-[70%] md:w-[50%] lg:w-[90%] space-y-6 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "80vh" }}
            >
              {blogsData.map((blog) => (
                <div
                  key={blog.id}
                  className="border-b-2 border-gray-300 pb-4 mt-5"
                >
                  <h3 className="text-xl font-semibold text-gray-dark">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {blog.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">{blog.date}</p>
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="text-primaryGreen font-semibold hover:text-primaryGreen/60 mt-2 block"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

const Navbar = () => {
  return (
    <div className="absolute top-4 left-4">
      <Link to="/">
        <img src={logo} alt="Rentalog-logo" className="h-12 w-auto" />
      </Link>
    </div>
  );
};

const TitleCard = () => {
  return (
    <div className="mb-6">
      <h2 className="lg:mt-10 text-left text-3xl font-extrabold leading-9 tracking-tight text-gray-dark/90">
        Welcome to the <span className="text-customRed text-4xl">Blog</span>
      </h2>
      <p className="text-left text-gray text-sm mt-1">
        Stay informed with our latest news, tips, and insights!
      </p>
    </div>
  );
};
