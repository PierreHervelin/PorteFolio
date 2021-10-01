import react from "react";
import Paragraph from "../components/Paragraph";
import logo from "../assets/img/bea-interface1.jpg";
import logo2 from "../assets/img/bea-interface2.jpg";

const Beaproject=()=>{
    document.onclick=()=>{
        let paragraph=document.querySelector('.paragraph-container');
        let pres=document.querySelector('.pres-bea');
        if(paragraph.display!='none'){
            paragraph.style.animation='0.5s ease-in 0s 1 opacity1to0';
            setTimeout(() => {
                paragraph.style.opacity=0;
                paragraph.style.display='none';
                pres.style.display='flex';
                pres.style.animation='1s ease-in 0s 1 opacity0to1';
            }, 500);
        }
    };
    setTimeout(() => {
        let paragraph=document.querySelector('.paragraph-container');
        let pres=document.querySelector('.pres-bea');
        paragraph.style.animation='2s ease-in 0s 1 opacity1to0';
        setTimeout(() => {
            paragraph.style.opacity=0;
            paragraph.style.display='none';
            pres.style.display='flex';
            pres.style.animation='2s ease-in 0s 1 opacity0to1';
        }, 2000);
    }, 7000);
    return(
        <main>
            <div className='col title'>
                <h2 data-inviewport='opacity1'>Projet pour le BEA</h2>
                <hr data-inviewport='hr60%'/>
            </div>
            <div className='paragraph-container col'>
                <Paragraph paragraphNumber='2'/>
            </div>
            <div className='col pres-bea'>
                <div className='paragraph-container col'>
                    <Paragraph paragraphNumber='3'/>
                </div>
                <h3>Interface :</h3>
                <img src={logo} alt=''/>
                <p>sans le menu options</p>
                <div className='beadiapo'>
                    <img src={logo2} alt=''/>
                </div>
                <p>avec le menu options</p>
            </div>
        </main>
    );
};

export default Beaproject;