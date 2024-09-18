"use client";
import { useState } from "react";
import { useUIState, useActions } from "ai/rsc";
import { AI } from "@/app/action";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MicIcon from "@mui/icons-material/Mic";
import { nanoid } from "@/lib/utils";
import { UserMessage } from "./Messages";
import Dashboard from "@/components/Dashboard"; // Import Dashboard

export default function Chatbot() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useUIState<typeof AI>();
    const { submitUserMessage } = useActions<typeof AI>();
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    // Speech recognition logic with improved handling
    const startSpeechRecognition = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.error("Speech recognition not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setIsRecording(true);
            console.log("Speech recognition started...");
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            console.log("Transcription result: ", transcript);
            setInputValue(transcript);
            setIsRecording(false);
            // Automatically submit the message after transcription
            handleSubmitMessage(transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error: ", event.error);
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
            console.log("Speech recognition ended.");
        };

        // Start the recognition process
        recognition.start();
    };

    const handlePromptClick = async (promptText: string) => {
        setIsLoading(true);

        const id = nanoid();
        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id,
                display: <UserMessage>{promptText}</UserMessage>,
                role: "user",
            },
        ]);

        const responseMessage = await submitUserMessage(promptText);
        setMessages((currentMessages) => [
            ...currentMessages,
            { ...responseMessage, role: "assistant" },
        ]);
        setIsLoading(false);
    };

    const handleSubmitMessage = async (message: string) => {
        const id = nanoid();
        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id,
                display: <UserMessage>{message}</UserMessage>,
                role: "user",
            },
        ]);

        const responseMessage = await submitUserMessage(message);
        setMessages((currentMessages) => [
            ...currentMessages,
            { ...responseMessage, role: "assistant" },
        ]);
        setInputValue("");
    };

    return (
        <div className="relative max-w-[50rem] mx-auto">
            <div
                className="flex flex-col justify-between"
                style={{ height: "calc(96vh - 5.0rem)" }}
            >
                {messages.length === 0 ? (
                    <>
                        <div className="flex flex-col bg-custom-black rounded-xl p-7 mx-3">
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 text-4xl">
                            Restaurant Assistant
                            </h1>
                            <h2 className="text-sm text-white opacity-70 mt-2 mb-5">
                                Use this interactive chat to ask questions about your business operations, including sales projections, cost analysis, inventory needs, and market share trends, and receive real-time insights and recommendations.
                            </h2>
                        </div>
                        <Dashboard />
                    </>
                ) : (
                    <div className="h-full overflow-y-scroll space-y-5 pb-20 scrollbar-none ">
                        {messages.map((message, index) => (
                            <div key={message.id}>
                                {message.display}
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-10 w-full bg-white md:px-0 px-2 bg-opacity-60 ">
                    <div className="grid sm:grid-cols-2 grid-cols-1">
                        {messages.length === 0 && (
                            <>
                                <button
                                    className="relative bg-custom-gray py-3 mb-2 sm:ml-2 ml-0 px-3 rounded-xl items-center flex flex-row hover:cursor-pointer shadow-sm"
                                    onClick={() =>
                                        handlePromptClick(
                                            "What were our sales last year?"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon style={{ color: 'black' }} className="animate-pulse" />
                                    <h1 className="ml-2 max-sm:text-xs text-black">
                                        What were our sales last year?
                                    </h1>
                                </button>
                                <button
                                    className="relative bg-custom-gray py-3 mb-2 sm:ml-2 ml-0 px-3 rounded-xl items-center flex flex-row hover:cursor-pointer shadow-sm"
                                    onClick={() =>
                                        handlePromptClick(
                                            "What does our inventory look like?"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon style={{ color: 'black' }} className="animate-pulse" />
                                    <h1 className="ml-2 max-sm:text-xs text-black">
                                    What does our inventory look like?
                                    </h1>
                                </button>
                            </>
                        )}
                    </div>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            handleSubmitMessage(inputValue);
                        }}
                    >
                        <div className="relative flex items-center">
                            <input
                                className="bg-white w-full border border-black py-3 px-5 outline-none text-black rounded-xl "
                                placeholder="Send a message..."
                                value={inputValue}
                                onChange={(event) => {
                                    setInputValue(event.target.value);
                                }}
                            />
                            <button
                                type="button"
                                className={`ml-2 p-2 rounded-full ${isRecording ? "bg-red-500" : "bg-gray-300"}`}
                                onClick={startSpeechRecognition}
                            >
                                <MicIcon style={{ color: isRecording ? "white" : "black" }} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
