let mybtn = document.getElementById("btn")
let text = document.getElementById("cont")

 let i = 0
const print = ()=>{
   
    const textArr =
    [

      `<blockquote  dir="rtl" lang="ar" class="text" id="text">
           
    حتى الجمادات تعلم ان مافعلته لاينبغي فِعلُه
       
    </br>
       <cite class = "cite">السطر الاول </cite>
     </blockquote>
      `
       ,
    `
    <blockquote  dir="rtl" lang="ar" class="text" id="text">
           
   مُبرر الجريمة مُجرم لم تسنح له الفرصة للإجرام بعد
     
  </br>
     <cite>السطر الثاني</cite>
   </blockquote>
    `
    ,



    // تم التوقف
    
    `<blockquote  dir="rtl" lang="ar" class="text" id="text">
           
    حتى الجمادات تعلم ان مافعلته لاينبغي فِعلُه
       
    </br>
       <cite class = "cite">سطر 1 </cite>
     </blockquote>
      `
       ,
    `
    <blockquote  dir="rtl" lang="ar" class="text" id="text">
           
   مُبرر الجريمة مُجرم لم تسنح له الفرصة للإجرام بعد
     
  </br>
     <cite>سطر 2 </cite>
   </blockquote>
    `
    
    ]
  

    text.innerHTML = textArr[i]
    
    i++
      if(i == textArr.length)
      {
        i = 0
      }
      // else {
      //   continue
      // }
    }







// document.getElementById("btn")
// document.getElementById("text").innerHTML= 

// '<h1 class = "new-text">jlfj</h1>'

// const btn = document.getElementsByClassName(".btn-next")
// const type = document.querySelector(".type");
// let i = 0;


// btn.addEventlistener("click", fn())

//    const textArr =
//    [' hhh ', 'kljkn'];

// type.innerHTML = textArr[i]
//  i++

// })

