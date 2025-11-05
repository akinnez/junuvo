"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useParams, useRouter } from "next/navigation";

function CreateProfile() {
  const router = useRouter();
  const { accountType } = useParams();
  // useReloadRedirect("/auth/create");

  const handleProceed = () => {
    // Logic to handle profile creation can be added here
    router.push(
      accountType != "business"
        ? `/auth/create/${accountType}/profile_pin`
        : `/auth/create/${accountType}/profile`
    );
  };

  // const formSignal = new SignalForm({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  // });

  const handleChange = (field: string, value: string) => {
    // formSignal.setValue({ ...formSignal.value, [field]: value });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Let&#39;s get you started</h1>
        <span className="text-gray-400 text-sm">
          Let&#39;s get you started on your {accountType} account journey
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <Input
            label="Email Address"
            type="email"
            // value={formSignal.value.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <Input
            label="First Name"
            // value={formSignal.value.email}
            onChange={(e) => handleChange("first_name", e.target.value)}
            placeholder="Enter your first name"
            required
          />
          <Input
            label="Last Name"
            // value={formSignal.value.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
            placeholder="Enter your last name"
            required
          />
          <Input
            label="Password"
            type="password"
            // value={formSignal.value.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter your password"
            required
          />
          <span className="text-xs text-gray-600 block">
            Password must have alphanumeric, number, and at least special
            character.
          </span>
          {accountType == "business" && (
            <Input
              label="Date of Birth"
              type="date"
              // value={formSignal.value.password}
              onChange={(e) => handleChange("dob", e.target.value)}
              placeholder="MM/DD/YYYY"
              required
            />
          )}

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span className="text-gray-600">
              By clicking Continue, you agree to our{" "}
              <span className="text-[#E20F00]">terms</span> and{" "}
              <span className="text-[#E20F00]">conditions</span>
            </span>
          </div>
        </form>
      </div>

      <Button disabled={false} className="w-full mt-5" onClick={handleProceed}>
        Continue
      </Button>
    </>
  );
}

export default CreateProfile;
