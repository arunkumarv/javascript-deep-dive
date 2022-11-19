export default class WatchDog {

    private value: any;
    private callbacks: Array<{ key: number;callback:Function }> = [];

    constructor(value) {

        this.value = value;
    }

    update(value){
        this.value = value;
        this.callbacks.forEach(obj => obj.callback(this.value))
    }

    subscribe(callback: Function): number {
        const key: number = new Date().getTime();
        this.callbacks.push({key,callback});
        return key;
    }

    unsubscribe(key: number){
        this.callbacks.splice(this.callbacks.findIndex(item => item.key === key), 1)
    }

}