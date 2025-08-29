
interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => (


    <div className="text-[#E0E0E0] font-exo2 pt-5 pr-6 pl-6">
        <nav className="flex justify-between">

            <div className="text-[#E0E0E0] font-bold text-[24px]"><a href="#Hero">Kanzah Hussain</a></div>


            <ul className="flex gap-5 text-[20px]">
                <li className="active:text-[#00FFFF] no-underline hover:underline decoration-[#00FFFF] underline-offset-4 decoration-2"><a href="#About">About</a></li>
                <li className="active:text-[#00FFFF] no-underline hover:underline decoration-[#00FFFF] underline-offset-4 decoration-2"><a href="#Experience">Experience</a></li>
                <li className="active:text-[#00FFFF] no-underline hover:underline decoration-[#00FFFF] underline-offset-4 decoration-2"><a href="#Projects">Projects</a></li>
                {/* <li className="active:text-[#00FFFF] no-underline hover:underline decoration-[#00FFFF] underline-offset-4 decoration-2"><a href="lolo">Skills</a></li> */}
                <li className= "active:text-[#00FFFF] no-underline hover:underline decoration-[#00FFFF] underline-offset-4 decoration-2"><a href="#Contact">Contact</a></li>
                <div>
                <button onClick={toggleDarkMode}>
                <img src="public/sun.svg" alt="Toggle dark mode" width={33.5} height={31.5}></img>
                </button>
            </div>
            </ul>
        </nav>
    </div>



)

export default Navbar;