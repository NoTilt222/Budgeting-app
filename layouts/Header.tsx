import { Icon } from "@iconify/react";
import { Burger, Drawer, Image } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <section className="bg-primary-500 flex px-6 justify-between items-center py-4 rounded-b-lg">
        <Link href="/">
          <div className="w-14">
            <Image src="/BudgetBear.png" alt="logo" />
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="./profile">
            <Icon icon="bi:person-fill" className="text-white" height={30} />
          </Link>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            color="#ffff"
          />
        </div>
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
