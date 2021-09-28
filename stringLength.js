function stringLength(str) {
    if(str.length < 1 || str.length > 10) {
        return false;
    }

    return str.length;
}

module.exports = stringLength;