export default function ChatMessage(props) {
    const msg = props.data.msg; 
    const isBot = props.data.isBot;  

    return (
        <div className="w-100">
            <h6 className={isBot ? "text-danger" : "fw-light"}>{isBot ? "Luna (AI)" : "You"}</h6>
            <p className="text-wrap text-break">{msg}</p>
        </div>
    ); 
}