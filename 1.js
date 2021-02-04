class Main {
    static counter = 0;
    callMe(){
        Main.counter++;
    }
    callCount(){
        console.log(Main.counter);
    }
}

const first = new Main();

const second = new Main();

first.callMe();
first.callMe();
first.callMe();
first.callMe();

second.callMe();
second.callMe();
second.callMe();
second.callMe();

second.callCount();
