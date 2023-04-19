export const CommentCard = (comment) => {
    return (
      <article className="p-4 bg-white shadow rounded-lg">
        <h4 className="text-lg font-medium mb-2">Comment by: {comment.author}</h4>
        <p className="text-gray-800">{comment.body}</p>
        <p className="text-gray-500">Votes: {comment.votes}</p>
      </article>
    );
  };
