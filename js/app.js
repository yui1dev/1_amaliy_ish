function rangTiruvchi(){
    let rang = document.getElementById("rangOzgar").value.toLowerCase();

    switch(rang){
        case 'red':
            document.body.style.backgroundColor = 'red';
            break;
         case 'yellow':
            document.body.style.backgroundColor = 'yellow';
            break;
         case 'green':
            document.body.style.backgroundColor = 'green';
            break;
         case 'white':
            document.body.style.backgroundColor = 'white';
            break;
         case 'blue':
            document.body.style.backgroundColor = 'blue';
            break;
         case 'pink':
            document.body.style.backgroundColor = 'pink';
            break;
         case 'black':
            document.body.style.backgroundColor = 'black';
            break;

            default: alert("Rang topilmadi")
    }

}
function TextTiruvchi(){
    let text = document.getElementById("fontOzgar").value.toLowerCase();

    switch(text){
        case 'red':
            document.getElementById("TextOzgar").style.color = 'red';
            document.getElementById("TexOzgar").style.color = 'red';
            document.getElementById("TextOzgar3").style.color = 'red';
            document.getElementById("TextOzgar4").style.color = 'red';
            break;
         case 'yellow':
            document.getElementById("TextOzgar").style.color = 'yellow';
            document.getElementById("TexOzgar").style.color = 'yellow';
            document.getElementById("TextOzgar3").style.color = 'yellow';
            document.getElementById("TextOzgar4").style.color = 'yellow';
            break;
         case 'white':
            document.getElementById("TextOzgar").style.color = 'white';
            document.getElementById("TexOzgar").style.color = 'white';
            document.getElementById("TextOzgar3").style.color = 'white';
            document.getElementById("TextOzgar4").style.color = 'white';
            break;
         case 'blue':
            document.getElementById("TextOzgar").style.color = 'blue';
            document.getElementById("TexOzgar").style.color = 'blue';
            document.getElementById("TextOzgar3").style.color = 'blue';
            document.getElementById("TextOzgar4").style.color = 'blue';
            break;
         case 'pink':
            document.getElementById("TextOzgar").style.color = 'pink';
            document.getElementById("TexOzgar").style.color = 'pink';
            document.getElementById("TextOzgar3").style.color = 'pink';
            document.getElementById("TextOzgar4").style.color = 'pink';
            break;
         case 'green':
            document.getElementById("TextOzgar").style.color = 'green';
            document.getElementById("TexOzgar").style.color = 'green';
            document.getElementById("TextOzgar3").style.color = 'green';
            document.getElementById("TextOzgar4").style.color = 'green';
            break;
         case 'black':
            document.getElementById("TextOzgar").style.color = 'black';
            document.getElementById("TexOzgar").style.color = 'black';
            document.getElementById("TextOzgar3").style.color = 'black';
            document.getElementById("TextOzgar4").style.color = 'black';
            break;

            default: alert("Rang topilmadi")
    }

}