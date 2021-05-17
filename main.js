// Task 1
class Character {

    // properties 
    constructor(name, phrase1, phrase2){
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
    }

    // methods 
    levelUp() {
        this.level = 2;
    }

    sayPhrase1(){
        console.log(this.phrase1);
    }

    sayPhrase2(){
        console.log(this.phrase2);
    }
}

// Task 2
let character1 = new Character("ranboo", "someone moved my m&ms and now i'm going to start killing", "new scream unlocked");
let character2 = new Character("tubbo", "you just got corrected by a dyslexic person", "imma bout to hit spit spakle someone");

// Task 3
character2.sayPhrase1();
character1.levelUp();
character1.sayPhrase2();

// console log to make sure class works
console.log(character1);
console.log(character2);
