import Link from "next/link";
import Registerform from "../../compontents/Registerform";

export default function index() {
  return (
    <section className="bg-primary-500 px-6 py-12">
      <div className="border rounded-lg p-4 bg-white">
        <h1 className="uppercase font-bold text-xl text-center py-4">
          Sign up
        </h1>
        <Registerform />
        <p className="mt-4 text-center">Already have an account?</p>
        <div className="text-center text-blue-500">
          <Link href="/login">Sign in</Link>
        </div>
      </div>
    </section>
  );
}
