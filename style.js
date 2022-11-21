
// // 1 //
// // let int = prompt('любще число')
// // if(int % 2 === 1 ){
// //     console.log("not even ")
// // } else( 
// //     console.log("even")
// // )
// //  2 //



// // // 3 //
// // let age = prompt("сколько тебе лет ")
// // if(age >= '18'){
// //     console.log("you can go through")
// // } else(
// //     console.log("go home ")
// // )


// // let name = prompt("как тебя зовут").toLowerCase().trim()

// // if( name[0] === 'b' && name.length  % 2 === 0 ){
// //     console.log('you can go through' + name );
// // } else{
// //     console.log('go home' + name );
// // }
// // let a = +prompt("a")
// // let m = prompt(' + - * /')
// // let b = +prompt('b')
// // if(m === '+' ){
// //     console.log(a + b)
// // }

// //  else if  (m === '*' ){
// //     console.log(a * b)
// // } 

// // else if  (m === '/' ){
// //     console.log(a / b)
// // } 

// // else if  (m === '-' ){
// //     console.log(a - b)
// // } else {
// //     console.log("пшол в жопу" )
// // }


// // let userName = prompt('What is your name').toLowerCase().trim()
// // if (userName[0] === 'a') {
// //     let userAge = prompt('Welcome mr Alex please type your age here')
// //     if (userAge >= 20 && userAge <= 40) {
// //         let userMoney = prompt('cash out')

// //     if (userMoney >= 100) {
// //         alert("welcome")
// //     }
// // }
// // } else {
// //     console.log(' SORRY MR OR MS ' + userName)
// // }
// // let students = ['Aziz','Saidbek','Shaxzod','muhhamadAmin','Odilbek']
// // alert(`
// //     ${students[0]},
// //     ${students[1]},
// //     ${students[2]},
// //     ${students[3]},
// //     ${students[4]},
// // `) 
// // let name = prompt('Напишите имя котого вы хотите удалить: ')

// // if(students.includes(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())){
// //     name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
// //     let index = students.indexOf(name)
// //     console.log(students);
// //     students.splice(index, 1)
// //     console.log(students);
// // }else{
// //     console.log('we have not this name in our array');
// // }   
// // let students = ['Aziz', 'Saidbek', 'Shaxzod', 'Amin', 'Xojik', 'Abbos', 'Odilbek', 'Valentina', 'Azizbek']
// // let name =  prompt( 'кого хотите удалить напишите имя')


// // let index = students.indexOf(name) 
// // if(index !== -1){
// //     console.log(  students.splice(index, 1))
// //     console.log(students)
// // }
// // else{
// //         console.log('we have not this name in our array');
// //     }   
// // 


// // std.filter(num => {
// //     if(std.age <= 13) {
// //         console.log("min age");
// //     } if(std.age >= 21){
// //         console.log("max age");
// //     }


// // })
// // console.log(std);

// // let std = [
// //     {
// //         name: "Abbos",
// //         age: 14,
// //         isMarried: true,
// //         wives: ['Madina', 'Amina', 'Nargiza']
// //     },
// //     {
// //         name: "Odilbek",
// //         age: 13,
// //         isMarried: true,
// //         wives: ['Sabrina', 'Alexandra', 'Nargiza', 'Oysha']
// //     },
// //     {
// //         name: "Saidbek",
// //         age: 13,
// //         isMarried: true,
// //         wives: ['Sabrina', 'Alexandra', 'Nargiza', 'Oysha']
// //     },
// //     {
// //         name: "Azizbek",
// //         age: 13,
// //         isMarried: false,
// //         wives: []
// //     },
// //     {
// //         name: "Shaxzod",
// //         age: 13,
// //         isMarried: false,
// //         wives: []
// //     },
// //     {
// //         name: "Xojik",
// //         age: 16,
// //         isMarried: true,
// //         wives: ['Nargiza', 10]
// //     },
// //     {
// //         name: "Emil",
// //         age: 22,
// //         isMarried: true,
// //         wives: ['unknown']
// //     },
// //     {
// //         name: "Aziz",
// //         age: 13,
// //         isMarried: false,
// //         wives: []
// //     },
// //     {
// //         name: "Валентина",
// //         age: 17,
// //         isMarried: false,
// //         wives: []
// //     }
// // ]

