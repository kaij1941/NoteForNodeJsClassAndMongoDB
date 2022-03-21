//保護欄位 和陣列值
//隱藏部分欄位
db.rooms.find({
    name:/豪華/
},{
    _id:0,
    rating:0
}
)
db.rooms.find(
    {
        payment:{
            $in:["信用卡","ATM"]
        }
    }
)