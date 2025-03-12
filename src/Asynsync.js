import React, { useEffect, useState } from 'react';

function Asynsync() {
    const [resultvalue, setresultvalue] = useState('');
    const [dogworks, setdogworks] = useState('');
    const [kitchenworks, setkitchenworks] = useState('');
    const [trashworks, settrashworks] = useState('');
    useEffect(() => {
        initialtion();
        allstuffs();
    }, []);

    const initialtion = () => {
        let p = new Promise((resolve, reject) => {
            let a = 1 + 4;
            if (a === 2) {
                resolve('Success');
            }
            else {
                reject('Failure');
            }
        });

        p.then((result) => {
            console.log('This is result of API ' + result);
            setresultvalue(result);
        }).catch((result) => {
            console.log('This is result of API ' + result);
            setresultvalue(result);
        })
    }

    //async/await
    function walkDog() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dogwalked = true;

                if (dogwalked) {
                    resolve('You walk the dog.');
                }
                else {
                    reject('Didnt walk the dog.');
                }
            }, 1500);
        });
    }

    function cleanKitchen() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const workinkitchen = false;
                if (workinkitchen) {
                    resolve('Kitchen work gone well.');
                }
                else {
                    reject('Didnt complete kitchen work.');
                }
            }, 3000);
        }).then((output)=>
        {
           return 'Success : ' + output;
        }).catch((errors)=>
        {
            return 'Error : '+ errors;
        });
    }

    function takeOuttrash() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const garbagecolectedinTrash = true;

                if (garbagecolectedinTrash) {
                    resolve('Trash taked it out.');
                }
                else {
                    reject('Trash Didnt collect.');
                }
            }, 1500)
        })
    }

    async function allstuffs() {
        const walkDogwork = await walkDog();
        console.log(walkDogwork);
        setdogworks(walkDogwork);

        const kitchenwork = await cleanKitchen();
        console.log(kitchenwork);
        setkitchenworks(kitchenwork);

       

        const trashwork = await takeOuttrash();
        console.log(trashwork);
        settrashworks(trashwork);
    }



    return (
        <div> <p>
            {resultvalue}
        </p>
            <hr></hr>
            <p>
                Dog work - {dogworks}
            </p>
            <p>
                Kitchen work - {kitchenworks}
            </p>
            <p>
                Trash works - {trashworks}
            </p>
        </div>
    )
}

export default Asynsync