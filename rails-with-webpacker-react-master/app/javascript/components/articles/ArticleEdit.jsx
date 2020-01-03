import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';

function ArticleEdit(props) {
  const [state, setState] = useState({title: '', content: ''});

  useEffect(()=> {
    axios.get(`api/articles/${props.match.params.id}`)
      .then(response => response.data)
      .then((data) => {
        setState(data);
      })
      .catch(error => console.log('error', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`api/articles/${props.match.params.id}`, {
      title: state.title,
      content: state.content
    }
    )
      .then(response => response.data)
      .then(data => {
        props.history.push(`/articles/${props.match.params.id}`);
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
    props.history.push(`/articles/${props.match.params.id}`);
  }

  const article = {
    title: state.title,
    content: state.content
  };

  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Update'
  };

  return (
    <div>
      <h1>Edit {state.title}</h1>
      <Form article={article} settings={settings} />
    </div>
  );
}

export default ArticleEdit;
