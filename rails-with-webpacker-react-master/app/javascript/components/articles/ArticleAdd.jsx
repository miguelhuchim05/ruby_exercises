import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';

function ArticleAdd(props) {
  const [state, setState] = useState({title: '', content: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('api/articles', {
      title: state.title,
      content: state.content
    })
    .then(response => response.data)
    .then(data => {
      props.history.push(`/articles/${data.id}`);
    })
    .catch(error => console.log('error', error));
  }

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const title = key == 'title' ? value : state.title;
    const content = key == 'content' ? value : state.content;
    const article = {title: title, content: content};

    setState(article);
  }

  const handleCancel = () => {
    props.history.push("/articles");
  }

  const article = {
    title: state.title,
    content: state.content
  };

  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Create'
  };

  return (
    <div>
      <h1>{state.title}</h1>
      <Form article={article} settings={settings}/>
    </div>
  );
}

export default ArticleAdd;