import { makeAutoObservable } from "mobx";

class InputStore {
    inputValue = "";

    constructor() {
        makeAutoObservable(this);
    }

    setInputValue(value) {
        this.inputValue = value;
    }
}

export default new InputStore();
