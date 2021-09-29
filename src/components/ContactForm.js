import React, { useState } from 'react';

const ContactForm = () => {
    const [name,setName]=useState('');
    const [company,setCompany]=useState('');
    const [email,setEmail]=useState('');
    const [content,setContent]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        let nameS=document.getElementById('name');
        let emailS=document.getElementById('email');
        let messageS=document.getElementById('message');
        let formMess=document.getElementById('form-message');

        const isEmail=()=>{
            let regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(email.match(regex)){
                return true;
            }else{
                return false;
            }
        }
        if(name && isEmail() && content){
            const templateId='template_v3iwdq6';

            nameS.classList.remove('error');
            emailS.classList.remove('error');
            messageS.classList.remove('error');

            sendFeedback(templateId,{
                name,
                company,
                email,
                content
            });

        }else{
            let regex=/^[a-zA-Z]{2,}$/;

            formMess.style.display='block';
            formMess.innerHTML='Merci de remplir correctement les champs requis'
            formMess.style.opacity='1';
            formMess.style.animation='dongle 1s';
            setTimeout(() => {
                formMess.style.animation='none';
            }, 1000);
            console.log(name);

            if(!name||!name.match(regex)){
                nameS.classList.remove('error');
                nameS.classList.add('error');
            }else{
                nameS.classList.remove('error');
            }
            if(!email || !isEmail()){
                emailS.classList.remove('error');
                emailS.classList.add('error');
            }else{
                emailS.classList.remove('error');
            }
            if(!content||!content.match(regex)){
                messageS.classList.remove('error');
                messageS.classList.add('error')
            }else{
                messageS.classList.remove('error');
            }
        }
    };
    const sendFeedback=(templateId,variables)=>{
        let formMess=document.getElementById('form-message');

        window.emailjs
            .send('service_oulzl98',templateId,variables,'user_FYFcyJSYJEqRXvCxXTNEz')
            .then((res)=>{
                formMess.innerHTML='Message envoyé !';
                formMess.style.color='green';
                formMess.style.opacity='0';
                formMess.style.display='block';
                formMess.style.opacity='1';

                setName('');
                setCompany('');
                setEmail('');
                setContent('');

                setTimeout(() => {
                    formMess.style.opacity='0';
                }, 5000);
            })
            .catch(
                (err)=>{
                    formMess.innerHTML="Une erreur s'est produite";
                    formMess.style.color='red';
                    formMess.style.opacity='0';
                    formMess.style.display='block';
                    formMess.style.opacity='1';
                }
            );
    };
    return (
        <form className='contact-form col'>
            <div className='col contactTitle'>
                <h2 data-inviewport='opacity1'>CONTACTEZ MOI</h2>
                <hr data-inviewport='hr60%'/>
            </div>
            <div className='form-content col'>
                <div className='row flexend'>
                    <input
                        type='text'
                        id='name'
                        onChange={(e)=>setName(e.target.value)}
                        placeholder='nom *'
                        value={name}
                        data-inviewport='opacity1'
                    />
                    <input
                        type='text'
                        id='company'
                        onChange={(e)=>setCompany(e.target.value)}
                        placeholder='entreprise'
                        value={company}
                        data-inviewport='opacity1'
                    />
                </div>
                <input
                    type='text'
                    id='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='email *'
                    value={email}
                    data-inviewport='opacity1'
                />
                <textarea
                    id='message'
                    onChange={(e)=>setContent(e.target.value)}
                    placeholder='message *'
                    wrap='hard'
                    value={content}
                    data-inviewport='opacity1'
                    required
                />
                <input
                    id='submit'
                    type='submit'
                    value='envoyer'
                    onClick={handleSubmit}
                    data-inviewport='opacity1'
                />
                <div id='form-message'></div>
            </div>
        </form>
    );
};

export default ContactForm;