// // let total = std.reduce((a,b) => {
// //     return a + b.vives
// // }, 0) 
// // console.log(total / std.length);

// // let arab = std.reduce((a,b) => {
// //     if(a.wives.length > b.wives.length) {
// //         return a
// //     } else {
// //         return b
// //     }
// // })
// // console.log(arab);




// // let sorted =  std.sort((a, b) => a.age > b.age );

// // let  young = sorted[0]
// // let old = sorted[sorted.length - 1]
// // console.log(young,old);


// // let arr = [1, 2, 3, 4, 'stroka', true, false, {}, [], 'hello', 2, undefined, null]


// // let types = {
// //     number: [],
// //     string: [],
// //     boolean: [],
// //     object: []
// // }

// // arr.forEach(item =>{
// //     let key = typeof item
// //     if(types[key]){
// //         types[key].push(item)
// //     }
// // })


// // arr.forEach(item =>{
// //         let emails = includes('emails') item
// //         if(types[key]){
// //             types[key].push(item)
// //         }
// //     }







// // let users = [
// //     {
// //         "id": 1,
// //         "name": "Leanne Graham",
// //         "username": "Bret",
// //         "email": "Sincere@april.biz",
// //         "address": {
// //             "street": "Kulas Light",
// //             "suite": "Apt. 556",
// //             "city": "Gwenborough",
// //             "zipcode": "92998-3874",
// //             "geo": {
// //                 "lat": "-37.3159",
// //                 "lng": "81.1496"
// //             }
// //         },
// //         "phone": "1-770-736-8031 x56442",
// //         "website": "hildegard.org",
// //         "company": {
// //             "name": "Romaguera-Crona",
// //             "catchPhrase": "Multi-layered client-server neural-net",
// //             "bs": "harness real-time e-markets"
// //         }
// //     },
// //     {
// //         "id": 2,
// //         "name": "Ervin Howell",
// //         "username": "Antonette",
// //         "email": "Shanna@melissa.tv",
// //         "address": {
// //             "street": "Victor Plains",
// //             "suite": "Suite 879",
// //             "city": "Wisokyburgh",
// //             "zipcode": "90566-7771",
// //             "geo": {
// //                 "lat": "-43.9509",
// //                 "lng": "-34.4618"
// //             }
// //         },
// //         "phone": "010-692-6593 x09125",
// //         "website": "anastasia.net",
// //         "company": {
// //             "name": "Deckow-Crist",
// //             "catchPhrase": "Proactive didactic contingency",
// //             "bs": "synergize scalable supply-chains"
// //         }
// //     },
// //     {
// //         "id": 3,
// //         "name": "Clementine Bauch",
// //         "username": "Samantha",
// //         "email": "Nathan@yesenia.net",
// //         "address": {
// //             "street": "Douglas Extension",
// //             "suite": "Suite 847",
// //             "city": "McKenziehaven",
// //             "zipcode": "59590-4157",
// //             "geo": {
// //                 "lat": "-68.6102",
// //                 "lng": "-47.0653"
// //             }
// //         },
// //         "phone": "1-463-123-4447",
// //         "website": "ramiro.info",
// //         "company": {
// //             "name": "Romaguera-Jacobson",
// //             "catchPhrase": "Face to face bifurcated interface",
// //             "bs": "e-enable strategic applications"
// //         }
// //     },
// //     {
// //         "id": 4,
// //         "name": "Patricia Lebsack",
// //         "username": "Karianne",
// //         "email": "Julianne.OConner@kory.org",
// //         "address": {
// //             "street": "Hoeger Mall",
// //             "suite": "Apt. 692",
// //             "city": "South Elvis",
// //             "zipcode": "53919-4257",
// //             "geo": {
// //                 "lat": "29.4572",
// //                 "lng": "-164.2990"
// //             }
// //         },
// //         "phone": "493-170-9623 x156",
// //         "website": "kale.biz",
// //         "company": {
// //             "name": "Robel-Corkery",
// //             "catchPhrase": "Multi-tiered zero tolerance productivity",
// //             "bs": "transition cutting-edge web services"
// //         }
// //     },
// //     {
// //         "id": 5,
// //         "name": "Chelsey Dietrich",
// //         "username": "Kamren",
// //         "email": "Lucio_Hettinger@annie.ca",
// //         "address": {
// //             "street": "Skiles Walks",
// //             "suite": "Suite 351",
// //             "city": "Roscoeview",
// //             "zipcode": "33263",
// //             "geo": {
// //                 "lat": "-31.8129",
// //                 "lng": "62.5342"
// //             }
// //         },
// //         "phone": "(254)954-1289",
// //         "website": "demarco.info",
// //         "company": {
// //             "name": "Keebler LLC",
// //             "catchPhrase": "User-centric fault-tolerant solution",
// //             "bs": "revolutionize end-to-end systems"
// //         }
// //     },
// //     {
// //         "id": 6,
// //         "name": "Mrs. Dennis Schulist",
// //         "username": "Leopoldo_Corkery",
// //         "email": "Karley_Dach@jasper.info",
// //         "address": {
// //             "street": "Norberto Crossing",
// //             "suite": "Apt. 950",
// //             "city": "South Christy",
// //             "zipcode": "23505-1337",
// //             "geo": {
// //                 "lat": "-71.4197",
// //                 "lng": "71.7478"
// //             }
// //         },
// //         "phone": "1-477-935-8478 x6430",
// //         "website": "ola.org",
// //         "company": {
// //             "name": "Considine-Lockman",
// //             "catchPhrase": "Synchronised bottom-line interface",
// //             "bs": "e-enable innovative applications"
// //         }
// //     },


