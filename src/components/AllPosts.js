import React, {Component} from 'react';
import Post from './post'
import PostService from './services/postService'

class AllPosts extends Component {
    PostService = new PostService();

    state ={posts : [], chosenOne: null}
    oneSelectPost = (id) => {
    this.PostService.getPostById(id).then(value => this.setState({chosenOnePost : value}))

    }


    render() {
        let {posts, chosenOnePost} = this.state
        return (
            <div>
                {
                    posts.map((post) => <Post item={post} oneSelectPost={this.oneSelectPost} key={post.id} />)
                }
                {
                    chosenOnePost && <h2><Post item={chosenOnePost} isBtn={true}/></h2>
                }
            </div>
        );
    }
    componentDidMount() {
        this.PostService.getAllPosts().then(value => this.setState({posts : value}));
	}
}

export default AllPosts;