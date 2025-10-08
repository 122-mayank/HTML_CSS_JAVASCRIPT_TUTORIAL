const registeredHomes=[];


module.exports = class Home{
        constructor(name ,address , city , contact){
                this.name = name;
                this.address= address;
                this.city=city;
                this.contact=contact;

        }
        save(){
            registeredHomes.push(this);
         }
         static  fetchAll(){
               return registeredHomes;
         }

}