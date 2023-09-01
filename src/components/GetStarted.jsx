import { useState } from "react"

function GetStarted() {
  const [email, setEmail] = useState("");

  const handleEmail = ()=>{
    console.log(email ? email : "Error..");
  }

  return (
    <section>
      <div className="container relative">
        <div className="text-white element-center absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] bg-[#1c2230] w-[865px] max-w-full min-h-[275px] text-center p-8">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-4">
            Get early access today
          </h3>
          <p className="w-[620px] max-w-full mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <form onSubmit={(e)=>e.preventDefault()}
          className="w-full flex justify-between items-center
          flex-wrap gap-7 md:px-10"
          >
            <input
              type="email"
              placeholder="email@example.com"
              className="rounded-[30px] w-full md:flex-1 h-[50px] pl-8 outline-none text-black font-medium"
              onChange={(e)=> setEmail(e.target.value)}
              />

              <button className="main-btn w-[50%] mx-auto md:w-[200px] h-[50px] rounded-[30px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-300"
              onClick={handleEmail}
              >
                Get started for free
              </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetStarted