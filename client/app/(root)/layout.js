import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const Layout = ({children}) => {
  return (
   <main>
   
    <Navbar />
    
    
    {children}

    <Footer/>
   </main>
  )
}

export default Layout