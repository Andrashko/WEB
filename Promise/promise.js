let promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            let rnd = Math.random();
            if (rnd < 0.5)
                resolve([15, 27, 100]);
            else
                reject("No network");
        }, 2000);
    }
)

console.log(new Date());
promise.then(
    resp => {
        console.log(new Date());
        console.log(resp);
    }
).catch(
    err => {
        alert(`Some error ${err}`);
    }
)
console.log("after");

async function getList() {
    try {
        return await promise;
    }
    catch (err) {
        console.error(err);
        return [];
    }
}


(async () => {
    let list = await getList();
    alert(list);
})();
