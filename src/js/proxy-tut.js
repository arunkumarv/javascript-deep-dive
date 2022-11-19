const target = {
    message1: "Hello",
    message2: "everyone"
};

const handler = {
    get(target, prop, receiver){
        console.log(target, "| ",prop,"|", receiver)
        return "world";
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.message1)