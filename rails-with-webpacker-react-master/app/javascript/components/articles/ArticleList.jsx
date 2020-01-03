import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {addArticle, allArticles} from '../../actions/articles';
import axios from 'axios';

function ArticleList(props) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
      axios.get('api/articles')
        .then(response => {
          setArticles(response.data);
        })
        .catch(error => console.log('error', error));
   }, []);


  return (
    <div>
      {
        articles.map((article) => {
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          );
        })
      }
      <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);