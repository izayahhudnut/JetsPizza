"use client";
import { useState, useEffect } from "react";
import { useUIState, useActions, useAIState } from "ai/rsc";
import { AI, getUIStateFromAIState, UIState } from "@/app/action";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { nanoid } from "@/lib/utils";
import { UserMessage } from "./Messages";

export default function Chatbot() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useUIState<typeof AI>();
    // const aiState = useAIState<typeof AI>();
    const { submitUserMessage } = useActions<typeof AI>();
    const [isLoading, setIsLoading] = useState(false);


    // const uiState: UIState = getUIStateFromAIState();

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

    

    return (
        <div className="relative max-w-[50rem] mx-auto">
            <div
                className="flex flex-col justify-between"
                style={{ height: "calc(100vh - 5.0rem)" }}
            >
                {messages.length === 0 ? (
                    <div className=" flex flex-col bg-custom-black rounded-xl p-7  mx-3">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 text-4xl">
                            Data Assistant
                        </h1>
                        <h2 className="text-sm  text-white opacity-70 mt-2 mb-5">
                        Your go-to guide for Jet's Pizza company insights, sales data, and inventory information
                        </h2>
                    </div>
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
                                            "What were our sales last week?"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon style={{ color: 'black' }} className="animate-pulse" />
                                    <h1 className="ml-2 max-sm:text-xs text-black">
                                        What were our sales last week?
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
                            const id = nanoid();
                            setMessages((currentMessages) => [
                                ...currentMessages,
                                {
                                    id,
                                    display: (
                                        <UserMessage>{inputValue}</UserMessage>
                                    ),
                                    role: "user",
                                },
                            ]);

                            const responseMessage = await submitUserMessage(
                                inputValue
                            );
                            setMessages((currentMessages) => [
                                ...currentMessages,
                                { ...responseMessage, role: "assistant" },
                            ]);
                            setInputValue("");
                        }}
                    >
                    <div className="relative">
                        <input
                        className="bg-white w-full border border-black py-3 px-5 outline-none text-black rounded-xl " 
                        placeholder="Send a message..."
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }}
                    />
                    
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
