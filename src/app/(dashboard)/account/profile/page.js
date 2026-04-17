import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/updateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const guest = await getGuest(session.user.email);

  return (
    <>
      <div className="font-semibold text-2xl text-accent-400 mb-4">
        <h2>Update your guest profile</h2>
        <p className="text-lg mb-8 text-primary-200">
          Providing the folowing information will make your check-in process
          faster ad smoother. See you soon!
        </p>
      </div>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 w-full text-primary-800 shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </>
  );
}
