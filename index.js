const courses = [
    {
        name:'math',
        image:'./image/img1.jpg',
        lien:"https://www.youtube.com/"
    },
    {
        name:'Chimie',
        image:'./image/img1.jpg',
        lien:"https://www.youtube.com/"
    },
    {
        name:'Loi',
        image:'./image/img1.jpg',
        lien:"https://www.youtube.com/"
    },
]

const professseur = [
    {
        name:'mohammed',
        job:'math',
        image:'./image/teacher1.jpg'
    },
    {
        name:'hicham',
        job:'chimie',
        image:'./image/teacher1.jpg'
    },
    {
        name:'ismail',
        job:'informatique',
        image:'./image/teacher1.jpg'
    },
]


const prof = document.querySelector('.pro_container')
const add_prof = professseur.map(item=>{
    return`
    <article class="profe">
                <img src="${item.image}" alt="" width="400">
                <div class="content">
                    <h3>professeur ${item.name}</h3>
                    <h4>professeur de ${item.job}</h4> 
                    <div class="socials">
                        <img src="./icons/instagram.png" alt="">
                        <img src="./icons/linkedin.png" alt="">
                        <img src="./icons/mail.png" alt="">
                        <img src="./icons/phone-call.png" alt="">
                    </div>
                </div>
            </article>
    `
}).join('')
prof.innerHTML = add_prof







const course_article = document.querySelector('.container-course')

const add_course = courses.map(item =>{
    return(`
            <article class="image-1">
            <a href="${item.lien}" target="_blank">
            <img src="${item.image}" alt="">
            </a>
            <h3>${item.name}</h3>
            </article>
    `)
}).join('')
 course_article.innerHTML = add_course