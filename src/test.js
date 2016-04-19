// @flow
'use strict';
import {net} from 'net';
class test{
    constructor(){
        console.log("test");
    }
    add(a,b){
        return a+b;
    }
}
let _test = new test();
_test.add("hello");