function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched!");
        }, 1000);
    });
}
fetchData().then(function (data) {
    console.log(data);
});
