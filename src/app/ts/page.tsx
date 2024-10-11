import Header from "../components/header";
export default function ts(){
return(
    <div>
        <Header/>
        <div className="parentContainerModify">
        <div className="childContainerModify">
          <div className="imageContainer">
          <img src="Typescript.png"alt="Typescript"className="pic"/>
          </div>
          <h1 className="title">Typescript</h1>
          <p className="description">
          TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, offering better error-checking and improved code structure. 
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