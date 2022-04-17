
const url="https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json"
fetch(url)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));