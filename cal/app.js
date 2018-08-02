




const identity = val => val;
const toArray = (arraylike,f) => Array.from(arraylike,f);
const getproperties = proname => obj => obj[proname];
const baseaddallEvent = eventName => (f,arr) => Array.isArray(arr) ?  arr.forEach(tag => tag.addEventListener(eventName,f)): arr.addEventListener(eventName,f);
const allclickEvent = baseaddallEvent("click");
const getvalue = getproperties("value");
const $ = (selector,obj = document) => obj.querySelector(selector);
const $_s = (selector,obj = document) => obj.querySelectorAll(selector);
const pipe = (...fs) => (...args) => fs.reduce((a,b)=>  b.call(null,a(...args)));
const go = (a,...fs) => pipe(...fs)(a);
const log = v => console.log(v);

let clrresultbuttons = document.querySelectorAll("td > input[class]");

const baseresultval = type => e => {
    let resulttag = $("input[name='result']");
   return resulttag.value = type === "set" ? getvalue(resulttag) == 0 ? ""+getvalue(e.target) : getvalue(resulttag)+getvalue(e.target) : 0;
}
allclickEvent(baseresultval("set"),toArray($_s("td > input[type='button']")));
allclickEvent(baseresultval("clear"),$("td > input[class='cls_btn']"));

/* const addevent = go(
    "이벤트추가로직",
    log,
    숫자버튼이벤트추가 => allclickEvent(baseresultval("set"),toArray($_s("td > input[type='button']"))),
    클리어버튼이벤트추가 => allclickEvent(baseresultval("clear"),$("td > input[class='cls_btn']")),
    log("1")

) */

//addevent();



/* const setresultval = e => {
    let resulttag = document.querySelector("input[name='result']");
    resulttag.value = getvalue(resulttag) == 0 ? ""+getvalue(e.target) : getvalue(resulttag)+getvalue(e.target);
}
const clearresultval = e => {
    let resulttag = document.querySelector("input[name='result']");
    resulttag.value = 0;
} */


//console.log(toArray(numandcalbuttons).filter(getproperties("className")));






