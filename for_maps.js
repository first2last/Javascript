const map = new Map() ; 
map.set(1 , "India") ; 
map.set(2 , "New Delhi") ; 
map.set(3 , "uttar Pradesh") ; 
map.set(4 , "Lucknow") ;

for (const [key , value] of map) {
    console.log(key  + " " + value) ; 
}