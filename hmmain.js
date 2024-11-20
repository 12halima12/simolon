let number = 10
if (number > 0){ 
console.log("Positive")
}
    else{
    console.log("Négative")
    }



let num = 10
if (num % 2 == 0){
    console.log("Pair")
}   
    else{
        console.log("Impair")
    }



    let a = 12
    let b = 2
    if (a > b){
      console.log(" le nombre le plus grand c'est a: " + b)
    }
      else if{
          console.log(" le nombre le plus grand c'est b: " + a)
      }
    else{
        console.log("les nombres sont égaux")
    }  
      

      let temp = 45
      if(temp > 30){
         console.log("Chaud")
      } 
     else if(temp> 15 && temp <30){
         console.log("Tiède")
     }
         else{
             console.log("Froid")
         }              

         
 let password = "letmein"
         if (password == "letmein"){
             console.log("Access Gtanted")
         }
             else{
                 console.log("Access Denied")
             } 
             
             

let day = "3"
switch (day){
    case 1 :
        console.log("Lundi")
    break;
    case 2 :
        console.log("Mardi")
    break;
    case 3:
        console.log("Mercredi")
    break;
    case 4 :
        console.log("Jeudi")
    break;
default :
    console.log("not a day")
    break;
}                          



let age = 15
age >= 18 ? console.log("Adult") : age > 13 && age < 17 ? console.log("Adolescent") : console.log("Enfant")



let light = "green"
switch (light){
    case "red" :
        console.log("Stop")
    break;
    case "yellow" :
        console.log("Slow")
    break;
    case "green" :
        console.log("Go")
    break; 
}

let age = 34
age >= 18 ? console.log("Can drive") : console.log("Cannot drive")       