import Link from "next/link";
import Header from "../components/header";
export default function Msword(){
return(
    <div>
        <Header/>
            <div className="parentContainerModify"> 
            <div className="childContainerModify">
            <div className="imageContainer">
            <img src="word.jpg"alt="word"className="pic"/>
            </div>
            <h1 className="title">MS Word</h1>
            <p className="description">
            Microsoft Word is a powerful word processing application developed by Microsoft. It enables users to create, edit, and format text documents efficiently. With features like spell checking, grammar correction, and collaboration tools, it supports both personal and professional writing needs. Word also offers various templates and formatting options to enhance document presentation and design.
            {" "}
            </p>
            </div>
    </div>
    <div className="footer">
              <h1 className="footername">Mussawir Sohail</h1>
              <div className="RESOLVE" >
                <a href="https://www.linkedin.com/in/mussawir-sohail-7602b6262/" target="blank"><img src="linkedin.png" alt="Linkedin" className="edit"/></a>
                <a href="https://github.com/mussawirsohail"target = "blank"><img src="github.png" alt="Github" className="edit"/></a>              
              </div>
              <p className="web"> © Web Developer. All rights deserved</p>
              </div>    
    </div>
)
}
