export default function SideLayout({ children }) {
  return (
    <div className="flex">
      <div className="flex-2 w-[30%]">Sidebar</div>
      <main>{children}</main>
    </div>
  );
}
