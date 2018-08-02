

const identity = val => val;
const toArray = (arraylike,f) => Array.from(arraylike,f);
const getproperties = proname => obj => obj[proname];
const baseaddallEvent = eventName => (f,arr) => Array.isArray(arr) ?  arr.forEach(tag => tag.addEventListener(eventName,f)): arr.addEventListener(eventName,f);
const allclickEvent = baseaddallEvent("click");
const getvalue = getproperties("value");
const $ = (selector,obj = document) => obj.querySelector(selector);
//const $_s = (selector,obj = document) => go(obj.querySelectorAll(selector),toArray);
const $_s = (selector,obj = document) => toArray(obj.querySelectorAll(selector));
const pipe = (...fs) => (...args) => fs.reduce((a,b)=>  b.call(null,a(...args)));
const go = (a,...fs) => pipe(...fs)(a);
const log = v => console.log(v);

let imgs = $_s(".thumb");
allclickEvent(_ => {
    console.log("클릭");
},imgs);









