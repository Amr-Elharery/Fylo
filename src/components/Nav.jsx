import { useState } from "react";

function Nav() {
  const [links] = useState(['Features', 'Team', 'Signin'])
  return (
    <nav>
    <ul className="flex items-center gap-10">
      {links.map(l=>(
        <li key={l}>
          <a href={`#${l.toLowerCase()}`} className="text-white opacity-60 hover:opacity-100 hover:underline transition-opacity duration-300">{l}</a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Nav;