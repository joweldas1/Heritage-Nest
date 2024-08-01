import './buy.css'
import {FaLocationDot} from "react-icons/fa6"
import {IoLogoUsd, IoMdHome, IoMdSearch} from "react-icons/io"
const BuySearchInput = () => {
    const handleSearchValue =(e)=>{
        e.preventDefault()
        const searchText = e.target.search.value
        const location = e.target.location.value
        const property = e.target.property.value
        const budget = e.target.budget.value

        const Query ={searchText,location,property,budget}
        console.log(Query);
    }



  return (
    <div className='my-4'>
    <form onSubmit={handleSearchValue}>
    {/* text field */}
    <label className="input input-bordered flex flex-row-reverse items-center gap-2 ">
        <input type="text" name='search' className="grow" placeholder="Search Properties" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-16'>
        <div>
                 {/* -----location---- */}
    <label htmlFor="Location " className="flex items-center gap-2  font-semibold mt-5"> 
        <FaLocationDot className="text-[rgba(238,102,17,1)]  lg:text-xl"/>
         <span className="text-[rgba(24,24,24,1)] text-sm lg:text-lg"> Your Location</span>
     </label>

    <select name="location" id="location" className='dropDown ml-3 mt-2'>
        <option className='dropDown-option' value=""> Your location</option>
             
        <option className='dropDown-option' value="New York City">New York City </option>
        <option className='dropDown-option' value="Los Angeles">Los Angeles </option>
        <option className='dropDown-option' value="Chicago">Chicago </option>
        <option className='dropDown-option' value="Houston">Houston</option>
        <option className='dropDown-option' value="Miami">Miami</option>
    </select>

        </div>
        <div>
              {/* property type */}
    
    <label htmlFor="property " className="flex items-center gap-2  font-semibold mt-5"> 
        <IoMdHome className="text-[rgba(238,102,17,1)] text-sm lg:text-xl"/>
         <span className="text-[rgba(24,24,24,1)] text-sm lg:text-lg">Property Type</span>
     </label>

    <select name="property" id="property" className='dropDown ml-3 mt-2'>
        <option className='dropDown-option' value=""> Choose Property Type</option>
        <option className='dropDown-option' value="Single Family Home">Single Family Home </option>
        <option className='dropDown-option' value="Condominium">LCondominium  </option>
        <option className='dropDown-option' value="Townhouse">Townhouse </option>
        <option className='dropDown-option' value="Apartment">Apartment</option>
        <option className='dropDown-option' value="Multi Family Home">Multi Family Home</option>
    </select>
        </div>
        <div>
               {/* budget */}
    <label htmlFor="budget " className="flex items-center gap-2  font-semibold mt-5"> 
        <IoLogoUsd   className="text-[rgba(238,102,17,1)] text-xl"/>
         <span className="text-[rgba(24,24,24,1)] text-sm lg:text-lg">Budget</span>
     </label>

    <select name="budget" id="budget" className='dropDown ml-3 mt-2'>
        <option className='dropDown-option' value="10000">10000 $</option>
        <option className='dropDown-option' value="35000">35000 $ </option>
        <option className='dropDown-option' value="100000">100000 $ </option>
        <option className='dropDown-option' value="50000">50000 $</option>
        <option className='dropDown-option' value="35000">35000 $</option>
    </select>
        </div>
      </div>
      <button type='submit' className='btn flex items-center justify-center gap-1 bg-[rgba(0,89,177,1)] text-[rgba(255,255,255,1)] hover:bg-[rgba(0,89,177,0.9)] w-full py-2 mt-4 
      '>
        <IoMdSearch className='text-xl '/> <span> Find Query</span>
      </button>
    </form>
  
    </div>
  );
};

export default BuySearchInput;
