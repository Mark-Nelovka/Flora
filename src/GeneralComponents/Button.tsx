interface IButton {
    text: string,
    styleB: string,
    styleContainerButton: string
    func?: () => void;
    type: "submit" | "reset" | "button";
}

export default function Button(
    {text, styleB, styleContainerButton, func, type}
    :IButton
) {
    return(
        <div className={styleContainerButton}>
            <button type={type} onClick={func} className={styleB}>{text}</button>
        </div>
    )
};
