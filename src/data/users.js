//apiden gelen dataymış gibi fake data düşünüyoruz
export const users=[
   {
       id:1,
       firstName:"Engin",
       lastName:"Demiroğ",
       city:"Ankara", //valiadation hatası almak için yorumladık
       age:36,
       creditCardNumber:"123456",
       type:"customer"
   } ,
   {
      id:2,
      firstName:"Esma",
      lastName:"Karagülle",
      city:"Erzurum",
      age:21,// yaş numbera dönüşmüyor validation hatası yaptık // düzelttik
      creditCardNumber:"654321",
      type:"customer"
},
{
    id:6,
    firstName:"Merve",
    lastName:"Karagülle",
    city:"Erzurum",
    age:21,// yaş numbera dönüşmüyor validation hatası yaptık // düzelttik
    creditCardNumber:"654321",
    type:"customer"
},
{
     id:3,
     firstName:"Cansu",
     lastName:"Demiroğ",
     city:"Ankara",
     age:36,
     creditCardNumber:"123456",
     salary:5000,
     type:"employee"
} ,
{
    id:4,
    firstName:"Mücahit",
    lastName:"Demiroğ",
    city:"Erzurum",
    age:33,
    creditCardNumber:"654321",
    salary:5000,
    type:"employee"
},
{    //hatalı kullanıcı tipi örnegi
    id:5,
    firstName:"Ali",
    lastName:"Demir",
    city:"İstanbul",
    age:33,
    salary:10000,
    type:"employee" // yanlış yazılmıştı düzelttik
}

]