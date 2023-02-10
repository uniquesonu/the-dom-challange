const btn = document.querySelector('button');
const progress = document.querySelector('.progress');
const btnCnt = document.querySelector('span');
let RUN=0;
let isRunning = false;

const handleRunning =() =>{
    isRunning = true;
    if(RUN==0){
        isRunning = false;
        return;
    }
    progress.classList.add('running');
    setTimeout(()=>{
        progress.classList.remove('running');
        RUN--;
        if(RUN===0){
            btnCnt.innerHTML='';
            return;
        }
        btnCnt.innerHTML=RUN;
    },3000)
    setTimeout(handleRunning,3200)
}

const handleclick = () =>{
    RUN++;
    btnCnt.innerHTML=RUN;
    !isRunning && handleRunning();
}

btn.addEventListener('click',handleclick);