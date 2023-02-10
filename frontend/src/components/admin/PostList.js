import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import SideBar from "./SideBar";

export default function PostList() {
  const [posts, setposts] = useState([]);
  const getpost = async () => {
    const post = await axios.get("http://localhost:5001/post");
    setposts(post.data);
  };

  useEffect(() => {
    getpost();
  });

  const supp = (id) => {
    axios({
      method: "POST",
      url: "http://localhost:5001/delete",
      headers: { "content-type": "application/json" },
      data: {
        id: id,
      },
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="flex ">
      <SideBar />
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell> Id</Table.HeadCell>
          <Table.HeadCell> Title</Table.HeadCell>
          <Table.HeadCell> Categorie</Table.HeadCell>
          <Table.HeadCell> Author </Table.HeadCell>
          <Table.HeadCell> Date</Table.HeadCell>
          <Table.HeadCell> Views</Table.HeadCell>
          <Table.HeadCell> Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {posts.map((post) => {
            return (
              <>
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={post.id}
                >
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {post.id}
                  </Table.Cell>
                  <Table.Cell>{post.article_title}</Table.Cell>
                  <Table.Cell>{post.article_categorie}</Table.Cell>
                  <Table.Cell>{post.article_author}</Table.Cell>
                  <Table.Cell>{post.article_date}</Table.Cell>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-between">
                      <a
                        href="/tables"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                      <button
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => supp(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
