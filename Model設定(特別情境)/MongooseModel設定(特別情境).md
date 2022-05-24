# MongooseModel設定
### 特殊情境類型
1. <a href="#Model-的-必填設定是有特殊條件的"> 當 model 的 必填設定是有特殊條件的 </a>
2. <a href="#MongoDB實作LeftJoin的功能"> MongoDB實作LeftJoin的功能 </a>






















--- 
#### Model 的 必填設定是有特殊條件的
可以參考以下:(程式情境 當 a 為'test'的時候為必填)
```
new Schema({
  a: String,
  b: {
    type: String,
    required: function() { return this.a === 'test'; } 
  }
});
```
作法參考至:
主題:How to add required validation when an other field has an specific value?
網址: https://github.com/Automattic/mongoose/issues/5119

####  MongoDB實作LeftJoin的功能
例如SQL語法
```
SELECT user._id, user.name, sum(order.amount) from user
LEFT JOIN order on user._id = order.user_id
```
可調整成
db.getCollection('user').aggregate([
   {$lookup:
      {
         as: 'orders',
         from: 'order',
         localField: "_id",
         foreignField: "user_id"
     }
  }])
但這種寫法如參考資料所數會有 超過 BSON 單筆 16MB 的限制，資料就會查不出來的問題，會噴出如下錯誤

Aggregate $lookup Total size of documents in matching pipeline exceeds maximum document size

可以參考資料建議增加pipline的模式減少不必要的資料
改成
```
db.getCollection('user').aggregate([
   {$lookup:
      {
         as: 'orders',
         from: 'order',
         let: { 
            //order.user_id
            order_user_id: "$user_id"
         },
         pipeline: [{
            $match: {
               $expr: {
                  // on user._id = order.user_id
                  $eq: [ "$_id", "$$order_user_id" ]
               }
            },
         }, {
           $sort: {"_id": -1}
         },{
           $limit: 1
        }]

     }
  }])

```
透過 pipeline 的 $match 來作為 on 的條件，搭配 pipeline 的 aggregate 能力，可以在做任何 $sort, $group 等語法，來讓最後 JOIN 進 document 的內容選擇只要你需要用到的資料


作法參考至:
主題:MongoDB 透過 lookup pipeline 實踐 Left Join
網址: https://mlwmlw.org/2018/10/mongodb-left-join/
