class Form {

    constructor(){
        this.button1 = createButton('Easy');
        this.button2 = createButton('Medium');
        this.button3 = createButton('Hard');
    }

    hide(){
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
    }

    display(){
        this.button1.class("customButton")
        this.button2.class("customButton")
        this.button3.class("customButton")

        this.button1.position()
        this.button2.position()
        this.button3.position()

        this.button1.mousePressed(()=>{
            this.button1.hide();
        });
        this.button2.mousePressed(()=>{
            this.button2.hide();
        });
        this.button3.mousePressed(()=>{
            this.button3.hide();
        });

    }
}