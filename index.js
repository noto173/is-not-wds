const isWds = require("@overkill/is-wds")

function isNotWds(string) {
    return !isWds(string);
}

module.exports = isNotWds
