"use client";
import { useStreamableText } from "@/lib/hooks/use-streamable-text";
import { cn } from "@/lib/utils";
import { StreamableValue, useStreamableValue } from "ai/rsc";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { spinner } from "./Spinner";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const BotMessage = ({
    content,
    className,
}: {
    content: string | StreamableValue<string>;
    className?: string;
}) => {
    const text = useStreamableText(content);

    return (
        <div className={cn("group relative flex items-start", className)}>
            <div className="rounded-xl p-1 border flex items-center justify-center">
                <div className="text-green-800">
                    <LocalPizzaIcon />
                </div>
            </div>
            <div className="flex-1 space-y-2 overflow-hidden px-1 ml-2">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ node, ...props }) => {
                            // Detect LaTeX content in the message
                            const latexMatch = /\[\\text\{(.+)\}\]/.exec(text);
                            if (latexMatch) {
                                return (
                                    <BlockMath>{latexMatch[1]}</BlockMath>
                                );
                            }
                            return <p {...props} />;
                        },
                    }}
                >
                    {text}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export function BotCard({
    children,
    showAvatar = true,
}: {
    children: React.ReactNode;
    showAvatar?: boolean;
}) {
    return (
        <div className="group relative flex items-start">
            <div className="rounded-xl p-1 border flex items-center justify-center mr-1  ">
                <div className=" text-green-800 ">
                    <LocalPizzaIcon />
                </div>
            </div>
            <div className="flex-1 pl-2">{children}</div>
        </div>
    );
}

export function UserMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="group relative flex items-start">
            <div className="rounded-xl p-1 border flex items-center justify-center mr-1">
                <PersonOutlineOutlinedIcon />
            </div>
            <div className=" flex-1 space-y-2 overflow-hidden pl-2">
                {children}
            </div>
        </div>
    );
}

export function SpinnerMessage() {
    return (
        <div className="group relative flex items-start ">
            <div className="rounded-xl p-1 border flex items-center justify-center mr-3  ">
                <div className=" text-green-800 ">
                    <LocalPizzaIcon />
                </div>
            </div>
            <div className="ml-4 mt-1 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
                {spinner}
            </div>
        </div>
    );
}
