var randomArray = Array.from({length: 5}, () => Math.floor(Math.random() * 10+1));

document.write("<p>The numbers are: </p>"+randomArray);

let count = 0;

var userNumber = parseInt(prompt("Insert a number"));


randomArray.forEach(element => {
   if (element === userNumber){
       count+=1;
   }    
});

alert("Your number appears "+count+" times!")
