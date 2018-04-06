import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";
import butterApi from '../tokens/butter_cms_api';

const butter = Butter(butterApi.key);

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div className='blog-content'>
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>

          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </div>
      );
    } else {
      return (
        <div className='blog-content' style={{textAlign: 'center'}}>
          Loading...
        </div>
      );
    }
  }
}

export default BlogPost;
