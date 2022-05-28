
    let woods = document.getElementById('woods')
    let woods1 = document.getElementById('woods1')
    let woods2 = document.getElementById('woods2')
    let title = document.getElementById('title')

// Detta gör så att hemsidan rör sig när man scrollar
    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      woods.style.top = value * 0.1 + 'px';
      woods1.style.top = value * 0.85 + 'px';
// if satsen gör att sidan får en botten. Så om value gånger 1.25 blir mindre än 750 så stannar den.
if(value * 1.25<750){
      woods2.style.top = value * 1.25 + 'px';
}

      title.style.right = value * 4 + 'px';
    })
