const Button = ({ onClick, texto }) => {
    return (
        <>
            <button onClick={onClick}>{texto}</button>
        </>
    )
}

export default Button