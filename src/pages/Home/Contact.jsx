export default function Contact() {
  return (
    <section id="contact">
      <div className="contact--content--box">
        <h1 className="contact--heading">Contact</h1>
      </div>
      <div className="contact--input--box">
        <div>
          <input type="text" placeholder="Full Name" required />
        </div>
        <div>
          <input type="Email" placeholder="Email" required />
        </div>
        <div>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Enter a Message"></textarea>
        </div>
        <div className="contact--section--button">
          <button type="submit">Submit</button>
        </div>
        <div className="contact--section--img">
          <img src="./img/avatar2.png" alt="contact" />
        </div>
      </div>
    </section>
  );
}