interface CardProps{

    children:JSX.Element
}


function Card({children}:CardProps) {
    return <div className="card">
        {children}
    </div>;
}

export default Card;
