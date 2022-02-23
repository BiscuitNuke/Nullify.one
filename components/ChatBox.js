import { useState } from 'react'; 
import { Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'; 

export default function ChatBox() {
    const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState([]); 

    const handleClick = e => {
        e.preventDefault(); 
        if (input == '') return; 
        
        let msg = {
            isBot: false, 
            msg: input, 
        }; 

        setMessages([...messages, msg]); 
        setInput(''); 
    }; 

    return (
        <Container>
            <Row>
                {messages.map(msg => (
                    <p>{msg.msg}</p>
                ))} 
            </Row>
            <Row>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Type message here..."
                    aria-label="Type message here..."
                    aria-describedby="basic-addon2"
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                    Send
                    </Button>
                </InputGroup>
            </Row>
        </Container>
    ); 
}