const q=document.querySelectorAll('.question');
const a=document.querySelectorAll('.answer');
const arr=document.querySelectorAll('.arrow');
for(let i=0;i<q.length;i++){
    q[i].addEventListener('click',() => {
a[i].classList.toggle('answer-opened');
arr[i].classList.toggle('arrow-rotated');
    });
}



function myFunction(){
  console.log("inner")
  var x = document.querySelector(".amount1");
  var y= document.querySelector(".des");
  console.log(x)
  console.log(y)
  if (x.innerText =="$12") {
          x.innerText = "$10.80";
         y.innerText="per seat per month,billed yearly";
         console.log(x)
       } else {
        x.innerText = "$12";
        y.innerText="per seat per month";
        }


}
 