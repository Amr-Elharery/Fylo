function StayProductive() {
  return (
    <section className="py-[100px] ">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img src="/src/assets/images/illustration-stay-productive.png" alt="stay-productive" />
        </div>
        <div className="text-white">
          <h3 className="text-[35px] font-medium leading-[50px]">
            Stay productive 
            <br />
            wherever you are
          </h3>
          <div className="my-4 font-normal text-sm tracking-[0.8px]">
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae quia doloremque minima ullam atque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae quia doloremque minima ullam atque.
            </p>
          </div>
          <a href="/" className="text-primary hover:text-[#42b0d1] transition-color duration-300 border-b border-primary hover:border-[#42b0d1] border-solid pb-1 flex gap-2 items-center w-fit">
            See how Fylo works!
          <img src="/src/assets/images/icon-arrow.svg" alt="Arrow" className="w-[20px] h-[20px] object-contain animate-moveRight" />
          </a>

        </div>
      </div>
    </section>
  )
}

export default StayProductive;