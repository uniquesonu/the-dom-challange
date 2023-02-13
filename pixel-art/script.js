const palettes = document.querySelectorAll('.palettes');
const pixelContainer = document.querySelector('.pixel-container');
const randomColor =(i)=>{
    const h = 36*i;
    const s = 60;
    const l = 60;
    return `hsl(${h},${s}%,${l}%)`;
}
let SELECTED_COLOR = 'hsl(360,100%,100%)';

const populatePalettesColor =()=>{
    palettes.forEach((colorEl,index)=>{
        colorEl.style.setProperty('--fill-color',randomColor(index));
    })
}
populatePalettesColor();

const handleClick = (e) =>{
    let checkPalettes = e.target.classList.contains('palettes')
    if(checkPalettes){
        SELECTED_COLOR = e.target.style.getPropertyValue('--fill-color');
    }else if(e.target.classList.contains('pixel-cell')){
        e.target.style.setProperty('--fill-color',SELECTED_COLOR);
    }
}
const dragEvent = (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('palettes')){
        SELECTED_COLOR = e.target.style.getPropertyValue('--fill-color');
    } 
    else if(e.target.classList.contains('pixel-cell')){
        e.target.style.setProperty('--fill-color',SELECTED_COLOR);
    }
    
}
const handleMouseUp = () =>{
    pixelContainer.removeEventListener('mouseover',dragEvent);
    document.removeEventListener('mouseup',handleMouseUp);
}

const handleDrag=()=>{
    pixelContainer.addEventListener('mouseover',dragEvent);
    document.addEventListener('mouseup',handleMouseUp);
}


pixelContainer.addEventListener('click',handleClick);
pixelContainer.addEventListener('mousedown',handleDrag)