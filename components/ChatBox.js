import { useState, useEffect } from 'react'; 
import { Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap'; 
import ChatMessage from './ChatMessage'; 
import axios from 'axios'; 

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

        botRequest(msg); 
        setInput(''); 
    }; 

    const botRequest = async msg => {
        // request using 'msg.msg' 
        // make new 'botMsg' variable: 
        
        const config = {
            params: {    
                prompt: msg.msg,
                max_tokens: 150,
                temperature: 0.9,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: '\nHuman'
            }, 
            headers: {
                'Authorization': `Bearer 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`,
            }
        }; 
        const res = await axios.post('https://api.openai.com/v1/engines/curie/completions', config); 
        
        let botMsg = {
            isBot: true, 
            msg: res.data.choices[0].text // the message from the bot 
        }; 
        console.log(res); 
 
        updateMessages(msg, botMsg); 
        console.log(messages); 
    }; 

    const updateMessages = (msg, botMsg) => {
        setMessages([...messages, msg, botMsg]); 
    }; 

    return (
        <Container>
            <Row className="border rounded-top overflow-auto p-2" style={{maxHeight: '20rem'}}>
                {messages.map((msg, indexKey) => (
                    <ChatMessage data={msg} key={indexKey} />
                ))} 
            </Row>
            <Row>
                <InputGroup className="p-0 rounded-bottom">
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