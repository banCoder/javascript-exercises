var removeFromArray = function(collection) {
    // captures elements to remove from arguments passed in
    let args = Array.from(arguments).slice(1);

    // remove each element if it exists
    for (let i = 0, j = args.length; i < j; i++) {
        let index = collection.indexOf(args[i]);
        if (index > -1) collection.splice(index, 1);
    }
    return collection;
}

module.exports = removeFromArray
