import { useState } from "react"
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  const  [testData] = useState([
    {
      id:1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse veritatis animi at nulla, quis tempora saepe! Aliquam, mollitia eum sapiente cum minus velit saepe? Tempora esse sunt veniam nisi.",
      image:"profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed"
    },
    {
      id:2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse veritatis animi at nulla, quis tempora saepe! Aliquam, mollitia eum sapiente cum minus velit saepe? Tempora esse sunt veniam nisi.",
      image:"profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed"
    },
    {
      id:3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse veritatis animi at nulla, quis tempora saepe! Aliquam, mollitia eum sapiente cum minus velit saepe? Tempora esse sunt veniam nisi.",
      image:"profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Eman"
    },
  ]);

  return (
    <section className="pb-[300px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="/src/assets/images/bg-quotes.png" alt="Quotes" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative">
          {testData.map(item => (
            <TestimonialBox
              key={item.id}
              image={item.image}
              position={item.position}
              name={item.name}
              desc={item.desc}
               />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials