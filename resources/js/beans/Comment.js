class Comment {

    constructor(id, postId, email, name, body) {
        this._id = id;
        this._postId = postId;
        this._email = email;
        this._name = name;
        this._body = body;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get postId() {
        return this._postId;
    }

    set postId(value) {
        this._postId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }
}