

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  username: {
    type: String,
    required: [true, "Username is required"]
  }
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
export default Post;
