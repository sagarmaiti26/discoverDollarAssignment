import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';



const Footer = () => {

  return (
    <>
     
        <>
          <footer className="mt-20 w-full  sm:py-4 px-4  bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden justify-evenly">
            <div className="w-full  flex flex-col sm:flex-row gap-2 sm:gap-0 justify-evenly">
              <div className="w-full sm:w-1/2 text-center">
                <h2 className="text-primary-grey my-4">Mail Us:</h2>
                <p className="mt-2 leading-5">Flipkart Private Limited<br />
                
                  Clove Embassy Tech Village,<br />
                   Devarabeesanahalli ,<br />
                  Bengaluru, 560103,<br />
                  Karnataka, India
                </p>
              </div>


            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            
              <div className="w-full sm:w-1/2 text-center">
                <h2 className="text-primary-grey my-4">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br />
                  Buildings Alyssa, Begonia,<br />
                  Bengaluru, 560103,<br />
                  Karnataka, India <br />
                  Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                </p>
              </div>
            </div>

          </footer>
        

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Flipkart
            </a>
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a>
            <a href="/" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a>
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a>

            <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
         
          </div>
        </>
    </>
  )
};

export default Footer;
