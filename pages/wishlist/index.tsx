import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  Modal,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useListState, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import FullWidthLayout from "../../layouts/FullWidthLayout";

interface IProps {
  title: string;
  amount: number;
  children?: any;
}

const links = [
  { title: "Home", href: "/" },
  { title: "Wishlist", href: "/wishlist" },
].map((item, index) => (
  <Anchor href={item.href} key={index} className="!text-black !text-xs">
    {item.title}
  </Anchor>
));

export default function index() {
  const [opened, setOpened] = useState(false);
  const [values, setValues] = useListState<any>([]);
  const [localWishlist, setLocalWishlist] = useLocalStorage({
    key: "wishlist",
  });

  const budgetWishlist = 50;

  const form = useForm({
    initialValues: {
      product: "",
      price: 0,
    },
  });

  const remove = (i: any) => {
    setValues.remove(i);
  };

  let total = 0;

  useEffect(() => {
    if (total > budgetWishlist) {
      setOpened(true);
    }
  }, [values]);

  return (
    <FullWidthLayout>
      <section className="space-y-4 px-4 h-screen">
        <Breadcrumbs className="mt-4 text">{links}</Breadcrumbs>
        <h2 className="text-center font-semibold text-lg text-primary-600">
          Wishlist
        </h2>
        <Card title="budget" amount={budgetWishlist} />
        <form onSubmit={form.onSubmit((values) => setValues.append(values))}>
          <div className="grid grid-cols-2 gap-1">
            <TextInput
              label="Product/Thing"
              radius="md"
              {...form.getInputProps("product")}
            />
            <NumberInput
              label="Price"
              hideControls
              radius="md"
              icon={<Icon icon="mdi:dollar" />}
              {...form.getInputProps("price")}
            />
            <Button
              radius="md"
              type="submit"
              className="!bg-primary-600 col-span-2"
              mt="xs"
            >
              ADD
            </Button>
          </div>
        </form>
        {values.length > 0 &&
          values.map(({ product, price }, i) => {
            total += price;
            return (
              <Card key={i} title={product} amount={price}>
                <ActionIcon onClick={() => remove(i)}>
                  <Icon
                    icon="fluent:delete-48-filled"
                    height={16}
                    className="text-red-500"
                  />
                </ActionIcon>
              </Card>
            );
          })}
      </section>
      <div className="flex items-center justify-between py-2 bg-primary-600 rounded-t-lg px-6">
        <p className="uppercase text-white">Totaal</p>
        <span className="text-white font-medium">${total}</span>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
    </FullWidthLayout>
  );
}

function Card({ title, amount, children }: IProps) {
  return (
    <div className="flex justify-between items-center bg-primary-400 py-2 rounded-lg px-6">
      <h3 className="text-neutral-900 uppercase font-medium">{title}</h3>
      <span className="text-neutral-900">${amount}</span>
      {children}
    </div>
  );
}
