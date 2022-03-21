db.rooms.find(
    {
        rating:{
            $gte:4.2
        }
    }
) 

/*
$eq等於
$ne不等於
$gt大於
$lt小於
$gte大於等於
$lte小於等於
$in存在某個值
$nin不存在某個值
*/