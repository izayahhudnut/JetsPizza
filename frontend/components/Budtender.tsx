"use client";
import { useState, useEffect } from "react";
import { useUIState, useActions, useAIState } from "ai/rsc";
import { AI, getUIStateFromAIState, UIState } from "@/app/action";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Image from "next/image";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";
import { nanoid } from "@/lib/utils";
import { UserMessage } from "./Messages";
import Particles from "./magicui/particles";
import { BorderBeam } from "./magicui/border-beam";

export default function Budtender() {
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
                        <Particles
                            className="absolute inset-0"
                            quantity={600}
                            ease={80}
                            refresh
                        />
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl">
                            The Greenest Budtender
                        </h1>
                        <h2 className="text-sm  text-white opacity-70 mt-2 mb-5">
                            Your expert guide in the world of CBD, helping you
                            discover the perfect products tailored to your
                            unique preferences and needs.
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
                                            "What is the best product for me?"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon style={{ color: 'black' }} className="animate-pulse" />
                                    <h1 className="ml-2 max-sm:text-xs text-black">
                                        What is the best product for me?
                                    </h1>
                                </button>
                                <button
                                    className="relative bg-custom-gray py-3 mb-2 sm:ml-2 ml-0 px-3 rounded-xl items-center flex flex-row hover:cursor-pointer shadow-sm"
                                    onClick={() =>
                                        handlePromptClick(
                                            "Show me the cheapest gummies"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon style={{ color: 'black' }} className="animate-pulse" />
                                    <h1 className="ml-2 max-sm:text-xs text-black">
                                        Show me the cheapest gummies
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
