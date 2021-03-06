import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';
import butterApi from '../tokens/butter_cms_api';

const butter = Butter(butterApi.key);

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    let page = this.props.match.params.page || 1;

    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.match.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;
 
      return (
        <div className='blog-content'>
          <h1>Blog</h1>
          {this.state.resp.data.map((post) => {
            return (
              <div style={{textAlign: 'center'}} key={post.slug}>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <br />

          <div>
            {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
          </div>
        </div>
      );
    } else {
      return (
        <div className='blog-content' style={{textAlign: 'center'}}>
          Loading...
        </div>
      )
    }
  }
}

export default BlogHome;
