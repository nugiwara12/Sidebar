import Image from "next/image";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <a 
          href="/dashboard" 
          className="text-center text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Hello world
        </a>
      </div>

      
    </>
  );
}
