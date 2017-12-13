class Photo {

    constructor(albumId, id, title, url, thumbnailUrl) {
        this._albumId = albumId;
        this._id = id;
        this._title = title;
        this._url = url;
        this._thumbnailUrl = thumbnailUrl;
    }


    get albumId() {
        return this._albumId;
    }

    set albumId(value) {
        this._albumId = value;
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

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get thumbnailUrl() {
        return this._thumbnailUrl;
    }

    set thumbnailUrl(value) {
        this._thumbnailUrl = value;
    }
}