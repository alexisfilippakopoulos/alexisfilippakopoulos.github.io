const text="Undergraduate @ Department of Informatics, Athens University of Economics and Business      "; //you can change the template here 

let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,100);