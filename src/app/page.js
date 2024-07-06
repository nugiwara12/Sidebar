import Image from "next/image";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className='ml-64 p-5'>
        <div className='text-blue-500'>
            This is the main content area.
        </div>
      </div>
    </>
  );
}
