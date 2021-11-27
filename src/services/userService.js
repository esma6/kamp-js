import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{

    constructor(loggerService){
        this.employees=[]
        this.customers=[]
        this.errors=[]
        this.loggerService=loggerService
    }
    load(){
        for(const user of users)
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }
    }

    checkCustomerValidityForErrors(user){
        let requiredFields="id firstName lastName age city".split(" ") //boşluğa göre parçalayıp arrayı oluşturup içine eleman olarak atar her birini
        //js de user.age kullanımı yerine user["age"] kullanımı da vardır.
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required `,user)) // `` (alt gr virgül boşluk) ${} içine js kodu yazmamızı sağlar
            }
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number `,user)) 
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user){
        let requiredFields="id firstName lastName age city salary".split(" ") //boşluğa göre parçalayıp arrayı oluşturup içine eleman olarak atar her birini
        //js de user.age kullanımı yerine user["age"] kullanımı da vardır.
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required `,user)) // `` (alt gr virgül boşluk) ${} içine js kodu yazmamızı sağlar
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number `,user)) 
        }
        return hasErrors
    }
    add(user){
        
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user)
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user cannot be added.Wrong user type",user))
                break;
        }
        this.loggerService.log(user)
    }
    list(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){ // isime göre customere sıralıyarak gösteriyor
       return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            } else if(customer1.firstName===customer2.firstName){
                return 0; // degistirme

            }else{
                return 1
            }
        })
    }
}