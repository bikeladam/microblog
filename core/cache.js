<<<<<<< HEAD
class Cache {
    constructor() {
        this._cache = {};
    }
}

Cache.prototype = {
    set: function(key, value) {
        this._cache[key] = value;
    },

    get: function(key) {
        return this._cache[key];
    },

    has: function(key) {
        return this._cache.hasOwnProperty(key);
    },

    purge: function(key) {
        if (key) {
            delete this._cache[key];
        } else {
            this._cache = {};
        }
    }
};

=======
class Cache {
    constructor() {
        this._cache = {};
    }
}

Cache.prototype = {
    set: function(key, value) {
        this._cache[key] = value;
    },

    get: function(key) {
        return this._cache[key];
    },

    has: function(key) {
        return this._cache.hasOwnProperty(key);
    },

    purge: function(key) {
        if (key) {
            delete this._cache[key];
        } else {
            this._cache = {};
        }
    }
};

>>>>>>> 1cab6b0d99a1efd47c952fd7c52a0f48dbc6ca8d
module.exports = Cache;