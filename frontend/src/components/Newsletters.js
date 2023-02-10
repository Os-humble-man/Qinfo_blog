import { React, useState } from "react";
import axios from "axios";
export default function Newsletters() {
  const [mail, setmail] = useState("");
  const [name, setname] = useState("");
  const subscribe = () => {
    axios({
      url: "http://localhost:5001/newsletter",
      method: "POST",
      data: {
        user_name: name,
        user_mail: mail,
      },
      "content-type": "text/json",
    })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <section id="newsletter" className="grid grid-cols-2 gap-2  my-8 p-2">
      <p className="text-4xl col-span-2 md:text-left border-l-4 border-blue-800 pl-2 text-blue-800">
        Abonez-vous a la Newsletter
      </p>

      <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center   ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 w-40 md:h-60 md:w-60 text-blue-700 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xl text-center text-blue-800">
          Rejoignez notre newsletter et recevez les prochaines articles
          directement dans votre boite email
        </p>
      </div>
      <form className="flex flex-col justify-center col-span-2 md:col-span-1 md:mt-0 mt-4">
        <label className="text-md font-semibold text-gray-800 ">
          Votre nom
        </label>
        <input
          type="text"
          placeholder="ex : John Doe"
          className="p-4  border focus:outline-white w-full text-gray-800"
          onChange={(e) => setname(e.target.value)}
        />

        <div>
          <label className="text-md font-semibold text-gray-800 ">
            Votre email
          </label>
          <input
            type="email"
            placeholder="ex: exemple@mail.com"
            className="mt-4 p-4 mb-8 border focus:outline-white w-full text-gray-800"
            onChange={(e) => setmail(e.target.value)}
          />
        </div>
        <button
          className="w-full p-4 bg-blue-700 mt-8 text-xl uppercase text-gray-50 hover:bg-blue-800 focus:outline-none"
          type="submit"
          onClick={subscribe}
        >
          Enregistrer
        </button>
      </form>
    </section>
  );
}
