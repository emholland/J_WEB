import './Contact.css';
import LogoHeader from '../Components/LogoHeader';
import SubscribeBox from '../Components/SubscribeBox';
import ContactForm from '../Components/ContactForm';

export default function Contact() {
  return (
    <div className="contact-page">
           <LogoHeader />
           <ContactForm />
           <SubscribeBox />
           
    </div>
  );
}
