function ch(){
    var check = document.getElementById("menubar").checked;
       var i1=document.getElementById("i1");
       var i2=document.getElementById("i2");
       var i3=document.getElementById("i3");
    if(check==true)
    {
         i1.setAttribute("style",`
              transform:rotate(45deg); 
              margin-top:10px;
         `)
         i2.setAttribute("style",`
              margin-left:-50px;
         `)
         i3.setAttribute("style",`
              transform:rotate(135deg); 
              margin-top:-9px;
         `)
    }
    else{
       i1.removeAttribute("style");
       i2.removeAttribute("style");
       i3.removeAttribute("style");
    }
}


const bars = document.querySelectorAll('.progress-done');
bars.forEach((bar) => {
    bar.style.width = bar.getAttribute('done') + '%';
});
var circles= document.querySelectorAll('.circle');
circles.forEach((circle)=>{
    var data= circle.getAttribute('done')+'%';
   circle.style.background= `conic-gradient(#0575e6 ${data},#333 0%)`;
});