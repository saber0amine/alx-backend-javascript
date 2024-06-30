#!/usr/bin/node
function getListStudentIds(arrayObject) {
    if(!Array.isArray(arrayObject)) {
        return new Array() ; 
    }
    else {
        return arrayObject.map((obj) => obj.id) ; 
    }

}