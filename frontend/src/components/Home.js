import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Newsletters from "./Newsletters";
import profil from "../img/profil.jpg";
import Footer from "./Footer";
import Pagination from "./Pagination";
export default function Home() {
  const [posts, setposts] = useState([]);

  const getpost = async () => {
    const post = await axios.get("http://localhost:5001/post");
    setposts(post.data);
  };

  useEffect(() => {
    getpost();
  });

  console.log(posts);

  const [prevPage, setprevPage] = useState(0);
  const [Tpage, setTpage] = useState(4);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Newsletters />
        <section id="featured-posts" className="grid  sm:grid-cols-2 gap-4 p-2">
          <h2 className="col-span-full text-3xl md:text-4xl mb-8 border-l-4   border-blue-800 pl-2   my-4 text-blue-800 ">
            Featured posts
          </h2>
          {posts.slice(prevPage, Tpage).map((post) => {
            return (
              <div
                className="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4"
                key={post.id}
              >
                <div className="max-w-2xl  h-auto  flex items-center relative ">
                  <img
                    src={process.env.IMAGE_URL + post.article_img}
                    className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                    alt="placeholder img"
                  />
                  <div className="bg-blue-400 rounded-sm pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0 px-2">
                    {post.article_categorie}
                  </div>
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">
                    {post.article_title}
                  </h3>
                  <div className="flex gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full">
                      <img src={profil} alt="" className="rounded-full" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <h4>By {post.article_author}</h4>
                      <h4>{post.article_date}</h4>
                    </div>
                  </div>
                  <p className="text-gray-700">{`${post.article_body.substring(
                    0,
                    100
                  )} ...`}</p>
                  <button className="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100">
                    Lire Plus
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <div className="flex justify-center">
          <Pagination
            totalPost={posts.length}
            Tpage={Tpage}
            setTpage={setTpage}
            setprevPage={setprevPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
