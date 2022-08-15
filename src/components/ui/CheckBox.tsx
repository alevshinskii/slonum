interface CheckBoxProps {
    checked: boolean;
    children: JSX.Element | string;
}

function CheckBox({ checked = true, children }: CheckBoxProps) {
    return (
        <div className="checkbox">
            <div>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    defaultChecked={checked}
                    id={Date.now().toString()}
                />
                <label
                    className="checkbox-label"
                    htmlFor={Date.now().toString()}
                >
                    {children}
                </label>
            </div>
        </div>
    );
}
export default CheckBox;
