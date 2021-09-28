import React,{useState} from 'react';
import { CompetenceContent } from '../data/data';
import Competence from './Competence';

const Skillcard = (props) => {
    const [competences,t]=useState(CompetenceContent);
    const competence=competences[props.competenceNumber];
    return (
        <div style={{position:'relative'}} className='skillcard'>
            <h3>{competence.title}</h3>
            <ul className='col mid'>
                <Competence competenceNumber={props.competenceNumber}/>
            </ul>
        </div>
    );
};

export default Skillcard;