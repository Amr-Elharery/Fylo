function TestimonialBox({desc, image, position, name}) {
  return (
    <div className="text-white flex flex-col bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_10px_8px_#1c202c]">

        <p className="text-sm font-normal tracking-[0.8px] mb-8">{desc}</p>

        <div className="flex items-center gap-4">

            <img src={`/src/assets/images/${image}`} alt="Profile" className="w-[50px] rounded-full object-contain"/>

            <div>
                <strong className="block mb-1">{name}</strong>
                <p className="font-normal text-sm">{position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox;