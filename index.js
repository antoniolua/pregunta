const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
   

    Swal.fire({
        title: 'Siempre supe que si querias',
        text: '♡',
        imageUrl: 'https://cdn-3.expansion.mx/c1/2a/e9cc406742c68f20ec6984ff3b1d/epn-corazon-momentos.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        padding: '1em',
        position: 'center',
       
        showConfirmButton: false,
        timer: 10000
      })
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function (){
    const randomX = Math.random()*100
   const randomY = Math.random()*100
   noBtn.style.position = 'absolute'
   noBtn.style.top = randomY+ '%'
   noBtn.style.left = randomX+ '%'
   noBtn.style.transform = 'translate(-${randomX}%,-${randomY}%'
})
