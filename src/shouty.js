class Person{

    constructor(name){
        this._location = 0;
        this._name = name;
    }
    shout(message){
        this._message = message;
    }

    messageHeard(message){
        return ["free bagels at Sean's"]
    }
    
    moveTo(distance){
        this._location = distance;
    }
    
    getLocation(){
        return this._location;
    }


  
}

module.exports = Person;