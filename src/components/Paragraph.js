import React, {useState,useEffect} from 'react';
import { ParagraphContent } from '../data/data';

const Paragraph = (props) => {
    const [paragraphs,t]=useState(ParagraphContent);
    const paragraph=paragraphs[props.paragraphNumber];

    useEffect(() => {
        const content=document.querySelectorAll('.paragraph');
        setTimeout(() => {
            for(var i in content){
                if(!isNaN(i)){
                    content[i].style.opacity=1;
                }
            }
        }, 3900);
    }, [])

    return (
        <p className="paragraph">
            {paragraph.content}
        </p>
    );
};

export default Paragraph;