const LandingBanner = ({title,des,img,video,reverse}) => {
  return (
      <>
          <hr className='outline-none border-none h-2 bg-[rgb(35,35,35)]'/>
       <div className={`w-full py-12 ${reverse} px-36 bg-black flex justify-between items-center `}>
    <div className="">
          <h1 className="text-white w-[489px] leading-snug text-[46px] font-extrabold">{ title}</h1>
              <p className="text-white text-2xl pt-6 w-[480px]  font-medium">
               {des}  
              </p>
      </div>
          <div className="relative z-10">
          <img src={img} alt="img" />
          {video && (
            <video className="absolute  inset-0 -z-10" src={video} autoPlay/>
          )}
      </div>
    </div>
      </>
  )
}

export default LandingBanner
