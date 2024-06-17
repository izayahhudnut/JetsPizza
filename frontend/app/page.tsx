import Budtender from "@/components/Budtender";
export const runtime = "edge"
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div>
          <Navbar />
          <Budtender />
        </div>
    );
}

