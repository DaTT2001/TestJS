//bai1
function bai1(num1, num2) {
    if(num1 >= num2) {
        return undefined
    }
    else {
        let sum = 0
        for(let i = num1 + 1; i < num2; i++) {
            sum += i
        }
        return sum
    }
}
console.log(bai1(1,6))
//bai 2
function bai2(arr) {
    if(arr.length < 2) {
        return undefined
    }
    else {
        arr.sort((a,b) => b - a);
        return arr[1] 
    }
}
console.log(bai2([3,10,2,6]))
//bai 3
function bai3(v1,v2) {
    return  Math.pow((3 * v1) / 12.56, 1/3) + Math.pow((3 * v2) / 12.56, 1/3)
}
console.log(bai3(100,200))
//bai 4
function bai4(inputString) {
    const reverseString = inputString.split("").reverse().join("");
    if(reverseString === inputString) {
        return true
    }
    return false
}
console.log(bai4("aba"));
//bai 5
function bai5(inputString1, inputString2) {
    if(inputString1.length >= inputString2.length) {
        const arr1 = inputString1.split("")
        const arr2 = inputString2.split("")
        let i = 0
        while(i < arr2.length) {
            if(!arr1.includes(arr2[i])) {
                return false
            }
            i++
        }
        return true
    } 
    else {
        const arr2 = inputString1.split("")
        const arr1 = inputString2.split("")
        let i = 0
        while(i < arr2.length) {
            if(!arr1.includes(arr2[i])) {
                return false
            }
            i++
        }
        return true
    }
}
console.log(bai5("red","ridden"))
//bai6
function bai6() {
    const present = new Date()
    let year = present.getFullYear()
    let test = true
    while(test) {
        const a = new Date(year, 1, 29)
        if(a.getMonth() === 1) {
            test = false
        }
        year++
    }
    year--
    const result = new Date(year, 0 , 1)
    return result
}
console.log(bai6())
//bai 7
function bai7(arr) {
    const present =  new Date()
    const newYear = new Date(present.getFullYear() + 1, 0, 1)
    const test = newYear.getTime()
    const result = []
    for(let i = 0; i < arr.length; i++) {
        const a = new Date(present.getTime() + arr[i]*24*60*60*1000) 
            result.push(test - a.getTime())
    }
    let tmp = result[0]
    for(let i = 0; i < result.length; i++) {
        if(tmp > result[i] && result[i] >= 0) {
            tmp = result[i]
        }
    }
    return arr[result.indexOf(tmp)]
}
console.log(bai7([1, 2, 3, 4]))
//bai 8
const bai8Obj = [
    { name: "John Doe", startDate: "02/05/2016", skills: ["ReactJS", "Java"] },
    { name: "Mary Wang", startDate: "04/07/2019", skills: ["VueJS"] },
    { name: "Thomas Fonb", startDate: "12/01/2021", skills: ["AngularJS"] },
    { name: "Jack Vine", startDate: "17/12/2019", skills: ["PHP"] },
    { name: "Stephen Wand", startDate: "24/03/2020", skills: ["Python"] },
    { name: "Dominic Trand", startDate: "30/04/2022", skills: ["NodeJS"] },
]
//bai8 yc1
function checkIncludes(i, value) {
    return bai8Obj[i].skills.includes(value)
}
console.log(bai8Obj[0].skills.includes('Java'));
for(let i = 0; i < bai8Obj.length; i++) {
    if((checkIncludes(i, 'ReactJS') || checkIncludes(i, 'VueJS') || checkIncludes(i, 'AngularJS')) && !checkIncludes(i, 'PHP') && !checkIncludes(i, 'Python') && !checkIncludes(i, 'NodeJS') && !checkIncludes(i, 'Java') ) {
        bai8Obj[i].type = "front-end"
    }
    else if((checkIncludes(i, 'PHP') || checkIncludes(i, 'NodeJS') || checkIncludes(i, 'Python')) && !checkIncludes(i, 'ReactJS') && !checkIncludes(i, 'VueJS') && !checkIncludes(i, 'AngularJS')) {
        bai8Obj[i].type = "back-end"
    }
    else {
        bai8Obj[i].type = "full-stack"
    }
}
for(let i = 0; i < bai8Obj.length; i++) {
    const present = new Date()
    const arr = bai8Obj[i].startDate.split("/")
    const a = new Date(arr[2], arr[1] - 1, arr[0])
    const b = (present.getTime() - a.getTime())/(365*24*60*60*1000)
    if(b <= 1) {
        bai8Obj[i].level = "Fresher"
    }
    else if(b < 2 && b > 1) {
        bai8Obj[i].level = "Junior"
    }
    else if(b >= 2 && b < 3) {
        bai8Obj[i].level = "Middle"
    }
    else {
        bai8Obj[i].level = "Senior"
    }
}
console.log(bai8Obj);
//bai 8 yc2
function bai8() {
    const result = []
    for(let i = 0; i < bai8Obj.length; i++) {
        if(bai8Obj[i].level === "Middle" && (bai8Obj[i].type === "front-end" || bai8Obj[i].type === "full-stack")) {
            result.push(bai8Obj[i])
        }
    }
    return result
}
console.log(bai8());
//bai 9
function bai9(arr, num) {
    for(let i = 0; i < arr.length - 1 ; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                return true
            }
        }
    }
    return false
}
console.log(bai9([2, 5, 41, 19], 43));
//bai 10
function bai10(arr) {
    const a = []
    const f = []
    for(let i = 0; i < arr.length; i++) {
        if(!a.includes(arr[i])) {
            a.push(arr[i])
        }
    }
    for(let i = 0; i < a.length; i++) {
        f.push(0)
    }
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[j] === arr[i])
            f[j]++
        }  
    }
    let index = 0
    const f1 = f.slice()
    f1.sort((a,b) => b - a)
    if(f1[0] === f1[1]) {
        return null
    }
    else {
        index = f.indexOf(f1[0])
    }
    return a[index]
}
console.log(bai10([10, 12, 10, 18, 21, 32, 10]))