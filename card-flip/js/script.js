const likeBtn = document.getElementById('like-button');
const likeQtd = document.getElementById('like-count');
const heartIcon = document.getElementById('heart-icon');

let likes = 0;

likeBtn.addEventListener('click', () => {
    
heartIcon.style.fill = 'red'
    likes++;
    likeQtd.innerHTML = likes;
    likeBtn.style.border = '1px solid red'

});