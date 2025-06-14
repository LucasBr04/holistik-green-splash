
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-holistik-primary/10 to-white">
      <div className="container mx-auto px-4">
        <ContactHeader />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
