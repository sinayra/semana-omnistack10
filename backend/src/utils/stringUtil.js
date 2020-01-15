module.exports = {
    parseStringAsArray(str){
        return str.split(',').map(s => s.trim());
    }
}