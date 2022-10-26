function SortFunction(collection_1: number[], collection_2: number = 1) {
    var done = false;
    while (!done) {
        done = true;
        for (var collection_2 = 1; collection_2 < collection_1.length; collection_2 += 1) {
            if (collection_1[collection_2 - 1] > collection_1[collection_2]) {
                done = false;
                var tmp = collection_1[collection_2 - 1];
                collection_1[collection_2 - 1] = collection_1[collection_2];
                collection_1[collection_2] = tmp;
            }
        }
    }

    return collection_1;
}

var numbers = [12, 10, 15, 11, 14, 13, 16, 19, 1, 2, 4, 6, 0];
SortFunction(numbers);
console.log(numbers);

