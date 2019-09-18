export { } // this will make it module
declare global { // this is important to access it as global type String
interface String {
    capitalizeFirstLetter(): string;
    capitalizeEachWord(): string;
}
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.capitalizeEachWord = function() {
    var index, word, words, _i, _len;
    words = this.split(" ");
    for (index = _i = 0, _len = words.length; _i < _len; index = ++_i) {
    words[index]=words[index].toLowerCase();
    word = words[index].charAt(0).toUpperCase();
    words[index] = word + words[index].substr(1);
    }
    return words.join(" ");
};