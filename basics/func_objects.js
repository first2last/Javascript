function calCart(...num) {
    return num;
}

// console.log(calCart(23, 34.90, 90, "vish"));

myobj = {

    user: "Vishesh",
    age: 20,
    location: "Grkp",
    course: "Btech",
    cgpa: "8.7"

}


function details(myobj) {
    console.log(`My name is ${myobj.user} . I am ${myobj.age} years old.
I am pursuing ${myobj.course} from ${myobj.location} and have got ${myobj.cgpa} in first sem .`)
}


// details(myobj) ; 

const myarr = [20 , 50 , "vish" , 1947] ; 

function arrReturn(myarr){
    for (let i = 0; i < myarr.length; i++) {
        const element = myarr[i];
        console.log(element) ; 
    }
    
}


arrReturn(myarr) ; 