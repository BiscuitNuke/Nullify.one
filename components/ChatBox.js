import { useState } from 'react'; 
import { Container, Row, InputGroup, FormControl, Button, Spinner } from 'react-bootstrap'; 
import ChatMessage from './ChatMessage'; 
import axios from 'axios'; 
const OpenAI = require("openai-api");
const openai = new OpenAI('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');

export default function ChatBox() {
    const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState([]); 
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async e => {
        e.preventDefault(); 
        if (input == '') return; 
        setLoading(true); 

        let msg = {
            isBot: false, 
            msg: input, 
        }; 

        setInput(''); 
        await botRequest(msg); 
        setLoading(false); 
    }; 

    const botRequest = async msg => {
        // request using 'msg.msg' 
        // make new 'botMsg' variable: 
        let defaultPrompt = `Luna is a teenager. Luna loves to read and code. Luna is an e-girl. Luna likes video games\nMe: hello Luna\nLuna: Hello!\n`;
        let prompt = `Luna is a teenager. Luna loves to read and code. Luna is an e-girl. Luna likes video games\nMe: hello Luna\nLuna: Hello!\n`;
        prompt = defaultPrompt;
        prompt += `Me: ${msg}\n`; //points to message content 
        const gptResponse = await openai.complete({
            engine: "davinci",
            prompt: prompt,
            maxTokens: 150,
            temperature: 0.9,
            topP: 1,
            presencePenalty: 0.85,
            frequencyPenalty: 0.85,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: ["\n", "\n\n"],
        });
        let botMsg = {
            isBot: true, 
            msg: gptResponse.data.choices[0].text.replace("Luna:", "").replace("Me:", "") // the message from the bot 
        }; 
        prompt = defaultPrompt;  
        // const input = `${chatLog}You: ${msg.msg}`;
        // const params = {
        //     'prompt': input,
        //     'max_tokens': 150,
        //     'temperature': 0.8,
        //     'frequency_penalty': 0,
        //     'presence_penalty': 0.6,
        //     'stop': ["\n", "\n\n"],
        // }; 
        // const res = await axios.post('https://api.openai.com/v1/engines/curie/completions', params, {headers: {'Authorization': 'Bearer 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'}}); 
        
        // let botMsg = {
        //     isBot: true, 
        //     msg: res.data.choices[0].text // the message from the bot 
        // }; 
        // console.log("RES:", res); 
 
        updateMessages(msg, botMsg); 
        console.log(messages); 
    }; 

    const updateMessages = (msg, botMsg) => {
        setMessages([...messages, msg, botMsg]); 
    }; 

    let submitBtnTxt = loading ? <Spinner animation="border" size="sm" /> : "Send"; 

    return (
        <Container className="border-top border-3 pt-3 mt-3">
            <h2 className="text-danger">Chat with Luna (AI)</h2>
            <Row className="border rounded-top overflow-auto p-2" style={{maxHeight: '20rem'}}>
                {messages.map((msg, indexKey) => (
                    <ChatMessage data={msg} key={indexKey} />
                ))} 
            </Row>
            <Row>
                <form className="p-0" onSubmit={handleSubmit}>
                    <InputGroup className="rounded-bottom">
                        <FormControl
                        placeholder="Type message here..."
                        aria-label="Type message here..."
                        aria-describedby="basic-addon2"
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit} disabled={loading}>
                        {submitBtnTxt}
                        </Button>
                    </InputGroup>
                </form>
            </Row>
        </Container>
    ); 
}