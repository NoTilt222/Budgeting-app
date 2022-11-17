import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";

export default function Registerform() {
  const localSignUp= typeof window !== 'undefined' ? localStorage.getItem("email"): null
  
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });
 const router = useRouter()
 function signUp(){
  if(form.values.firstName&&form.values.lastName&&form.values.email&&form.values.password&&form.values.confirmPassword)
  {
  localStorage.setItem("first name", form.values.firstName)
  localStorage.setItem("last name", form.values.lastName)
  localStorage.setItem("email", form.values.email)
  localStorage.setItem("password", form.values.password)
  localStorage.setItem("confirm password", form.values.confirmPassword)
  router.push("/")
  showNotification({
    message: "Account created",
    color: "green"
  })
  }
}
  return (
    <form onSubmit={form.onSubmit((values) => signUp() )}>
     
      <div className="space-y-4">
        <TextInput
          autoComplete="off"
          radius="md"
          label="Firstname"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          autoComplete="off"
          radius="md"
          label="Lastname"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          radius="md"
          autoComplete="off"
          label="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          autoComplete="off"
          radius="md"
          label="Password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          autoComplete="off"
          radius="md"
          label="Confirm password"
          {...form.getInputProps("confirmPassword")}
        />
        <Group position="center" mt="md">
          <Button type="submit" radius="md" variant="outline">
            Sign Up
          </Button>
        </Group> 
      </div>
    </form>
  );
}
