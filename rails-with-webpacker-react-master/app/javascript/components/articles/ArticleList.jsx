import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles, getArticles } from '../../actions/articles';
import ReactPaginate from 'react-paginate'
import styled from "styled-components";

const Wrap = styled.div`
  display: inline-block;
  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
  li {
    display: inline-block;
  }
`;

function ArticleList(props) {
  const ARTICLES_PER_PAGE = 3;
  const FISRT_PAGE = 1;

  useEffect(() => {
    props.getArticles(FISRT_PAGE, ARTICLES_PER_PAGE);
  }, []);

  const handlePageClick = (event) => {
    props.getArticles(event.selected+1, ARTICLES_PER_PAGE);
  };

  return (
    <div>
      {
        props.articles.map((article) => {
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
      <Wrap>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'…'}
          containerClassName={'react-paginate'}
          previousClassName={'previous'}
          breakClassName={'break-me'}
          nextClassName={'next'}
          pageClassName={'page'}
          activeClassName={'active'}
          pageLinkClassName={'page-link'}
          disabledClassName={'disabled'}
          pageCount={props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          forcePage={5}
          onPageChange={(event) => {handlePageClick(event)}}
        />
      </Wrap>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.articles,
    pageCount: state.articlesReducer.totalPages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: () => dispatch(allArticles()),
    getArticles: (page, perPage) => dispatch(getArticles(page, perPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);