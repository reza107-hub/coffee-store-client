function Navbar() {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-[#372727] h-20">
      <div className="flex items-center text-white mr-16">
        <img className="md:h-20 h-16" src="https://i.ibb.co/vvs5ZHK/Untitled.png" alt="Espresso Emporium" />
        <span className="font-normal md:text-3xl tracking-tight ml-4" style={{ fontFamily: 'Rancho', fontWeight: 400, lineHeight: '75px' }}>Espresso Emporium</span>
      </div>
    </nav>
  );
}

export default Navbar;
