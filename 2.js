class Person {
    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    }

    name = 'NoName';
    #gender = Person.GENDER.NOT_DEFINED;

    get gender() {
        return  this.#gender;
    }
    
    set gender (gender) {
        try {
            if ( !Object.values(Person.GENDER).includes(gender) ) {
                throw new Error("PersonGenderError");
            } else{
                this.#gender = gender;
            }
            } catch (e) {
                console.log(e)
            }
    }
  

    constructor(name, gender){
        if(name){
            this.name = name;
        }
        this.gender = gender;
    }
}

const person1 = new Person("i",1);

person1.gender = 3;

console.log(person1.gender)
