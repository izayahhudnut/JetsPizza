import Chatbot from "@/components/Chatbot";
export const runtime = "edge"
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div>
          <Navbar />
          <Chatbot />
        </div>
    );
}

