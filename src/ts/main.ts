import WatchDog from "./watchdog";


const element: WatchDog = new WatchDog(20);

const subscription = element.subscribe( function(newValue){
    console.log("newValue: ", newValue);
});


element.update(30);

element.update(50);

element.unsubscribe(subscription)

element.update(40)

