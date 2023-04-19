//TASK1//

// class Person{
//     constructor(name,price){
//         this.name=name;
//         this.price=name;
//     }
// }
// class Milk extends Person{
//     constructor(FatPercent,name,price){
//         super(name,price);
//         this.FatPercent=FatPercent;
//     }
// }
// let milk1=new Milk(1.5,"Xmilk",9)
// let milk2=new Milk(2,"Ymilk",11)
// let milk3=new Milk(2.5,"Zmilk",13)
// let array=[milk1,milk2,milk3]

// let sum=0
// function FatPercents() {
//     for (let i = 0; i < array.length; i++) {
//         // arr.push(array[i].FatPercent)
//         sum+=array[i].FatPercent
//     }

//     return sum/3
// }

// console.log(FatPercents())

//TASK1//

class Drives {
    constructor(Brand, Model, Scrensize, Batterylevel, Price, Saleprice, Salecount, Discountpercentage) {
        this.Brand = Brand;
        this.Model = Model;
        this.Scrensize = Scrensize;
        this.Batterylevel = Batterylevel;
        this.Price = Price;
        this.Saleprice = Saleprice;
        this.Discountpercentage = Discountpercentage;
        this.Salecount = Salecount;
    }

    Discountpercentage(){
    this.Salecount * this.Saleprice/100
}
    CalculateProfit() {
        return (this.Salecount * this.Saleprice -Discountpercentage()) -this.Price*this.Salecount
    };
    DisplayBatteryLevel() {
        return "Battery Level:"+" "+this.Batterylevel
     }
    DisplayDetails() { 
        return this.Brand,this.Model,this.Scrensize,this.Salecoun
    }

}

class Phone extends Drives{
    constructor(Brand, Model, Scrensize, Batterylevel, Price, Saleprice, Salecount, Discountpercentage,isSmart=false){
        super(Brand, Model, Scrensize, Batterylevel, Price, Saleprice, Salecount, Discountpercentage);
        this.isSmart=isSmart;
    }
    // isSmart(){
    //     return true
    // }
}

class Laptop extends Drives{
    constructor(Brand, Model, Scrensize, Batterylevel, Price, Saleprice, Salecount, Discountpercentage,isRGBkeyboard=true){
super(Brand, Model, Scrensize, Batterylevel, Price, Saleprice, Salecount, Discountpercentage);
this.isRGBkeyboard=isRGBkeyboard;
    }
//     isRGBkeyboard(){
// return false;
//     }
}
let product1=new Phone( "iPhone","iphone 14pro", 200, 70,700,900,25,10);
let product2=new Laptop("Samsung", "samsung galaxy s21 ultra", 230, 90,500,650,30,20);
let product3=new Phone( "iPhone","iphone 12", 180, 90,600,850,33,15);
let product4=new Laptop( "Samsung", "samsung galaxy z flip", 180, 70,650,860,27,10);
let products=[product1,product2,product3,product4];
// console.log(products)


function FilterbyPrice(array,price){
for (let i = 0; i < array.length; i++) {
    if(price<array[i].Price){
        console.log(array[i].Model)
    }
    
}
}
FilterbyPrice(products,2)
let model=0
function FilterbyName(array,name){
    for (let i = 0; i < array.length; i++) {
        if(name==array[i].Model){
            model++
            
        }
        
    }console.log(model)
    }
    FilterbyName(products,"iphone 12")
let sum=0
let sum1=0
 function  GetTotalProfit(array){
    for (let i = 0; i < array.length; i++) {
        sum1+=array[i].Price*array[i].Salecount
        sum+= array[i].Saleprice*array[i].Salecount
       
    }
    sum= sum-sum1
    console.log(sum)
   
 }
 GetTotalProfit(products)


