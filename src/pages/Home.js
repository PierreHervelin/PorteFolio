import react,{useEffect} from "react";
import NavigationHome from "../components/NavigationHome";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import logo from '../assets/img/photoprofil.jpg';
import Skillcard from "../components/Skillcard";
import Projet from "../components/Projet";

const Home=()=>{
    useEffect(() => {
        const subtitle=document.querySelector('#competence h2');
        setTimeout(() => {
            subtitle.style.opacity=1;
        }, 3400);
        const skillContainer=document.querySelector('#skillcard-container');
        setTimeout(() => {
            skillContainer.style.opacity=1;
        }, 3900);
    }, [])
    return(
        <main>
            <div className='borduretop'></div>
            <div className='home'>
                <div className='page col spacearound'>
                    <div className='col' style={{position:"relative"}}>
                        <Header id='head' headerNumber='0'/>
                        <div className='paragraph-container'>
                            <Paragraph paragraphNumber='0'/>
                            <Paragraph paragraphNumber='1'/>
                        </div>
                    </div>
                    <div className='row flexend' style={{width:'100%'}}>
                        <div className='col' id='competence'>
                            <h2>COMPETENCES</h2>
                            <hr id='competenceline'/>
                            <div className='row flexend'>
                                <div className='row spacearound' id='skillcard-container'>
                                    <Skillcard competenceNumber='0'/>
                                    <div className='vertical-line'></div>
                                    <Skillcard competenceNumber='1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='delimit'>
                    <div className='verticalaligntext'>
                        <h2>PROJETS</h2>
                    </div>
                </div>
                <div className='page col flexcenter'>
                    <div className='projetcontainer row'>
                        <Projet numProjet='0'/>
                        <Projet numProjet='1'/>
                        <Projet numProjet='2'/>
                    </div>
                </div>
            </div>
            <div className='bordurebottom'></div>
            <NavigationHome/>
        </main>
    );
};

export default Home;