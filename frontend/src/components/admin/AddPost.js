import React, { useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
export default function AddPost() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [content, setcontent] = useState("");
  const [date, setdate] = useState();
  const [categorie, setcategorie] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const save = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();

    e.preventDefault();

    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("categorie", categorie);
    formData.append("date", date);

    try {
      const res = await axios.post("http://localhost:5001/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
    for (const value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <div className="flex ">
      <SideBar />
      <form
        method="POST"
        action="/upload"
        encType="multipart/form-date"
        className="flex flex-col justify-center w-5/12 px-8"
      >
        <label htmlFor="title" className="font-bold text-2xl text-slate-800">
          Titre du post
        </label>
        <input
          required={true}
          onChange={(e) => settitle(e.target.value)}
          className="border-2 p-2"
          type="text"
          name="title"
          placeholder="title"
        />
        <div>
          <input
            type="text"
            placeholder="Categorie"
            onChange={(e) => setcategorie(e.target.value)}
            className="border-2 p-2 mt-5"
          />
          <input
            type="date"
            onChange={(e) => setdate(e.target.value)}
            className="border-2 p-2 ml-14"
          />
        </div>
        <label htmlFor="author" className="font-bold text-2xl text-slate-800">
          Auteur du post
        </label>
        <input
          required={true}
          onChange={(e) => setauthor(e.target.value)}
          className="border-2 p-2"
          type="text"
          name="author"
          placeholder="author"
        />
        <div>
          <label htmlFor="cover " className="font-bold text-2xl text-slate-800">
            L'image de l'article
          </label>

          <input name="file" type="file" accept="image/*" onChange={save} />

          <label htmlFor="body" className="font-bold text-2xl text-slate-800">
            le contenu du post
          </label>
          <textarea
            required={true}
            onChange={(e) => setcontent(e.target.value)}
            name="body"
            id="body"
            cols="30"
            rows="10"
            className="border-2 p-2 mb-7 w-full h-40 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            placeholder="Contenue"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Publier"
            className="bg-indigo-500 hover:bg-primary/90 py-1.5 px-4 rounded text-white"
            onClick={uploadFile}
          />
        </div>
      </form>
    </div>
  );
}
