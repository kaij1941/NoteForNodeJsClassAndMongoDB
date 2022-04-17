
//promise複合條件
function correctTest (name){
    return new Promise((resolve,reject)=>{
        console.log("promise版本測試")
        console.log("批改作業中");
        setTimeout(()=>{
            const score = Math.round(Math.random()*100);
            if (score >=20) {
                resolve({
                    "name":name,
                    "score":score
                })
            }else{
                reject(`${score}分已達退學門檻`);
            }
        })

    })
}

function checkReward(data){
    return new Promise((resolve,reject)=>{
        console.log("正在檢查獎品");
            if (data.score>=90) {
                resolve(`${data.name}獲得電影票(${data.score}分)`)
            }else if (data.score >=60){
                resolve(`${data.name}獲得嘉獎一支(${data.score}分)`)
            }else{
                reject(`${data.score}分數為不及格,打手心10下`)
            }
        }
    )
}

correctTest("小明")
    .then(data=>checkReward(data))
    .then(reward=>console.log(reward))
    .catch(error=>console.log(error));

const init =async function (){
    try {
        console.log("async版本測試")
        const studentA = await correctTest("小名");
        const reward = await checkReward(studentA);
        console.log(reward);
    } catch (error) {
        console.log(error);
    }
}

init();