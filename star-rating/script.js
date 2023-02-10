const stars = document.querySelector('.star-wrapper');
const allStar = document.querySelectorAll('.star');
const updateRating = document.querySelector('#count');
let starCnt = 0;

const handleMouseOver = (e)=>{
    const hoverCnt = e.target.dataset.index;
    allStar.forEach(star=>{
        star.classList.remove('filled');
    })
    for(let i=0; i<hoverCnt; i++){
        allStar[i].classList.add('filled');
    }
}

const handleClick=(e)=>{
    starCnt = +e.target.dataset.index;
    updateRating.innerHTML=starCnt;
}

const handleMouseOut =()=>{
    allStar.forEach(star=>{
        star.classList.remove('filled');
    })
    for(let i=0; i<starCnt; i++){
        allStar[i].classList.add('filled');
    }
}
stars.addEventListener('click',handleClick);
stars.addEventListener('mouseover',handleMouseOver);
stars.addEventListener('mouseout',handleMouseOut);