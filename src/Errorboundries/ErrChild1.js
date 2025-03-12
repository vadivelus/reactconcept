import React,{useEffect, useState} from "react";

function ErrChild1(props)
{
    const mystyle ={padding:'5px',border:'solid 0.5px', width:'50%'};

    
    const [myarray, setmyarray]=useState(['jay','velu','paru']);
    const [secarray, setsecarray]=useState(['Strawbery','Pineapple', 'Kiwi','Orange']);
const [slicevalue, setslicevalue]=useState('');
    useEffect(()=>
    {
        slicefunc();
    },[])
    const slicefunc =()=>
    {
        let sdfsdf =secarray.slice(1);
        setslicevalue(sdfsdf);
        const numbers = [3, 7, 9, 12, 15, 18];

    }
    return(<div>
        <p>This is child1</p>
        <p>{props.id.toUpperCase()}</p>
        <p>Original array : {JSON.stringify(myarray)}</p>
        <p>Second array: {JSON.stringify(secarray)}</p>
        <p style={mystyle}>Slice(2) : {slicevalue.toString()}</p>
        <p style={mystyle}>
Splice : {secarray.splice(1,1)} | {secarray.toString()}
</p>
        <p style={mystyle}>json.stringify: {JSON.stringify(myarray)}</p>
        <p style={mystyle}>toString: {myarray.toString()}</p>
        <p style={mystyle}>join: {myarray.join(" * ")}</p>
        <p style={mystyle}>
        Concat :{(myarray.concat(secarray)).toString()}
</p>

{/* <p style={mystyle}> Splice(1,0, 'Blueberyy') :  {secarray.splice(1,0, 'Bluberyy')}  {secarray.toString()}</p> */}
<p style={mystyle}>Pop : {myarray.pop()}  | {myarray.toString()}</p>
<p style={mystyle}>Shift: {myarray.shift()} | {myarray.toString()}</p>
<p style={{mystyle}}>Push : {myarray.push('Guava')} | {myarray.toString()}</p>
<p style={mystyle}> Delete :{delete myarray[1]} | after delete:{JSON.stringify(myarray)}</p>

    </div>)
}

export default ErrChild1