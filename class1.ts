//assignment 2
var my_name:string = "Shazil"
console.log("Hello " + my_name + " would you like to learn some Python today?")
//assignment 3
var upper_name = my_name.toUpperCase()
var lower_name = my_name.toLowerCase()
console.log(upper_name)
console.log(lower_name)
//assignment 4
console.log("Master Oogway once said, \"Yesterday is history, tomorrow is a mystery, but today is a gift that is why its called the presen\" ")
// A program to print a famous quote by a famous person
//assignment 5
var famous_peron:string = "Master Oogway"
var famous_quote = famous_peron + " once said, \"Yesterday is history, tomorrow is a mystery, but today is a gift that is why its called the presen\""
console.log(famous_quote)
//assignment 6
console.log("\n \n \t \t  Shazil Ahmed")
//assignment 7 and 8
console.log(6+2)
console.log(4*2)
console.log(10-2)
console.log(72/9)
//assignment 9
// A program to print your favourtie number ////assignment 10
var fav_number:number = 2312
console.log(fav_number)
//assignment 11
var guest_list = ["Shazil" , "Sarosh" , "Hamza" , "Maaz" ,"Azlan"]
console.log(guest_list[0])
console.log(guest_list[1])
console.log(guest_list[2])
console.log(guest_list[3])
console.log(guest_list[4])
//assignment 12
console.log("Good Evening " + guest_list[0] + " Enjoy the party.")
console.log("Good Evening " + guest_list[1] + " Enjoy the party.")
console.log("Good Evening " + guest_list[2] + " Enjoy the party.")
console.log("Good Evening " + guest_list[3] + " Enjoy the party.")
console.log("Good Evening " + guest_list[4] + " Enjoy the party.")
// //assignment 13
var modes_of_transport = ['car' ,'train' , 'tram' , 'bus' ,'bike']
console.log('I would love to own a ' + modes_of_transport[0])
console.log('I would love to travel in a '+ modes_of_transport[1])
console.log('I would love to travel in a '+ modes_of_transport[2])
console.log('I would love to travel in a '+ modes_of_transport[3])
console.log('I would love to own a '+ modes_of_transport[4])
//assignment 14
var new_guest_list = ["Albert Einstein" , "Max Verstrappen" , "Magnus Carlsen"]
console.log(new_guest_list[0] + " Would you like to come to dinner? ")
console.log(new_guest_list[1] + " Would you like to come to dinner? ")
console.log(new_guest_list[2] + " Would you like to come to dinner? ")
//assignment 15
console.log(new_guest_list[1] + " cant make it to the dinner ")
new_guest_list.splice(1 , 2 , "Lewis Hamilton" , "Babar Azam")
console.log("He will be replaced by " + new_guest_list[1] + " and " + new_guest_list[2])
//assignment 16
console.log("Good news everyone. I have found a bigger table! We can have two more guests")
new_guest_list.splice(3 , 0 , "Messi")
new_guest_list.push("Ronaldo") 
console.log(new_guest_list.length)
console.log(new_guest_list[0] + " Would you like to come to dinner? ")
console.log(new_guest_list[1] + " Would you like to come to dinner? ")
console.log(new_guest_list[2] + " Would you like to come to dinner? ")
console.log(new_guest_list[3] + " Would you like to come to dinner? ")
console.log(new_guest_list[4] + " Would you like to come to dinner? ")
//assignment 17
console.log("The dinner table wont be available in time so we will have to reduce the guest list to 2")
new_guest_list.splice(2 , 3)
console.log(new_guest_list , new_guest_list.length)
console.log(new_guest_list[1] + " " + new_guest_list[0] + " You two are still invited to the dinner")
new_guest_list.splice(0 , 2)
console.log(new_guest_list)
//assignment 18
var places_to_visit = ["London" , "Munich" , "Manchester" , "Tokyo" , "New york" , "Barcelona"]
var sorted_array = places_to_visit.slice()
sorted_array.sort()
console.log(places_to_visit)
console.log(sorted_array)
console.log(places_to_visit)
sorted_array.reverse()
console.log(sorted_array)
console.log(places_to_visit)
places_to_visit.reverse()
console.log(places_to_visit)
places_to_visit.reverse()
console.log(places_to_visit)
places_to_visit.sort()
console.log(places_to_visit)
places_to_visit.reverse()
//assignment 19
console.log(places_to_visit)
console.log(places_to_visit.length)
//assignment 20
var countries = ['Pakistan' , 'India' , 'Denmark' , 'England' , 'Sweden' , 'Greece' , 'Croatia' , 'Belgium' , 'Japan']
console.log('List Of Countries: ')
for(let i = 0; i < countries.length; i++){
    console.log(i+1 + ". " + countries[i])
}
//assignment 22
/* index error
console.log(countries[14]) */
//assignment 23 and 24
let car = 'ferrari'
console.log('is car = ferrari? I guess true ')
console.log(car == 'ferrari')
let x = 3
let y = 4
console.log('Are x and y equal? I guess false ')
console.log(x == y)
let a = 3*5
let b = 7+8
console.log('Are a and b equal? I guess true')
console.log(a == b)
let country = 'Pakistan'
console.log("will country be equal to pakistan? I guess true ")
console.log(country == 'pakistan')
let city = 'LONDON'
console.log('will city be equal to london? i guess true')
console.log(city.toUpperCase() == 'LONDON' )
let c = 3
let d = 42
console.log("will d be less than c?  I guess false")
console.log(d < c)
let sport = 'cricket'
console.log('will sport be equal to football? I guess false')
console.log(sport == 'football')
//assignment 25,26 and 27
let alien_color = 'green'
if(alien_color == 'green') {
    console.log('Player earned 5 points')
}
let alien_color2 = 'yellow'
if(alien_color2 == 'green') {
    console.log('Player earned 5 points')
}
let alien_color3 = 'red'
 if(alien_color3 == 'green') {
    console.log('Player earned 5 points')
}else {
    console.log('player earned 10 points')
}
if(alien_color == 'green'){
    console.log('Player earned 5 points')
}else if(alien_color == 'red') {
    console.log('Player earned 10 points')
}else if(alien_color == 'yellow'){
    console.log("player earned 15 points")
}
if(alien_color2 == 'green'){
    console.log('Player earned 5 points')
}else if(alien_color2 == 'red') {
    console.log('Player earned 10 points')
}else if(alien_color2 == 'yellow'){
    console.log("player earned 15 points")
}
if(alien_color3 == 'green'){
    console.log('Player earned 5 points')
}else if(alien_color3 == 'red') {
    console.log('Player earned 10 points')
}else if(alien_color3 == 'yellow'){
    console.log("player earned 15 points")
}
//assignment 28
var age = 30
if(age < 2 && age > 0){
    console.log('The person is a baby')
}else if(age >= 2 && age < 4){
    console.log('the person is a toddler')
}else if(age >= 4 && age < 13){
    console.log('the person is a kid')
}else if(age >= 13 && age < 20 ){
    console.log('the person is a teenager ')
}else if(age >= 20 && age<65){
    console.log('the person is an adult')
} else if(age >= 65){
    console.log('the person is an elder')
}
//assignment 29
var fav_fruit = ['banana' , 'orange' , 'apple' , 'kiwi']
if(fav_fruit[0] == 'tomato' ||  fav_fruit[1] == 'tomato' || fav_fruit[2] == 'tomato' || fav_fruit[3] == 'tomato'){
    console.log('you really like tomatoes')
}else if(fav_fruit[0] == 'dragonfruit' || fav_fruit[1] == 'dragonfruit' || fav_fruit[2] == 'dragonfruit'|| fav_fruit[3] == 'dragonfruit'){
    console.log('you really like dragonfruit')
}else if(fav_fruit[0] == 'blueberry' || fav_fruit[1] == 'blueberry' || fav_fruit[2] == 'blueberry' || fav_fruit[3] == 'blueberry'){
    console.log('you really like blueberry')
}else if(fav_fruit[0] == 'grape' || fav_fruit[1] == 'grape' || fav_fruit[2] == 'grape' || fav_fruit[3] == 'grape'){
    console.log('you really like grape')
}else if(fav_fruit[0] == 'kiwi' || fav_fruit[1] == 'kiwi' || fav_fruit[2] == 'kiwi' || fav_fruit[3] == 'kiwi'){
    console.log('you really like kiwis')
}
//assignment 30,31 and 32
var username = ['eric' , 'shazil' , 'hamza' , 'admin' , 'abdullah']
for(let i=0; i < username.length; i++){
    if(username[i] == 'admin'){
        console.log('Hello admin would you like to see a status report? ')
    }else {
        console.log('Hello ' + username[i] + " thank you for logging in again")
    }
}    
var username2 = []
for(let i=0; i < username.length; i++){
    if(username2.length == 0) {
        console.log('We need to find some users')    
        break
    }
}    
var current_users = ['shazil' , 'hamza' , 'sarosh' , 'maaz' , 'eric']
var new_users = ['max' , 'messi' , 'sarosh' , 'shazil' , 'charles']
for(let i = 0; i < new_users.length; i++ ){
    if(new_users[i] == current_users[0] || new_users[i] == current_users[1] || new_users[i] == current_users[2] || new_users[i] == current_users[3] || new_users[i] == current_users[4] )
    {
        console.log('the username ' + new_users[i] + ' is already taken ')
    }else
    {
        console.log("Congrats, The username " + new_users[i] + ' is available')
    }
}
//assignment 33
var ordinal_number = [1,2,3,4,5,6,7,8,9]
for(let i=0; i < ordinal_number.length; i++)
{
    if(ordinal_number[i] == 1){
        console.log(ordinal_number[i] + 'st')
    }else if(ordinal_number[i] == 2){
        console.log(ordinal_number[i] + 'nd')
    }else if(ordinal_number[i] == 3){
        console.log(ordinal_number[i] + 'st')
    }else {
        console.log(ordinal_number[i] + "th")
    }
}
//assignment 34
var pizzas = ['pepperoni pizza' , 'cheese pizza' , 'pineapple pizza']
for(let i=0; i < pizzas.length; i++){
    if(i==0){
        console.log('Pepperoni Pizza: \nI really like Pepperoni Pizza')
    }else if(i==1){
        console.log('Cheese Pizza: \nCheese Pizza is my favourite')
    }else {
        console.log('Pineapple Pizza: \nI dont like pineapple Pizza')
    }
}
console.log("I love pizzas")
//assignment 35
var animals = ['dog' , 'cat' , 'rabbit']
for(let i=0; i < animals.length; i++){
    if(i==0){
        console.log('Dogs: \nI really like Dogs')
    }else if(i==1){
        console.log('Cats: \nCats are my favourite')
    }else {
        console.log('Rabbits: \nRabbits are cute ')
    }
}
console.log("all 3 would make great pets")
//assignment 36 and 37
function makeshirt(size:string , message:string){
    console.log('The size of the shirt is ' + size + ' and the message is ' + message)
}
makeshirt('XL' , 'Mr Brightside')
function makeshirt2(size:string = 'large' , message:string){
    console.log('The size of the shirt is ' + size + ' and the message is ' + message)
}
makeshirt2(undefined , 'I love typescript')
makeshirt('small' , 'Rock n Roll')
//assignment 38
function describe_city(city:string , country:string = 'Pakistan'){
    console.log(city + ' is in ' + country ) 
}
describe_city('Karachi')
describe_city('Lahore')
describe_city('Rome' , 'Italy')
//assignment 39
function city_country(city:string , country:string){
    console.log(city + ' , ' + country )
}
city_country('Karachi' , 'Pakistan')
city_country('London' , 'England')
city_country('Munich' , 'Germany')
//assignment 40
function make_album(artist:string , album_title:string , no_of_tracks?:number) {
    console.log("Artist Name: " + artist + "\nAlbum Title: " + album_title )
    if(no_of_tracks == undefined){
    }else{
        console.log("No of Tracks: " + no_of_tracks)
    }
}
make_album("The Killers" , "Sam's Town")
make_album("Daft Punk" , "Random Access Memory" , 13)
var Magicians = ['Houdini' , 'David Copperfield' , 'David Blaine' , 'Alfred Boden']
//assignment 41 
function show_magicians(Magician:string[] = Magicians){
    for(let i=0; i<Magicians.length; i++){
        console.log(Magicians[i])
    }
}
//assignment 42 and 43
function great_magic(){
    var the_great_magicians = Magicians.map(Magicians => 'The Great ' + Magicians)
    for(let i=0; i<the_great_magicians.length; i++){
        console.log(the_great_magicians[i])
    }
}
great_magic()
show_magicians()
//assignment 44
function make_sandwich(ingredients:string[]){
    console.log("The Ingredients: \n ")
    for(let i=0; i < ingredients.length; i++){
        console.log(i+1 + '. ' + ingredients[i])
    }
}
make_sandwich(['Bread' , 'Chicken' , 'Tomato' , 'Lettuce'])
//assignment 45
function Cars(manafacturer:string , model_name:string, color?:string, power_steering?:boolean){
    console.log("Car:\nManafacturer: " + manafacturer + '\nModel Name: ' + model_name)
    if(color == undefined){
    }else{
        console.log("Color: " + color)
    }if(power_steering == undefined){
    }else{
        console.log("Power Steering: " + power_steering)
    }
}
Cars('honda', "city" , 'black' , true)
Cars('suzuki', "mehran" , 'white')
Cars('Mercedes' , 'G-Wagon')

