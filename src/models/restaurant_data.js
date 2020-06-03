class Restaurant{
    constructor(name,address,url){
        this.name = name;
        this.address = address;
        this.url = url;
    }
    re(){
        console.log(this.name)
        console.log(this.address)
        console.log(this.url)
    }
    }


const restaurant1 = new Restaurant("o","調布","https");
restaurant1.re();
