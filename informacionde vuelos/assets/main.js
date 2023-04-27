$(document).ready(function () {
    alert("Pasajero, se recuerda que para abordar el avion debe tener en mano su pasaporte y su boletode embarque. Mantengase atentoa los avisosmediante esta plataforma")
    
    setInterval(function() { // aca declaro la clases  now se utiliza para todo lo que es date o fechas
        let now = new Date();
        let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(); // concatene este para ver la hora en el cuadro
        let year = now.getFullYear();// declaro el año
        let month = now.getMonth() + 1;// La expresión now.getMonth() + 1 se utiliza en el código que te mostré para obtener el número del mes actual, pero sumando 1 al resultado. Esto se debe a que la función getMonth() devuelve un número del 0 al 11, por lo que al sumar 1, obtenemos el número del mes en el rango del 1 al 12.
        let day = now.getDate();
        let date = day + "/" + month + "/" + year; // se deja asi para que separa el dia, mes y año 
        $('#insertDate').text(date);
        $('#insertTime').text(time);
      }, 1000);
      
      function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // La función "Math.random()" devuelve un número aleatorio entre 0 y 1 (exclusivo), lo que significa que puede ser 0, pero nunca puede ser exactamente 1
        //La expresión "Math.random() * 10" multiplica este número aleatorio por 10, lo que significa que puede devolver un número aleatorio entre 0 y 9.99999...
        //La función "Math.floor()" redondea ese número hacia abajo al entero más cercano, lo que significa que si el número aleatorio es 3.99, se redondeará a 3.
        //Por lo tanto, la expresión "Math.floor(Math.random() * 10)" devolverá un número aleatorio entero entre 0 y 9, ambos incluidos.
        //Finalmente, se agrega 1 a este número aleatorio para que el resultado final esté entre 1 y 10, ambos incluidos.
        //Por lo tanto, la función "getRandomNumber()" devuelve un número entero aleatorio entre 1 y 10 cada vez que se llama.
      }
      
      $('#flightNumber').text(getRandomNumber());
      $('#terminalNumber').text(getRandomNumber());
      

})