// // {
// //         "id": 7,
// //         "name": "Kurtis Weissnat",
// //         "username": "Elwyn.Skiles",
// //         "email": "Telly.Hoeger@billy.biz",
// //         "address": {
// //             "street": "Rex Trail",
// //             "suite": "Suite 280",
// //             "city": "Howemouth",
// //             "zipcode": "58804-1099",
// //             "geo": {
// //                 "lat": "24.8918",
// //                 "lng": "21.8984"
// //             }
// //         },
// //         "phone": "210.067.6132",
// //         "website": "elvis.io",
// //         "company": {
// //             "name": "Johns Group",
// //             "catchPhrase": "Configurable multimedia task-force",
// //             "bs": "generate enterprise e-tailers"
// //         }
// //     },
// //     {
// //         "id": 8,
// //         "name": "Nicholas Runolfsdottir V",
// //         "username": "Maxime_Nienow",
// //         "email": "Sherwood@rosamond.me",
// //         "address": {
// //             "street": "Ellsworth Summit",
// //             "suite": "Suite 729",
// //             "city": "Aliyaview",
// //             "zipcode": "45169",
// //             "geo": {
// //                 "lat": "-14.3990",
// //                 "lng": "-120.7677"
// //             }
// //         },
// //         "phone": "586.493.6943 x140",
// //         "website": "jacynthe.com",
// //         "company": {
// //             "name": "Abernathy Group",
// //             "catchPhrase": "Implemented secondary concept",
// //             "bs": "e-enable extensible e-tailers"
// //         }
// //     },
// //     {
// //         "id": 9,
// //         "name": "Glenna Reichert",
// //         "username": "Delphine",
// //         "email": "Chaim_McDermott@dana.io",
// //         "address": {
// //             "street": "Dayna Park",
// //             "suite": "Suite 449",
// //             "city": "Bartholomebury",
// //             "zipcode": "76495-3109",
// //             "geo": {
// //                 "lat": "24.6463",
// //                 "lng": "-168.8889"
// //             }
// //         },
// //         "phone": "(775)976-6794 x41206",
// //         "website": "conrad.com",
// //         "company": {
// //             "name": "Yost and Sons",
// //             "catchPhrase": "Switchable contextually-based project",
// //             "bs": "aggregate real-time technologies"
// //         }
// //     },
// //     {
// //         "id": 10,
// //         "name": "Clementina DuBuque",
// //         "username": "Moriah.Stanton",
// //         "email": "Rey.Padberg@karina.biz",
// //         "address": {
// //             "street": "Kattie Turnpike",
// //             "suite": "Suite 198",
// //             "city": "Lebsackbury",
// //             "zipcode": "31428-2261",
// //             "geo": {
// //                 "lat": "-38.2386",
// //                 "lng": "57.2232"
// //             }
// //         },
// //         "phone": "024-648-3804",
// //         "website": "ambrose.net",
// //         "company": {
// //             "name": "Hoeger LLC",
// //             "catchPhrase": "Centralized empowering task-force",
// //             "bs": "target end-to-end models"
// //         }
// //     }
// // ]
// // let emails = {
// //     org: [],
// //     net: [],
// //     info: []
// // }
// // let other = []




