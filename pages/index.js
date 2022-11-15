var profile = [
    {
        id: 1,
        name: "Ольга",
        city: "Красногорск",
        img: '../assets/images/olga.png'
    },
    {
        id: 2,
        name: "Джон Смит",
        city: "Лондон",
        img: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg'
    },
    {
        id: 3,
        name: "Гермиона",
        city: "Милан",
        img: 'https://www.morganstanley.com/content/dam/msdotcom/people/tiles/tile-shelbie.jpg.img.380.medium.jpg/1592241040775.jpg'
    },
    {
        id: 4,
        name: "Аиша",
        city: "Мекка",
        img: 'https://i.pinimg.com/736x/49/84/b6/4984b66e0ab96137c9b5594e886fdedb.jpg'
    },
    {
        id: 5,
        name: "Умар",
        city: "Иерусалим",
        img: 'https://images.unsplash.com/photo-1609528904487-b3476d8f8451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzbGltJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
]



var $btn_1 = document.getElementById('btn-1');
var $btn_2 = document.getElementById('btn-2');
var $btn_3 = document.getElementById('btn-3');
var $btn_4 = document.getElementById('btn-4');
var $cost_img = document.getElementById('image');
var $cost_box = document.getElementById('cost__box');
var $leftArrow = document.getElementById('leftArrow');
var $rightArrow = document.getElementById('rightArrow');
var $line_1 = document.getElementById('line1');
var $line_2 = document.getElementById('line2');
var $line_3 = document.getElementById('line3');
var $line_4 = document.getElementById('line4');
var $line_5 = document.getElementById('line5');
var $comment_img = document.getElementById('comment__img');
var $name = document.getElementById('name')
var $city = document.getElementById('city')


$btn_1.style.backgroundColor = '#2194FF'

$btn_1.addEventListener('click', e => {
    e.preventDefault()

    $btn_1.style.backgroundColor = '#2194FF'
    $btn_2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'

    $cost_img.classList.add('img-1')
    $cost_img.classList.remove('img-2')
    $cost_img.classList.remove('img-3')
    $cost_img.classList.remove('img-4')
})

$btn_2.addEventListener('click', e => {
    e.preventDefault()

    $btn_1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_2.style.backgroundColor = '#2194FF'
    $btn_3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'

    $cost_img.classList.remove('img-1')
    $cost_img.classList.add('img-2')
    $cost_img.classList.remove('img-3')
    $cost_img.classList.remove('img-4')
})

$btn_3.addEventListener('click', e => {
    e.preventDefault()

    $btn_1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_3.style.backgroundColor = '#2194FF'
    $btn_4.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'

    $cost_img.classList.remove('img-1')
    $cost_img.classList.remove('img-2')
    $cost_img.classList.add('img-3')
    $cost_img.classList.remove('img-4')
})

$btn_4.addEventListener('click', e => {
    e.preventDefault()

    $btn_1.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_2.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_3.style.backgroundColor = 'rgba(241, 241, 241, 0.2)'
    $btn_4.style.backgroundColor = '#2194FF'

    $cost_img.classList.remove('img-1')
    $cost_img.classList.remove('img-2')
    $cost_img.classList.remove('img-3')
    $cost_img.classList.add('img-4')
})


$comment_img.classList.toggle('img-1');
$leftArrow.addEventListener('click', e => {
    e.preventDefault()
    
    for(let i=0; i < profile.length; i++){
        $name.textContent = profile[i].name
        $city.textContent = profile[i].city
        $comment_img.innerHTML = `
        <img class="comment__image" src=${profile[i].img} alt="image">
        `
    }

})

$rightArrow.addEventListener('click', e => {
    e.preventDefault()
    
    for(let i=0; i < profile.length; i++){
        $name.textContent = profile[i].name
        $city.textContent = profile[i].city
        $comment_img.innerHTML = `
        <img class="comment__image" src=${profile[i].img} alt="image">
        `
    }

})