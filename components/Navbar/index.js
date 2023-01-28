import Image from "next/image";


function Navbar(){

    return(
        
      <nav className="container w-100 h-auto py-3 px-auto flex justify-between ">
        <div className="flex-1">
        <a href="https://flowbite.com/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
      <Image
        src={'/images/logo.svg'}
        alt="logo"
        width={100}
        height={100}
        class="h-6  sm:h-9"
        />
      <span class="self-center text-xl font-semibold whitespace-nowrap text-color1 font-bold">CathaDev</span>
  </a>
        </div>

        <div className="flex-2 flex items-center">
        <div className=' flex items-center'>
                <div className='rounded-full w-5 h-5 bg-black flex justify-center'>
                    <Image
                    alt=''
                    src={'/images/arrow-forward.svg'}
                    width={10}
                    height={10}
                    />
                    

                </div>
                <span className='px-2 text-center'>Contact us</span>

            </div>
            <button className="rounded bg-black h-7 text-white px-4">
              menu
            </button>
        </div>

      </nav>
    )
}
export default Navbar;