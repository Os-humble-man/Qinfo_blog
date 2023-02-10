import React from "react";
import { Link } from "react-router-dom";
// import img from "../img/aaa.png";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import profil from "../img/profil.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="blog-wrapper wrapper-col-1  sm:wrapper-col-2 lg:wrapper-col-3 p-2">
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img1}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-blue-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                Javascript
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <Link href="single.html">Comment cree une boucle for</Link>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas soluta quia nulla, eligendi quidem rerum nihil
                voluptate veritatis necessitatibus, beatae deserunt sequi
                provident aspernatur aliquam eius! Totam optio magnam atque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus ullam earum tenetur non sunt consequatur dicta illum
                voluptatibus laborum eligendi deserunt, neque aut delectus.
                Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Lire plus →
              </Link>
            </div>
          </div>
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img2}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-green-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                Python
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <a href="single.html">Comment cree une boucle for en python</a>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas soluta quia nulla, eligendi quidem rerum nihil
                voluptate veritatis necessitatibus, beatae deserunt sequi
                provident aspernatur aliquam eius! Totam optio magnam atque.
                Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium porro nisi tempora
                dolorum minima facilis dolore beatae a quia ullam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Possimus ullam
                earum tenetur non sunt consequatur dicta illum voluptatibus
                laborum eligendi deserunt, neque aut delectus. Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Read More →
              </Link>
            </div>
          </div>
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img3}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-red-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                CSS
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <a href="single.html">comment cree une Scrollbar</a>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas soluta quia nulla, eligendi quidem rerum nihil
                voluptate veritatis necessitatibus, beatae deserunt optio magnam
                atque. Lorem ipsum Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Lire Plus →
              </Link>
            </div>
          </div>
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img4}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-indigo-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                React Js
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <Link href="single.html">comment utiliser useReducer Hook</Link>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                Possimus Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Error ullam eius quia fuga aspernatur ullam earum tenetur
                non sunt consequatur dicta illum voluptatibus laborum eligendi
                deserunt, neque aut delectus. Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Read More →
              </Link>
            </div>
          </div>
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img5}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-pink-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                Vue Js
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <Link href="single.html">Routing en Vue js</Link>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                {" "}
                Possimus ullam earum tenetur non sunt consequatur dicta illum
                voluptatibus laborum eligendi deserunt, neque aut delectus.
                Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Read More →
              </Link>
            </div>
          </div>
          <div className="blog-post w-full overflow-none border rounded-md">
            <div className="max-w-2xl  h-auto  flex items-center relative ">
              <img
                src={img6}
                className="w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="placeholder img"
              />
              <div className="bg-blue-400  w-24 pt-1 cursor-pointer  h-8 text-gray-50 font-semibold text-center absolute top-0">
                Javascript
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 rounded-full  animate-pulse">
                  <img src={profil} alt="profil" className="rounded-full" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>
                    By{" "}
                    <span className="text-gray-700 cursor-pointer">
                      Kanangila Oscar
                    </span>{" "}
                  </p>
                  <h4>Updated over 2 weeks ago</h4>
                </div>
              </div>
              <h4 className=" text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                <Link href="single.html">Les methodes sur les tableaux</Link>
              </h4>
              <p className="text-md my-4 text-gray-500  font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas soluta quia nulla, eligendi quidem rerum nihil
                voluptate veritatis necessitatibus, beatae deserunt sequi
                provident aspernatur aliquam eius! Totam optio magnam atque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus ullam earum tenetur non sunt consequatur dicta illum
                voluptatibus laborum eligendi deserunt, neque aut delectus.
                Ipsam.
              </p>
              <Link href="single.html" className="text-blue-500 mb-4">
                Read More →
              </Link>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </div>
      <Footer />
    </>
  );
}
