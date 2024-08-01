import Card from "./Card";

const OtherServices = () => {
  return (
    <div className="w-full lg:px-[112px] px-3 mt-24 lg:mt-10 mb-8 ">
      <h1 className="text-4xl text-[rgba(24,24,24,1)] font-semibold text-center my-5 lg:my-10">
        Other Services
      </h1>

     <div className="flex flex-col lg:flex-row gap-5 lg:gap-10  lg:mt-10 ">
     <Card/>
      <Card/>
      <Card/>
     </div>
    </div>
  );
};

export default OtherServices;
