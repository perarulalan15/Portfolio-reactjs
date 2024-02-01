export default function Herosection() {
  return (
    <section id="herosection">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="section--title">Hey, I'm Perarulalan</h1>
          <h2 className="hero--section--title">Aspiring Data Scientist</h2>
          <p className="hero--section-description">
          Welcome to my digital hub! A dedicated student and tech aficionado on the path to becoming a skilled Data Scientist With a keen interest in Artificial Intelligence and Data Science, I'm committed to pushing the boundaries of what's possible in the realm of technology.
          </p>
        </div>
        <button type="submit" className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/images.png" alt="Hero Section" />
      </div>
    </section>
  );
}