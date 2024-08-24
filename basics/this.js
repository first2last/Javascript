const  myobj = {
   name : "Vishesh" , 

   fun :  function call(){
     console.log(`welcome ${this.name} to demonstration of this.`) ; 
   } , 

   password  : {
       old : "@90876" , 
       new : "@12345"
   }
   
}

myobj.fun() ; 
console.log(myobj["password"]["new"]) ;  
console.log(this) ; 
console.log() ; 