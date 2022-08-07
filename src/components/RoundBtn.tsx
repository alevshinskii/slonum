interface RoundBtnProps {
    children: JSX.Element | string;
    diameter:string;
}

function RoundBtn({ children, diameter }: RoundBtnProps) {
    return <div className="round-btn" style={{width:diameter, height:diameter}}>{children}</div>;
}

export default RoundBtn;
