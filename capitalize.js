function capitalize(str) {
    return str.toLowerCase().replace(str[0], str[0].toUpperCase());
}

module.exports = capitalize;