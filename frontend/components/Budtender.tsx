"use client";
import { useState } from "react";
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
        <div className="relative max-w-[50rem] mx-auto pb-10">
        

            <div
                className="flex flex-col justify-between  "
                style={{ height: "calc(100vh - 6.8rem)" }}
            >
                {messages.length === 0 ? (
                    <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-xl p-7">
                        <h1 className="text-black font-bold text-3xl">
                            The Greenest Budtender

                        </h1>
                        <h2 className="text-lg opacity-70 mt-2 mb-5">
                            
                            Your expert guide in the world of CBD, helping you
                            discover the perfect products tailored to your
                            unique preferences and needs.
                        </h2>

                       
                    </div>
                ) : (
                    <div className="h-full overflow-y-scroll  space-y-5 pb-20 scrollbar-none">
                        {/* {messages.map((message) => (
                        <div key={message.id} className="flex items-start px-5">
                            <div className="rounded-xl p-1 border flex items-center justify-center mr-3  ">
                                {message.role === "user" ? (
                                    <div className="">
                                        <PersonOutlineOutlinedIcon />
                                    </div>
                                ) : (
                                    <div className=" text-green-800">
                                        <GoogleIcon />
                                    </div>
                                )}
                            </div>
                            <div className="pt-1">
                                {isLoading && message.role === "assistant" && (
                                    <div className="animate-spin">
                                        <AcUnitIcon style={{ color: "gray" }} />
                                    </div>
                                )}
                                <div>{message.display}</div>
                            </div>
                        </div>
                    ))} */}
                        {messages.map((message, index) => (
                            <div key={message.id}>
                                {message.display}
                                {/* {index < messages.length - 1 && (
                                <Separator className="my-4" />
                            )} */}
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-10 w-full bg-white md:px-0 px-2 bg-opacity-60 ">
                    <div className="grid sm:grid-cols-2 grid-cols-1">
                        {messages.length === 0 && (
                            <>
                                <button
                                    className="border py-3 mb-2 px-3 bg-custom-gray rounded-xl items-center  inline-flex hover:bg-gray-200 to-white hover:cursor-pointer shadow-sm"
                                    onClick={() =>
                                        handlePromptClick(
                                            "What is the best product for me?"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon />
                                    <h1 className="ml-2 max-sm:text-xs">
                                        What is the best product for me?
                                    </h1>
                                </button>
                                <button
                                    className="border py-3 mb-2 sm:ml-2 ml-0  px-3 bg-custom-gray rounded-xl items-center inline-flex hover:bg-gray-200 to-white hover:cursor-pointer shadow-sm"
                                    onClick={() =>
                                        handlePromptClick(
                                            "Show me the cheapest gummies"
                                        )
                                    }
                                >
                                    <AutoFixHighIcon />
                                    <h1 className="ml-2 max-sm:text-xs">
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
                        <input
                            className="bg-custom-gray w-full rounded-2xl py-5 px-5 outline-none"
                            placeholder="Send a message..."
                            value={inputValue}
                            onChange={(event) => {
                                setInputValue(event.target.value);
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
