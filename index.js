function myEach (collection, foo) {
    let newCollection = [...collection]
    if (collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    for (let i = 0; i < newCollection.length; i++) {
      foo(newCollection[i])
    }
    return collection
  }
  
  function myMap(collection, foo) {
    let newCollection = [...collection]
    if ( collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    let otherCollection = []
    for(let i = 0; i < newCollection.length; i++) {
      let itemNew = foo(newCollection[i])
      otherCollection.push(itemNew)
    }
    return otherCollection
  }
  
  function myReduce(collection, foo, acc) {
    let newCollection = [...collection]
    if (collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    let current = acc
    if(typeof acc !== "number"){
      current = newCollection[0]
      for(let i = 1; i < newCollection.length; i++) {
        current = foo(current, newCollection[i], newCollection)
      }
    } else { 
      for(let i = 0; i < newCollection.length; i++) {
        current = foo(current, newCollection[i], newCollection)
      }
    }
    return current
  }
  
  function myFind(collection, predicate) {
    let newCollection = [...collection]
    if (collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) {
        return newCollection[i]
      }
    }
    return undefined
  }
  
  function myFilter(collection, predicate) {
    let newCollection = [...collection]
    if (collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    const otherCollection = []
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) {
        otherCollection.push(newCollection[i])
      }
    }
    return otherCollection
  }
  
  function mySize(collection) {
    let newCollection = [...collection]
    if (collection instanceof Array === false) {
      newCollection = Object.values(collection)
    }
    return newCollection.length
  }
  
  function myFirst(array, n) {
    if (typeof n !== "number") {
      return array[0]
    } else {
      let newArray = []
      for (let i = 0; i < n; i++){
        newArray.push(array[i])
      }
      return newArray
    }
  }
  
  function myLast(array, n) {
    if (typeof n !== "number") {
      return array[array.length - 1]
    } else {
      let newArray = []
      for (let i = 1; i <= n; i++) {
        newArray.unshift(array[array.length-i])
      }
      return newArray
    }
  }
  
  function myKeys (object) {
    let arrayOfKeys = []
    for (let key in object) {
      arrayOfKeys.push(key)
    }
    return arrayOfKeys
  }
  
  function myValues (object) {
    let arrayOfValues = []
    for (let key in object) {
      arrayOfValues.push(object[key])
    }
    return arrayOfValues
  }