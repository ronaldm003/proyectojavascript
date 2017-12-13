class Post {
    constructor(userId, id, title, body) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }
}