// // users.forEach(item => {
// //     let key = item.email.split('.').at(-1)
// //         if(emails[key]){
// //             emails[key].push(item)
// //         } else {
// //             other.push(other)
// //         }
// //     })
// //     console.log(emails,other)

















// // arr.filter(item => {
// //     if (typeof item === 'number') {
// //         types.number.push(item)
// //     } else if (typeof item === 'string') {
// //         types.string.push(item)
// //     } else if (typeof item === 'boolean') {
// //         types.boolean.push(item)
// //     } else if (typeof item === 'object') {
// //         types.object.push(item)
// //     }

// // })
// // console.log(types);






// let cars = [{
//     id: Math.random(),
//     color: "red",
//     mark: "ferrari",
//     engine: 5.0,
//     isTurbo: true,
//     hasHatch: false,
//     price: 500000,
//     img: "https://cdn.motor1.com/images/mgl/Znnm7r/s3/ferrari-sp48-unica.webp"



// },
// {
//     id: Math.random(),
//     color: 'green',
//     mark: 'lamborgine',
//     engine: 4.2,
//     isTurbo: true,
//     hasHatch: false,
//     price: 650000,
//     img: 'https://avatars.mds.yandex.net/i?id=6b49ade43c6a3aff42ecd5b572202632_l-5583010-images-thumbs&n=13'

// },
// {
//     id: Math.random(),
//     color: 'blue',
//     mark: 'lacceti',
//     engine: 3.2,
//     isTurbo: true,
//     hasHatch: false,
//     price: 120000,
//     img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'

// },
// {
//     id: Math.random(),
//     color: 'yellow',
//     mark: 'lamborgine urus ',
//     engine: 8.2,
//     isTurbo: true,
//     hasHatch: true,
//     price: 500000,
//     img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
// },
// {
//     id: Math.random(),
//     color: "white",
//     mark: "lada_zhiguli06",
//     engine: 3.0,
//     isTurbo: false,
//     hasHatch: false,
//     price: "1500",
//     img: "https://avatars.mds.yandex.net/i?id=f7fa48ba965ef47f7cd70e2beb63c65f-4538204-images-thumbs&n=13"
// },
// {
//     id: Math.random(),
//     color: "white",
//     mark: "mustang",
//     engine: 6.0,
//     isTurbo: true,
//     hasHatch: true,
//     price: "50000",
//     img: "https://avatars.mds.yandex.net/i?id=61fce67a170382a6b79d101a298bf1085a71f1dd-4578804-images-thumbs&n=13&exp=1"
// },
// {
//     id: Math.random(),
//     color: "grey",
//     mark: "malibu",
//     engine: 4.5,
//     isTurbo: true,
//     hasHatch: true,
//     price: "250000",
//     img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
// },
// {
//     id: Math.random(),
//     color: "blue",
//     mark: "buggati chiron",
//     engine: 10.4,
//     isTurbo: true,
//     hasHatch: false,
//     price: "750000",
//     img: "https://i-tc.ru/wp-content/uploads/2022/01/scale_1200-23.webp"
// },
// ]


// let max = cars.reduce((a, b) => a.engine > b.engine ? a : b)


// cars.forEach(item => {
//     let percent = item.engine * 100 / max.engine
//     document.write(`
// //        <div class="block" >
// //             <span>car id: ${item.id}</span> <hr>
// //             <i>${item.mark}</i> 
// //             <b style="color: ${item.color};" >${item.color}</b> <br>
// //             <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
// //             <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
// //             <div class="eng">
// //                 <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
// //             </div>
// //             <img src="${item.img}" alt="${item.mark}" />
// //             <h3>Цена: ${item.price}</h3>        
// //        </div>
// //     `)
// // })

