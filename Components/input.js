const Input = ({typeinput,onChange}) =>{
    return (
    
    <input   
        type={typeinput}
        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        onChange={onChange}
    />
    )
}

export default Input