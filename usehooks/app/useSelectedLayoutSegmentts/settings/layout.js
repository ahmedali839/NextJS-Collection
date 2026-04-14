export const metadata = {
  title: "Inner setting title",
  // description: "@a | It's inner setting description",
  description: "It's inner setting description",
};

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
