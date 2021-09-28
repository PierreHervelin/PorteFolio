import React, { useState } from 'react';
import { ProjetContent } from '../data/data';

const Projet = (props) => {
    const [projets,t]=useState(ProjetContent);
    const projet=projets[props.numProjet];
    const skills=projet.skills.map((item)=> <p>{item}</p>);
    return (
        <div className='projet'>
            <h3>PROJET {props.numProjet}</h3>
            <div className='projetcard col'>
                <h4>{projet.title}</h4>
                <img src={require(projet.imgsrc)} alt=''/>
                <div className='description'>
                    {projet.description}
                </div>
                <div className='projetinfos'>
                    <div>Etat: {projet.state}</div>
                    <div>[ {skills} ]</div>
                </div>
                <a href={projet.link}>VOIR PLUS</a>
            </div>
        </div>
    );
};

export default Projet;