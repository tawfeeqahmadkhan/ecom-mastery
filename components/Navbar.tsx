
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ecommastery.jpg" alt="logo" width={74} height={29} />
      </Link>
       <div className="lg:flexCenter">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> 
    </nav>
  )
}

export default Navbar