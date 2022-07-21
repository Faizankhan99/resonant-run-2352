const q=document.querySelectorAll('.question');
const a=document.querySelectorAll('.answer');
const arr=document.querySelectorAll('.arrow');
for(let i=0;i<q.length;i++){
    q[i].addEventListener('click',() => {
a[i].classList.toggle('answer-opened');
arr[i].classList.toggle('arrow-rotated');
    });
}