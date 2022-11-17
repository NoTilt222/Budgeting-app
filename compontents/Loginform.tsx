import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import Registerform from "./Registerform";

export default function Loginform() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

function login() {
  const localSignInEmail= typeof window !== 'undefined' ?localStorage.getItem("email"): null
      const localSignInPassword = typeof window !== 'undefined' ? localStorage.getItem("password"): null
  
        if(localSignInEmail == form.values.email && localSignInPassword == form.values.password){
          
          router.push("/")
          showNotification({
            message:"Logged in succesfully",
            color: "green"
          })
        }
        else
      showNotification({
        message: "Login failed",
        color: 'red'
      })
}


  return (
    <form onSubmit={form.onSubmit((values) => login())}>
      <div className="space-y-4">
        <TextInput label="Email" radius="md" {...form.getInputProps("email")} />
        <PasswordInput
          label="Password"
          radius="md"
          {...form.getInputProps("password")}
        />
        <Group position="center">
          <Button
          variant="outline"
            // classNames={{root: "!bg-primary-500"}}
            radius="md"
            type="submit"
          >
            Log in
          </Button>
        </Group>
      </div>
    </form>
  );
}
