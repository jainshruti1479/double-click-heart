const imgContainer = document.querySelector('.container')
const heart = document.querySelector('.heart')

imgContainer.addEventListener('dblclick',(e)=>{
    console.log(e);
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    heart.style.left = `${x}px`
    heart.style.top = `${y}px`
    heart.classList.add('active')
    // setTimeout(()=>{
    //     heart.classList.remove('active')
    // },1000)

})
