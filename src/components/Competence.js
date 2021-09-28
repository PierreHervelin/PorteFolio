import React, { useState } from 'react';
import { CompetenceContent } from '../data/data';

const Competence = (props) => {
    const [competences,t]=useState(CompetenceContent);
    const competence=competences[props.competenceNumber];

    const list= competence.skills.map((item) =>  <li className='skill'>{item}</li>);

    return list;
};

export default Competence;