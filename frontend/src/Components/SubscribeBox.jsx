import './SubscribeBox.css';

export default function SubscribeBox() {
  return (
    <section className="subscribe-box">
        <div className="subscribe-border">
            <h2 className="subscribe-header">SUBSCRIBE ! SUBSCRIBE ! SUBSCRIBE !</h2>
            <input
                type="email"
                placeholder="YOUR-EMAIL@EXAMPLE.COM"
                className="subscribe-input"
            />
            <p className="subscribe-note">ENTER YOUR EMAIL ABOVE TO RECEIVE UPDATES ON NEW CONTENT</p>
      </div>
    </section>
  );
}
