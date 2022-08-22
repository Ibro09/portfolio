const header=document.querySelector('.projects');
const preloader=document.querySelector('#preloader');
const head=document.querySelectorAll('#header')
const title=document.querySelectorAll('#title')
const p=document.querySelectorAll('#ab')
const info=document.querySelectorAll('#info');
const animatedBg=document.querySelectorAll('.animatedBg')
const animatedtxt=document.querySelectorAll('.animatedtxt')




const array=[
{img:`./pics/counter.png`,
address:`counter`,
info:'this project was built with html, css, and javascript',
link:'https://ibro09.github.io/counter/',

},
{img:`./pics/menu.png`,
address:`menu project`,
info:'this project was built with html, css and javascript',
link:'https://ibro09.github.io/menu-project/',
},
{img:`./pics/nav-bar.png`,
address:`navigation bar`,
info:'this project was built with html, css and javascript',
link:'https://ibro09.github.io/nav-bar/',
},
{img:`./pics/numbers.png`,
address:`numbers counter`,
info:'this project was built with html, css and javascript',
link:'https://ibro09.github.io/numbers-counter/',

},
{img:`./pics/stripe.png`,
address:`stripe clone`,
info:'this project was built with html, css, bootstrap and javascript',
link:'https://ibro09.github.io/stripe-clone/',
},
{img:`./pics/videoproject.png`,
address:`video project`,
info:'this project was built with html, css, and javascript',
link:'https://ibro09.github.io/video-project/',
}
,
{img:`./pics/youtube-clone.png`,
address:`youtube-clone`,
info:'this project was built with html, css, bootstrap and javascript',
link:'https://ibro09.github.io/portfolio/',
},
{img:`./pics/Opera Snapshot_2022-08-19_202733_index.html.png`,
address:`scroll project`,
info:'this project was built with html, css, and javascript',
link:'https://ibro09.github.io/scroll-project/',
},
{img:`./pics/Opera Snapshot_2022-08-19_201950_index.html.png`,
address:`name filter`,
info:'this project was built with html, css, and javascript',
link:'https://ibro09.github.io/name-filter/',
},
{img:`./pics/content-placeholder.png`,
address:`content placeholder`,
info:'this project was built with html, css and javascript',
link:'https://ibro09.github.io/content-placeholder/',
}
]
let counter=0;

header.innerHTML=`<h2> <i class="fas fa-plus"></i> ${counter}
</h2> projects completed`

function preLoader(){
    setTimeout(() => {
      preloader.style.display='none';
      const interval =setInterval(() => {
        counter++
        if (counter===23) {
        clearInterval(interval)
        }
        header.innerHTML=`<h2> <i class="fas fa-plus"></i> ${counter}
      </h2> projects completed`;
     setTimeout(() => {
       data()
     }, 2000);
      
      }, 80)
    }, 2000);
  }
  preLoader()


console.log();
function data(){
    head.forEach((items,index)=>[
      items.innerHTML=`<img src="${array[index].img}" width="100%" height="100%"/>`
    ])
    title.forEach((item,index)=>[
        item.innerHTML=`<h6>${array[index].address}</h6>`
      ])
    p.forEach((item,index)=>[
        item.innerHTML=`<p>${array[index].info}</p>`
      ])
    info.forEach((item,index)=>[
        item.innerHTML=`<a href=${array[index].link} target="_blank">view project here</a>`
      ])
    animatedBg.forEach(bg=>bg.classList.remove('animatedBg'))
    animatedtxt.forEach(txt=>txt.classList.remove('animatedtxt'));  
}
