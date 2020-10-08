import axios from 'axios';
import { URL_API } from './../lib/const'

const Posts = `${URL_API}/wp/v2/posts`;

const PostService = () :void => {
  axios.get(Posts)
    .then(data => {
      console.log(data);
    })
}

export default PostService;
