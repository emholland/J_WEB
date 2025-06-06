import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">C O N T A C T</h1>

      <label className="email-label">
        EMAIL:
        <input type="email" className="email-input" />
      </label>

      <textarea
        className="message-box"
        placeholder="Write your message here and mantis review will get back to you as soon as possible ..."
      ></textarea>

      <button className="send-button">SEND</button>
    </div>
  );
}
