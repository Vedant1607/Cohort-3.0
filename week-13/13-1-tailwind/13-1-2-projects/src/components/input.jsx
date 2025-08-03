// import '../App.css'
export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return (
        <span onClick={onClick} className={`m-4 rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer`}>
            <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none rounded-2xl"></input>
        </span>
    )
}