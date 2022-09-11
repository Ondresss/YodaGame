class Player {
    constructor(game){
        this.game = game;
        this.yoda = document.querySelector(".yoda");
        this.yodaStartHeight = 200;
        this.yodaMovement = 1;
        this.gravity = 0.01;
        this.controlKeys = [];
        this.yoda2 = document.querySelector(".yoda2");
        this.controlMechanism =  {
            right: {
                pressed: false,
            },
            left: {
                pressed: false,
            },
            stop:{
                pressed:false,
            }
        };

        this.powerUpMech = [
            {
                SpeedUp: false,
                Text: "Speed up activated"
            },

            {
                Power: false,
                Text: "Super power activated"

            }

        ]

    }
    drawPlayer(context){
        
    context.drawImage(this.yoda, this.yodaMovement, this.yodaStartHeight, 100, 100);
            
    }


    drawJumpAnimation(context){
        context.drawImage(this.yoda2, this.yodaMovement, this.yodaStartHeight, 100, 100);
    }

    controls(){
        window.addEventListener('keypress',(e)=>{
         
            switch(e.key){
                case "d":
                    this.controlMechanism.right.pressed = true;
                    this.controlMechanism.left.pressed = false;
                    this.controlMechanism.stop.pressed = false;
                    break;
                case "a":
                    this.controlMechanism.left.pressed = true;
                    this.controlMechanism.right.pressed = false;
                    this.controlMechanism.stop.pressed = false;
                    break;
                case "s":
                    this.controlMechanism.stop.pressed = true;
                    this.controlMechanism.left.pressed = false;
                    this.controlMechanism.right.pressed = false;
                    break
            }
        });
        window.addEventListener('keyup',(e)=>{
            if(e.key == "w"){
                this.controlKeys.push("spaceBar");
            }

        });
    }


}