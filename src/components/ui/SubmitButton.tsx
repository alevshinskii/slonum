import SubmitButtonType from "./SubmitButtonType";

interface SubmitButtonProps {
    type?: SubmitButtonType;
    children: JSX.Element | string;
}

function SubmitButton({ type, children }: SubmitButtonProps) {
    let selectedClass = "";
    switch (type) {
        case SubmitButtonType.primary: {
            selectedClass = "submit-btn submit-btn-primary";
            break;
        }

        case SubmitButtonType.secondary: {
            selectedClass = "submit-btn submit-btn-secondary";
            break;
        }

        default: {
            selectedClass = "submit-btn";
            break;
        }
    }
    return (
        <div className={selectedClass}>
            <button>{children}</button>
        </div>
    );
}

export default SubmitButton;
