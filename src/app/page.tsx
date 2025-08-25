import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Go to dashboard</Link>
    </div>
  );
}
