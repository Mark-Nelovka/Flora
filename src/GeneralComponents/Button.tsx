interface IButton {
    text: string,
    styleB: string,
    styleContainerButton: string
}

export default function Button({text, styleB, styleContainerButton}:IButton) {
    return(
        <div className={styleContainerButton}>
            <button className={styleB}>{text}</button>
        </div>
    )
};
