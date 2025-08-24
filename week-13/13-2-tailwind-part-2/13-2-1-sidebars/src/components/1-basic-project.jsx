// breakpoints: sm. md. lg. xl. 2xl

export default function SidebarClass1() {
  return (
    <div className="flex">
      <div className="bg-red-500 md:w-96 w-2 h-screen transition-all duration-200 ease-in-out">
        Sidebar
      </div>
      <div className="bg-green-800 w-full h-screen">Content</div>
    </div>
  );
}
