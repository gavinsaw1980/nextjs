import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen m-5">
        <div className="flex flex-col text-center">
            <h1 className="text-5xl max-md:text-base mb-10">404 | Not Found</h1>
            <Link href="/" className="text-sky-400 after:content-['_↗'] hover:underline">Return Home</Link>
        </div>
    </div>
  );
}