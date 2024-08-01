import React from 'react';


const rowOne = ["Overview","Features","Solutions","Tutorials","Pricing","Release"]
const rowTwo = ["News","Careers","About us","Media Kit","Contact","Release"]
const rowThree = ["Events","Newsletter","Blog","Tutorials","Help Center","Events"]
const rowFour = ["Twitter","Linkedin","Github","AgileList","Dribbles","GitBucket"]
const rowFive = ["Privacy","Cookies","License","Setting","Contact","Support"]


const FooterLinks = () => {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-5 w-full gap-10 text-center mx-auto '>
            <div>
                <p className='text-sm font-semibold text-[rgba(102,112,133,1)] leading-5 mb-3'>Product</p>
                <ul>
                    {
                        rowOne.map((d,idx)=>(
                            <li key={idx} 
                            className='text-[rgba(71,84,103,1)] text-md font-semibold mt-2 cursor-pointer hover:text-black'
                            >{d}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className='text-sm font-semibold text-[rgba(102,112,133,1)] leading-5 mb-3'>Company</p>
                <ul>
                    {
                        rowTwo.map((d,idx)=>(
                            <li key={idx} 
                            className='text-[rgba(71,84,103,1)] text-md font-semibold mt-2 cursor-pointer hover:text-black'
                            >{d}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className='text-sm font-semibold text-[rgba(102,112,133,1)] leading-5 mb-3'>Resources</p>
                <ul>
                    {
                        rowThree.map((d,idx)=>(
                            <li key={idx} 
                            className='text-[rgba(71,84,103,1)] text-md font-semibold mt-2 cursor-pointer hover:text-black'
                            >{d}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className='text-sm font-semibold text-[rgba(102,112,133,1)] leading-5 mb-3'>Social</p>
                <ul>
                    {
                        rowFour.map((d,idx)=>(
                            <li key={idx} 
                            className='text-[rgba(71,84,103,1)] text-md font-semibold mt-2 cursor-pointer hover:text-black'
                            >{d}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className='text-sm font-semibold text-[rgba(102,112,133,1)] leading-5 mb-3'>Legal</p>
                <ul>
                    {
                        rowFive.map((d,idx)=>(
                            <li key={idx} 
                            className='text-[rgba(71,84,103,1)] text-md font-semibold mt-2 cursor-pointer hover:text-black'
                            >{d}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;

//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>Product</th>
//         <th>Company</th>
//         <th>Resources</th>
//         <th>Social</th>
//         <th></th>
// 