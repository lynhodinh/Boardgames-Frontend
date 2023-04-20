import { useState } from "react";
import * as api from "../api";

export const CommentForm = ({ review_id, onCommentSubmit }) => {
  const [commentUsername, setCommentUsername] = useState("jessjelly");
  const [commentBody, setCommentBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentToSubmit = {
      username: commentUsername,
      body: commentBody,
    };
    setIsLoading(true);
    api.postComment(commentToSubmit, review_id).then((postedComment) => {
      onCommentSubmit(postedComment);
      setIsLoading(false);
    });
  };

  return (
    <section className="mt-8">
      <h4 className="font-bold mb-2">Post your own comment:</h4>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="font-bold mb-2">
          Username:
        </label>
        <input
          id="username"
          value={commentUsername}
          onChange={(event) => {
            setCommentUsername(event.target.value);
          }}
          required
          className="rounded-md border-gray-400 border p-2 mb-4"
        />

        <label htmlFor="body" className="font-bold mb-2">
          Comment:
        </label>
        <textarea
          id="body"
          value={commentBody}
          cols="28"
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
          required
          className="rounded-md border-gray-400 border p-2 mb-4"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out disabled:bg-gray-400"
        >
          {isLoading ? "Posting..." : "Submit!"}
        </button>
      </form>
    </section>
  );
};
