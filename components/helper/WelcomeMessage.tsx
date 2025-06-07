type GreetProps = {
    name:string
}

export const Greet = (props : GreetProps) => {
    return(
        <h1 className='text-center font-bold text-3xl mt-10 text-gray-700'>Welcome to {props.name} Section</h1>
    )
}