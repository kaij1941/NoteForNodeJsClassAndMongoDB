function correctTest (name){
    return new Promise((resolve,reject)=>{
        console.log("promiseALL版本測試")
        console.log("批改作業中");
        setTimeout(()=>{
            const score = Math.round(Math.random()*100);
                resolve(
                    {
                        "name":name,
                        "score":score
                    }
                )

        },Math.random*10000)

    })
}

Promise.all([correctTest("小名"),correctTest("小花"),correctTest("小華")])
        .then(data=>console.log(data));