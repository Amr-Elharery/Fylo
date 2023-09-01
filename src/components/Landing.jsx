function Landing() {
  return (
    <section className="bg-[#1c2230] pt-[130px]">
      <div className="container element-center">
        <div className="w-[600px] max-w-full">
          <img src="/src/assets/images/illustration-intro.png" alt="landing" />
        </div>
        <div className="text-white text-center">
          <h1 className="text-[30px] md:text-[40px] font-semibold mb-3 mt-3">All your files in one secure location,
            <br />
            accessible anywhere.
          </h1>
          <p className="font-normal text-lg px-4 max-w-full md:w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, doloribus delectus, incidunt enim quas consequatur cum cupiditate, necessitatibus officiis veritatis ipsa. Dolorem impedit nobis quae qui repellendus atque sed culpa.
          </p>

          <a href="" className="main-btn px-[80px] py-[15px] rounded-[30px] my-8 block w-fit mx-auto text-white font-medium">Get started</a>
        </div>
      </div>

      <div className="h-[200px]">
        <img src="/src/assets/images/bg-curvy-desktop.svg" alt="back ground" className="w-full h-full" />
      </div>
    </section>
  )
}

export default Landing;
