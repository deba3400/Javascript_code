 function search(key) {
    const bucketIndex = this.hashFunction(key);
    let temp = this.arr[bucketIndex].head;
    while (temp.next != null) {
    if (temp.key.equals(key)) {
    //update
    return;
    } else {
    temp = temp.next;
    }
    }
    }
    
    // after reduce the currsize check the load factor and if loadFactor is less than lambdaFactorThreshold then rehash but instead of maxsize=maxsize*2 will be maxsize=maxsize/2;
   function Update(key, value) {
    if (this.search(key)) {
    const bucketIndex = this.hashFunction(key);
    let temp = this.arr[bucketIndex].head;
    while (temp != null) {
    if (temp.key == key) {
    temp.value = value;
    return;
    } else {
    temp = temp.next;
    }
    }
    }
    }