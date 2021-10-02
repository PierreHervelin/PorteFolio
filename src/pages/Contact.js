import react from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact=()=>{
    const inViewport=(entries,observer)=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle('is-inViewport',entry.isIntersecting);
        });
    };
    const Obs=new IntersectionObserver(inViewport);
    const obsOptions={};

    const Els_inViewport=document.querySelectorAll('[data-inviewport]');
    Els_inViewport.forEach(El=>{
        Obs.observe(El,obsOptions);
    });
    return(
        <main>
            <div className='page'>
                <ContactForm/>
            </div>
        </main>
    );
};

export default Contact;