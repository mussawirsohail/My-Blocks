import Header from "../components/header"
export default function Nextjs(){
    return(
    <div>
        <Header/>
        <div className="parentContainerModify">    
            <div className="childContainerModify">
            <div className="imageContainer">
            <img src="NEXTJS.PNG"alt="JS"className="pic"/>
            </div>
            <h1 className="title">Next JS</h1>
            <p className="description">
            Next.js is a React framework that enables the development of server-rendered and static web applications, providing features like automatic code splitting, optimized performance, and built-in support for routing and API endpoints, enhancing the overall development experience.
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