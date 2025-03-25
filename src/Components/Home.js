import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [mystinr, setmysting] = useState("");
    const [myarray, setmyarray] = useState([2, 3, 6, 7, 8]);
    const [checkpalidrom, setcheckpalidrom] = useState(0);
    const [factorial, setfactorial] = useState(0);
    const [modelobject, setmodelobject] = useState({ factorial: 0, 
        viewfactorial: 0, 
        valuint: 0, 
        viewintgervalid: 0, 
        mergedarray: "",
    maxofarray:0,
    evennumbers:[],
    slicedaray:[],
    somearray:[],
    filteredarray:[],
    uniqueraray:[]
    });

    useEffect(() => {
        checkmaxofarray();
        initial();
    }, [])

    const initial = () => {
        let arr1 = [2, 6, 4, 7]; let arr2 = [9, 8,2,1,4]; let arr3 =[44,55]
        let duplicatearray = [4,3,7,5,3,8,0,2,1,8,2,9];
        let  jjj = arr1.concat(arr2,arr3);
        let outaray= [...arr1,...arr2, ...arr3];

        let slicedara = outaray.slice(2,4);

        let somearay = outaray.some((item)=> item === 6)

        let filterearay = outaray.filter((items)=> items >8);

        let uniquerarraylist = duplicatearray.filter((elem, index, arr) =>
            {
                console.log("Element " +elem, "Array index" +duplicatearray.indexOf(elem) , "Loop Index" + index, "Result "+ (duplicatearray.indexOf(elem) === index))
                return duplicatearray.indexOf(elem) === index;
            }); 

        setmodelobject((prevState => ({
            ...prevState,
            mergedarray: outaray,
            slicedaray:slicedara,
            somearray:somearay,
            filteredarray:filterearay,
            uniqueraray:uniquerarraylist
        })));        
    }
    const checkmaxofarray = () => {
        let MA = ("Max of array " + Math.max(...myarray));
        let EN = ("Even numbers " + myarray.filter((num) => { return num % 2 === 0 }));
        setmodelobject((prevState =>({
            ...prevState,
            maxofarray:MA,
            evennumbers:EN
        })));
    }
    function isPalindrom() {
        let dfsdd = mystinr.split("").reverse().join("");
        alert(mystinr === dfsdd ? "Yes \"" + mystinr + "\" is a palindrom" : "No " + mystinr + " is not a palidrom");

        let revs = mystinr.split("").reverse().join("");
        alert("This is reverstring " + revs);
    }

    function checkfactorial() {
        let confator = parseInt(modelobject.factorial);
        if (confator === 0 || confator === 1) {
            setmodelobject((prevState =>
            ({
                ...prevState,
                viewfactorial: 1
            })));
        }
        else {
            let produtcs = 1;
            for (let i = 2; i <= confator; i++) {
                produtcs *= i;
            }
            setmodelobject((prevState => ({
                ...prevState,
                viewfactorial: produtcs
            })))
        }
    }
    const onchngfactorial = (e) => {
        setmodelobject(prevState => ({
            ...prevState,
            factorial: parseInt(e)
        }))
    }
    const onchnginteger = (e) => {
        setmodelobject((prevState => ({
            ...prevState,
            valuint: e
        })))
    }
    const checkisinteger = () => {
        let isintg = modelobject.valuint % 1 === 0 ? 1 : 2
        setmodelobject((prevState => ({
            ...prevState,
            viewintgervalid: isintg
        })))
    }
    return (<div>
        <h1> <p> Home page</p></h1>
        <p>
            Programatical navigaton
        </p>
        <button onClick={() => navigate('orderplace')}>Place order</button>
        <br>
        </br>
        <hr></hr>
        <h3>
            Check palindrom</h3>
        <p> let comparethistooriginal =mystring.split("").reverse().join("");
        </p>
        <p> <input onChange={(e) => setmysting(e.target.value)}></input>
            <button onClick={() => isPalindrom()}>Check palindrom</button>
        </p>
        <hr></hr>
        <h3>
            Max of array</h3>
        <p>let myarray = [2,3,6,7,8];
            <p>alert(Math.max(...myarray));   </p>
        </p>
        <p>
            Max: {modelobject.maxofarray}
        </p>
        <hr></hr>
        <h3>
            Reverse string</h3>
        <p>let revs = mystring.split("").reverse().join("");
        </p>
        <hr></hr>
        <h3>
            Find even numbers</h3>
        <p>
        let myarray = [2,3,6,7,8];<br></br>
            alert(myarray.filter(num=> num%2 ===0));
        </p>
        <p>
            Even number {modelobject.evennumbers}
        </p>
        <hr>
        </hr>
        <h3>
            Check factorial</h3>
        <p>
        </p>
        <p> <input onChange={(e) => onchngfactorial(e.target.value)}></input>
            <button onClick={() => checkfactorial()}>Check factorial</button>
        </p>
        <p>
            Factorial Result : {modelobject.viewfactorial}
        </p>
        <hr>
        </hr>
        <h3>
            Check given number is an interger</h3>
        <p>
            let isintg = modelobject.valuint % 1 === 0 ? true : false
        </p>
        <p> <input onChange={(e) => onchnginteger(e.target.value)}></input>
            <button onClick={() => checkisinteger()}>Check Integer</button>
        </p>
        <p>
            Integer Result : {modelobject.viewintgervalid === 1 ? "true" : "false"}
        </p>
        <hr></hr>
        <h3>Merged array

        </h3>
        <p>
        let arr1 = [2, 6, 4, 7]; let arr2 = [9, 8,2,1,4]; ; let arr3 =[44,55];
        let duplicatearray = [4,3,7,5,3,8,0,2,1,8,2,9];<br></br>
        let outaray = arr1.concat(arr2);<br></br>
        let outaray= [...arr1,...arr2, ...arr3];<br></br>
        let slicedara = outaray.slice(5,8);<br>
        </br>
        let somearay = outaray.some((item)=> item === 6)
        </p>
        <p>
        let filterearay = outaray.filter((items)=> items >8);
        </p>
        <p>
            <h5>Output</h5>
            Merged array result : {JSON.stringify(modelobject.mergedarray)};<br>
            </br>
            Sliced array result : {JSON.stringify(modelobject.slicedaray)}
           <br></br>
            Some array result : {JSON.stringify(modelobject.somearray)}<br></br>
            Filtered array : {JSON.stringify(modelobject.filteredarray)}<br></br>
            Uniquerarray(using filter, indexOf) : {JSON.stringify(modelobject.uniqueraray)}
        </p>
    </div>)

}