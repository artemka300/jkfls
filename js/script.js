// const tel1 = document.querySelector('#phone');
// const passw1 = document.querySelector('#passw');
// const btn1 = document.querySelector('#btn');
// const token1 = document.querySelector('.token');
// btn1.addEventListener ('click', ()=>grt(phone.value, passw.value));


// async function grt(phone, password) {
//     const formData = new FormData();
//     formData.append ('phone', '89001234567');
//     formData.append ('password', 'password');

//     const resp = await fetch('http://fnc-master/api/login', {
//         method: "POST",
//         body: formData,
//     });
//      const res = await resp.json();
//      token1.innerHTML = `<h1>${res.data.token}</h1>`
//      console.log(res);

// }
// var tex1 = document.querySelector('#tex')
// var bl1 =document.querySelector('#bl');

// tex1.addEventListener('keyup', function( ) {
//     bl.textContent =  tex1.value
 
// })
const x = document.querySelector('#x');
const y = document.querySelector('#y');
const forms = document.querySelector('.dgf');
const color = document.querySelector('#color')

color.addEventListener('input', (e)=> {
    forms.style.background = e.target.value;
    console.log(e.target.value);
})

x.addEventListener('input', (e) => {
    forms.style.width=e.target.value+'px'
    console.log(e.target.value);
})
y.addEventListener('input', (e) => {
    forms.style.height=e.target.value+'px'
    console.log(e.target.value);
})