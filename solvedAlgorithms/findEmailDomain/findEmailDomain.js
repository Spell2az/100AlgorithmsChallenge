function findEmailDomain(address) {
    var lastAtChar = address.lastIndexOf('@');
    return address.slice(lastAtChar + 1);
}
console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
