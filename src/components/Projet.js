import React, { useState } from 'react';
import { ProjetContent } from '../data/data';

const Projet = (props) => {
    const [projets,t]=useState(ProjetContent);
    const projet=projets[props.numProjet];
    const skills=projet.skills.map((item)=> <p key={item}>{item}</p>);
    return (
        <div className='projet'>
            <div className='projetcard col'>
                <h3>PROJET {props.numProjet}</h3>
                <h4>{projet.title}</h4>
                <div className='imgprojet'>
                    <div id={projet.imgsrc}>
                        <div className='description'>
                            {projet.description}
                            <a href={projet.link}>{projet.seeMore}</a>
                        </div>
                    </div>
                </div>
                <div className='projetinfos'>
                    <div>Etat : {projet.state}</div>
                    <div className='row'>[ {skills} ]</div>
                </div>
            </div>
        </div>
    );
};

export default Projet;