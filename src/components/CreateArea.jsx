import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendData({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
