class Todo {
    constructor(id, userId, title, completed) {
        this._id = id;
        this._userId = userId;
        this._title = title;
        this._completed = completed;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}