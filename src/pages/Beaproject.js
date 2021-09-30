import react from "react";
import Paragraph from "../components/Paragraph";

const Beaproject=()=>{
    setTimeout(() => {
        let paragraph=document.querySelector('.paragraph-container');
        paragraph.style.animation='2s ease-in 0s 1 opacity1to0';
        setTimeout(() => {
            paragraph.style.opacity=0;
            paragraph.style.display='none';
        }, 2000);
    }, 10000);
    return(
        <main>
            <div className='col title'>
                <h2 data-inviewport='opacity1'>Projet pour le BEA</h2>
                <hr data-inviewport='hr60%'/>
            </div>
            <div className='paragraph-container col'>
                <Paragraph paragraphNumber='2'/>
            </div>
        </main>
    );
};

export default Beaproject;