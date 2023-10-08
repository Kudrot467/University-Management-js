import PropTypes from "prop-types";
const Blog = ({ detail }) => {
  const { faculty, blogs } = detail;
  const { title, content, book, youTubeChannel, practicePlatform } = blogs;
  const { name, designation, description } = faculty;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            {content} <br />
            {book} <br />
            {youTubeChannel} <br />
            {practicePlatform}
          </p>
          <div>
            <h1 className="text-3xl font-bold">Faculty Information</h1>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>
              {designation} <br />
              {description} <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  detail: PropTypes.object,
};

export default Blog;
