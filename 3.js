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

class PersonLog extends Person {
  #logs = {
    name: {
      oldValue: [],
      newValue: 0
    },
    gender: {
      oldValue: [],
      newValue: 0
    }
  };

  get logs(){
    let outString;
    for (const element in this.#logs) {
      outString = `${element}: ${this.#logs[element].oldValue}   ${this.#logs[element].newValue}`;
      console.log(outString);
    }
  }

  constructor (name,gender){
    super(name,gender);
    this.#logs.name.newValue = this.name;

    Object.defineProperties(PersonLog.prototype, {
      "nameLog": {
          get: function() { return this.name },
          set: function(value) { 
            this.#logs.name.oldValue.push(this.name);
            this.#logs.name.newValue = this.name = value;
          }
      }
    });

    Object.defineProperties(PersonLog.prototype, {
      "ganderLog": {
          get: function() { return this.gender },
          set: function(value) { 
            this.#logs.gender.oldValue.push(this.gender);
            this.gender = value;
            this.#logs.gender.newValue = (this.gender);
          }
      }
    });

  }

}

const person1 = new PersonLog("i",1);

person1.nameLog = "u";
person1.nameLog = "u1";
person1.nameLog = "u2";
person1.nameLog = "u3";

person1.ganderLog = 2;
person1.ganderLog = 2;
person1.ganderLog = 2;
person1.ganderLog = 0;
person1.ganderLog = 4;

person1.logs