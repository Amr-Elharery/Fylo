import { useState } from "react";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  const [contact] = useState([
    {
      id:1,
      icon:"icon-phone.svg",
      text: "+201551172802"
    },
    {
      id:2,
      icon:"icon-email.svg",
      text: "amrelharery@gmail.com"
    }
  ]);


  const [links] = useState([
    {
      id:1,
      text: "About Us"
    },
    {
      id:2,
      text: "Contact Us"
    },
    {
      id:3,
      text: "Jobs"
    },
    {
      id:4,
      text: "Terms"
    },
    {
      id:5,
      text: "Press"
    },
    {
      id:6,
      text: "Privacy"
    },
    {
      id:7,
      text: "Blog"
    },
  ])


  const [icons] = useState([
    {
      id:1,
      icon: "facebook"
    },
    {
      id:2,
      icon: "twitter"
    },
    {
      id:3,
      icon: "instagram"
    },
  ])

  return (
    <section className="text-white pt-[200px] bg-[#0c1524] pb-[100px]">
      <div className="container ">
        <a href="">
          <img src="/src/assets/images/logo.svg" alt="logo"
           className="w-[175px] h-[66px] object-contain"
           />
        </a>

        <div className="mt-8 flex justify-between flex-wrap flex-col md:flex-row gap-8">

          <div className="flex gap-4 w-[340px] max-w-full ">
            <img src="/src/assets/images/icon-location.svg" alt="location" className="h-5 w-5 object-contain"/>

            <p className="font-normal tracking-[0.8px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia reprehenderit vero perspiciatis impedit repellendus hic vitae modi sapiente.
            </p>
          </div>

          <div className="contact">
            {
              contact.map(item => (
                <div key={item.id}
                 className="flex items-center gap-4 my-4 last-of-type:my-0">
                  <img src={`/src/assets/images/${item.icon}`} alt="icon" className="w-5 h-5 object-contain" />
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>

          <div className="links grid grid-cols-1 md:grid-cols-2 gap-5">
            {
              links.map(item =>(
              <a 
              key={item.id}
              href={`/${item.text.toLowerCase()}`}
              className="hover:text-primary transition-color duration-300 text-base"
              >
                
                {item.text}
                </a>)
              )
            }
          </div>

          <div className="social flex gap-4 justify-center w-full md:w-auto">
            {
              icons.map(icon =>(
                <div key={icon.id}>
                  <a href="" className="group">
                    <div className="w-10 h-10 element-center flex-row border border-white rounded-full">

                      {
                      icon.icon === 'facebook' ?
                        <FaFacebookF className="group-hover:text-primary transition-all duration-300" />
                      : icon.icon === 'twitter' ?
                      <FaTwitter className="group-hover:text-primary transition-all duration-300" />
                      : <FaInstagram className="group-hover:text-primary transition-all duration-300"/>
                      }
                    </div>
                  </a>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </section>
  )
}

export default Footer;