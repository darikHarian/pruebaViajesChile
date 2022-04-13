// ALERT ENVIO FORMULARIO

$(document).ready(function(){
    $("#enviarMensaje").on('click', function(){
        alert("El mensaje fue enviado correctamente!");
    });
});

// TOGGLE P SECCION DESTACADOS

function toggle1() {

    var x = document.getElementById('tt1');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
}

function toggle2() {

    var x = document.getElementById('tt2');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
}

function toggle3() {

    var x = document.getElementById('tt3');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
}

function toggle4() {

    var x = document.getElementById('tt4');

    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
}

// NAVBAR LINKS

$(document).ready(function() { 
    $('#href1').on('click', function() {
        document.querySelector('#top').scrollIntoView({behavior: 'smooth'});
    });
    
    $('#href2').on('click', function() {
        document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
    });
    
    $('#href3').on('click', function() {
        document.querySelector('#featured').scrollIntoView({behavior: 'smooth'});
    });
    
    $('#href4').on('click', function() {
        document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
    });
});