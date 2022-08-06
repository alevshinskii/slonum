
interface CounterInputProps{
    value:string;
}

function CounterInput({value}:CounterInputProps) {

    return(
        <input className='counter-input' value={value}></input>
    )
}

export default CounterInput;