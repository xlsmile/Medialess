import { blog01, blog02, blog03, blog04, blog05 } from './images';

const Blog = () => {
  const timestamp = new Date().toDateString();

  return (
    <section className="blog" id="blog">
      <h2 className="blog__title">A lot is happening, We are blogging about it.</h2>
      <article className="blog-post blog-post--featured">
        <img className="blog-post__image" src={blog01} alt={`${blog01} logo`} />
        <div className="blog-post__content">
          <span>
            <span className="blog-post__date">{timestamp}</span>
            <h3 className="blog-post__title">
              AIO is the future. Let us exlore how it is. AIO Round spanker hempen halter.
            </h3>
          </span>
          <a className="blog-post__link" href="/">
            Read full article
          </a>
        </div>
      </article>
      <article className="blog-post">
        <img className="blog-post__image" src={blog02} alt={`${blog02} logo`} />
        <div className="blog-post__content">
          <span>
            <span className="blog-post__date">{timestamp}</span>
            <h3 className="blog-post__title">Pinnace AIO mizzenmast quarter nest.</h3>
          </span>
          <a className="blog-post__link" href="/">
            Read full article
          </a>
        </div>
      </article>
      <article className="blog-post">
        <img className="blog-post__image" src={blog03} alt={`${blog03} logo`} />
        <div className="blog-post__content">
          <span>
            <span className="blog-post__date">{timestamp}</span>
            <h3 className="blog-post__title">Shiver me timbers to go on account lookout wherry.</h3>
          </span>
          <a className="blog-post__link" href="/">
            Read full article
          </a>
        </div>
      </article>
      <article className="blog-post">
        <img className="blog-post__image" src={blog04} alt={`${blog04} logo`} />
        <div className="blog-post__content">
          <span>
            <span className="blog-post__date">{timestamp}</span>
            <h3 className="blog-post__title">Case shot Shiver me timbers gangplank.</h3>
          </span>
          <a className="blog-post__link" href="/">
            Read full article
          </a>
        </div>
      </article>
      <article className="blog-post">
        <img className="blog-post__image" src={blog05} alt={`${blog05} logo`} />
        <div className="blog-post__content">
          <span>
            <span className="blog-post__date">{timestamp}</span>
            <h3 className="blog-post__title">Rigging hempen captain killsick.</h3>
          </span>
          <a className="blog-post__link" href="/">
            Read full article
          </a>
        </div>
      </article>
    </section>
  );
};

export default Blog;
