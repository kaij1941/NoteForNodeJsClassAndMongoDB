# MongooseModel設定
### 特殊情境類型
1. <a href="#model-的-必填設定是有特殊條件的"> 當 model 的 必填設定是有特殊條件的 </a>
2. 






















--- 
##### model 的 必填設定是有特殊條件的
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
  
