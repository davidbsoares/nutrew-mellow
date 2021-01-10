new Glider(document.querySelector('.cards-carousel'), {
  slidesToShow: 1.5,
  slidesToScroll: 1,  
  draggable: true,
  responsive: [
    {
    breakpoint: 690,
    settings:{
      slidesToShow: 3,
      draggable:true
    }
    }
  ]  
});



new Glider(document.querySelector('.recipes-carousel'), {  
  slidesToShow: 2,
  slidesToScroll: 1,  
  draggable: true,
  responsive: [
    {
    breakpoint: 690,
    settings:{
      slidesToShow: 4,
      slidesToScroll: 2,  
      draggable: true,
    }
    }
  ]
});

new Glider(document.querySelector('.gogreen-carousel'), {
  slidesToShow: 2,
  slidesToScroll: 2,  
  draggable: true,
  responsive: [
    {
    breakpoint: 690,
    settings:{
      slidesToShow: 1,
      slidesToScroll: 1,  
      draggable: true
    }
    }
  ]
});


new Glider(document.querySelector('.howto-carousel'), {  
  slidesToShow: 1,
  slidesToScroll: 1,  
  draggable: true,
  responsive: [
    {
    breakpoint: 690,
    settings:{
      slidesToShow: 1.5,
      slidesToScroll: 1,  
      draggable: true
    }
    }
  ]
});