import { Icon } from "@iconify/react";
import { Burger, Drawer, Image } from "@mantine/core";
import { useState } from "react";

export default function Header() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <section className="bg-primary-600 flex px-6 justify-between items-center pt-8 rounded-b-lg">
        <Icon
          icon="fluent:chevron-left-24-regular"
          height={24}
          className="text-white"
        />
        <div className="w-20">
          <Image src="/BudgetBear.png" alt="logo" />
        </div>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          color="#ffff"
        />
      </section>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="sm"
        classNames={{ drawer: "rounded-r-lg" }}
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
}
