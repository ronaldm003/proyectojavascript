class Album {

    constructor(userId, id, title) {
        this._userId = userId;
        this._id = id;
        this._title = title;

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
}
