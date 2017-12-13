class User {

    constructor(id, name, username, email, phone, website) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
        this._phone = phone;
        this._website = website;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get website() {
        return this._website;
    }

    set website(value) {
        this._website = value;
    }
}