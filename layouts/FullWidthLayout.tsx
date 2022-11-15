import Header from "./Header";

interface IProps {
  children: any;
}

export default function FullWidthLayout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
