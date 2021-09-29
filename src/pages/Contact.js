import react from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact=()=>{
    return(
        <main>
            <div className='page'>
                <ContactForm/>
            </div>
            <Footer/>
        </main>
    );
};

export default Contact;