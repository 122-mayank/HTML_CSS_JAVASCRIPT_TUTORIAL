const eventEmitter = require("events");

const emitter = new eventEmitter();

emitter.on("greet",()=>{
      console.log("Mayank Saini loves Krishna");
});

emitter.emit("greet");