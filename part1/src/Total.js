const Total = (props) => {
    return (
        <>
            <p>Número de exercícios total = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </>
    )
}

export default Total