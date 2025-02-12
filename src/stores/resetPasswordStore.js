import { makeAutoObservable } from "mobx";

class InputStore {
    email = '';

    constructor() {
        makeAutoObservable(this);
    }

    setEmail(value) {
        this.email = value
    }
}

export default new InputStore();
