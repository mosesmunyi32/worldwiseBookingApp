import SignInButton from "../_components/signInButton";

export default function Page() {
  return (
    <div className=" w-full flex flex-col gap-10  mt-40 items-center ">
      <h2 className="text-3xl font-semibold">
        Sign in to accss your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