// // setTimeout(() => {
// //     let a = +prompt('Какую машину хотите удалить?')
// //     cars.forEach(item => {
// //         if (item.id === a) {
// //             let toDelite = confirm('вы уверены в своей покупки')
// //             if (toDelite === true) {
// //                 cars.splice(item.id, 1)
// //                 console.log(cars)
// //                 cars.forEach(item => {
// //                     let percent = item.engine * 100 / max.engine
// //                     document.write(`
// //                        <div class="block" >
// //                             <span>car id: ${item.id}</span> <hr>
// //                             <i>${item.mark}</i> 
// //                             <b style="color: ${item.color};" >${item.color}</b> <br>
// //                             <b>Турбо мотор: ${item.isTurbo === true ? "Да" : "Нет"}</b>  <br>      
// //                             <b>С люком: ${item.hasHatch === true ? "Да" : "Нет"}</b>    
// //                             <div class="eng">
// //                                 <div class="fill" style="width: ${percent}%;" >${Math.round(percent)}%</div>
// //                             </div>
// //                             <img src="${item.img}" alt="${item.mark}" />
// //                             <h3>Цена: ${item.price}</h3>        
// //                        </div>
// //                     `)
// //                 })
// //             } 
// //         } else { console.log('действие не определено'); }
// //     })
// // }, 3000);




// let students = {
//     name: "Saidbek",
//     surname: "Rahimov",
//     age: 13,
//     status: false,
//     pasportData: {
//         series: "BC",
//         number: 46512398741,
//         date: 2009,
//     },
//     visa: false,
//     bikes: [
//         {
//             name: 'bmx',
//             year: 2017,
//         },
//         {
//             name: 'Shimano',
//             year: 2020
//         }
//     ],
//     phones: [
//         {
//             name: 'samsung',
//             year: 2014
//         },
//         {
//             name: 'HTC one max',
//             year: 2014
//         },
//         {
//             name: "samsung A10s",
//             year:2020
//         },
//         {
//             name:"Iphone 7 plus",
//             year: 2016
//         }
//     ]
// }



// const std = {
//     name: "Shaxzod",
//     surname: "Tursumuradov",
//     age: 13,
//     status: true
// }

// let passportData = {
//     serries: "AC",
//     number: 351824123456,
//     date: 2021
// }



// let types = {
//     string: [],
//     number: [],
//     boolean: [],
// }




// let Newobj =  Object.assign({},std,passportData)
// let Newkeys = Object.keys(Newobj)
// let Newvalue = Object.values(Newobj)
// let jfv = Newkeys.concat(Newvalue)


// jfv.filter(item => {
//     let key = typeof item

//     if(types[key]){
//         types[key].push(item)
//     }
// })


// console.log(jfv);

// console.log(Newobj);

// console.log(types);






// const std = {
//     name: "Shaxzod",
//     surname: "Tursumuradov",
//     age: 13,
//     status: true
// }

// let passportData = {
//     serries: "AC",
//     number: 351824123456,
//     date: 2021
// }


// let any = prompt('any informayion about you')

// let Newobj = Object.assign(std,passportData)

// if(Newobj[any]){
//     console.log(`${any}: ${Newobj[any]}`);
// } else{
//     console.log("error");
// }





// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let emails = {
//     org: [],
//     net: [],
//     info: []
// }
// let other = []

// for (let item of users) {
//     if (item.email.includes(".net")) {
//         emails.net.push(item)
//     } else if (item.email.includes(".org")) {
//         emails.org.push(item)
//     } else if (item.email.includes(".info")) {
//         emails.info.push(item)
//     } else {
//         other.push(other)
//     }
// }


// console.log(emails, other)



// for(let i = 0; i < users.length -1; i++) {
//     let key = users[i].email.split('.').at(-1)

//     if(emails[key]) {
//         emails[key].push(users[i])
//     } else {
//         other.push(users[i])
//     }
// }
// console.log(emails, other)


// if(users[i].email.includes("net")  ){
//     emails.net.push(users[i])
// } else if(users[i].email.includes("org")  ){
//     emails.org.push(users[i])
// } else if(users[i].email.includes("info")  ){
//     emails.info.push(users[i])
// } else{
//     other.push(users[i])
// }



let a = +prompt('any number')

for(let i = 1; i <= 10; i++) {
    document.write(` ${a} * ${i} = ${a * i} <br>`)
}





















