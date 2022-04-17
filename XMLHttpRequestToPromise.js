
const url="https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json"
// fetch(url)
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error));


function getUrl(url){
    return new Promise((resolve,reject)=>{
        const xhr =new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload =()=>resolve(xhr.responseText);
        xhr.onerror=()=>reject(xhr.statusText);
        xhr.send()
    })
}


getUrl(url)
    .then(data=>console.log(data))
    .catch(error=>console.log(error));