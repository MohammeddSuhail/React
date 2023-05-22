import React from 'react'
import './footer.css'  //for including external css

export const Footer = () => {
  let footerStyle = {
    position: 'absolute',
    marginTop: "50px",
    width: "100%",
    border: "1px solid red"
  }
  return (
                                                  //for internal css    
    <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className="text-center">
          Copyright &copy; MyTododList.com
        </p>
    </footer>
  )
}
