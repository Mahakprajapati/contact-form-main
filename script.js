const inputfields=document.querySelectorAll('input[type="text"]');
const email=document.querySelector('input[type="email"]');
const message=document.querySelector('#message');
const label_radios=document.querySelectorAll('.label-radio');
const textArea=document.querySelector('textarea');
const checkbox=document.querySelector('.checkbox');
const radios=document.querySelectorAll('.label-radio span');
const button=document.querySelector('.button');
const container=document.querySelector('.container');



label_radios.forEach((label_radio)=>{
    label_radio.addEventListener('click',()=>{
        label_radio.classList.add('query-background');
    })
})

let filledinputfields=false;

let allInputfields=[...inputfields,email,message];
    // console.log(allInputfields);

allInputfields.forEach((input)=>{
    // console.log(input);
    input.addEventListener('input',()=>{
        // console.log(filledinputfields);
       filledinputfields=allInputfields.every((input)=>{

        return input.value;
       });

    });
    input.addEventListener('focus',()=>{
        container.classList.remove('errors');
       });
});

radios.forEach((radio)=>{
    radio.addEventListener('click',()=>{
        container.classList.remove('errors');
    })
})


checkbox.addEventListener('click',()=>{
    checkbox.parentElement.classList.toggle('checkbox-success');
})
checkbox.addEventListener('click',()=>{
    container.classList.remove('errors');
})


button.addEventListener('click',()=>{
    if(!filledinputfields){
        container.classList.add('errors');
    }else{
        alert(`Message Sent! 

        Thanks for completing the form. We'll be in touch soon! `)
    }
});

