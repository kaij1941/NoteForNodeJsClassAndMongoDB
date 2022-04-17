
//檢查分數 利用非同步promise 不帶參數
const checkScore = new Promise((resolve,reject) =>{
        console.log("Checking Score!!")
        setTimeout(()=>{
            const score = Math.round(Math.random()*100);
            if (score >=60) {
                resolve(score);    
            }else{
                reject(score+" is not pass!!");
            }
        },2000
        )
        
});

//帶參數
const checkScoreByOutSide = (score) =>{
    return new Promise((resolve,reject) =>{
        console.log("正在檢查是否及格!")
        setTimeout(()=>{
            if (score >=60) {
                resolve(score);    
            }else{
                reject(score+" is not pass!!");
            }
        },2000)    
    })
};
 

//當符合時的回傳
checkScore.then(data => console.log(data))
          .catch(error=>console.log(error));

checkScoreByOutSide(90)
        .then(data => console.log(data))
        .catch(error=>console.log(error));


checkScoreByOutSide(50)
        .then(data => console.log(data))
        .catch(error=>console.log(error));
