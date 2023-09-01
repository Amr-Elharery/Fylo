import { useState } from "react"
import Feature from "./Feature"

function Features() {
    const [items] = useState([
        {
        icon:"icon-access-anywhere.svg",
        title:"Access your files anywhere",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus repellat assumenda tempora mollitia autem voluptas molestias? Atque adipisci hic odio quam? Exercitationem qui iste a libero suscipit assumenda nam."
        },
        {
        icon:"icon-collaboration.svg",
        title:"Real time collaboration",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus repellat assumenda tempora mollitia autem voluptas molestias? Atque adipisci hic odio quam? Exercitationem qui iste a libero suscipit assumenda nam."
        },
        {
        icon:"icon-any-file.svg",
        title:"Store any type of file",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus repellat assumenda tempora mollitia autem voluptas molestias? Atque adipisci hic odio quam? Exercitationem qui iste a libero suscipit assumenda nam."
        },
        {
        icon:"icon-security.svg",
        title:"Security you can trust",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus repellat assumenda tempora mollitia autem voluptas molestias? Atque adipisci hic odio quam? Exercitationem qui iste a libero suscipit assumenda nam."
        }
])
  return (
    <section id="features">
        <div className="container">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[800px] mx-auto max-w-full">
                {
                    items.map(i=>(
                        <Feature
                            key={i.title}
                            title={i.title}
                            icon={i.icon}
                            desc={i.desc}
                            />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Features