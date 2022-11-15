import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Loginform() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <div className="space-y-4">
        <TextInput label="Email" radius="md" {...form.getInputProps("email")} />
        <PasswordInput
          label="Password"
          radius="md"
          {...form.getInputProps("password")}
        />
        <Group position="center">
          <Button
            className="!bg-primary-500 uppercase"
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
