import Header from "../components/header";
export default function Phyton(){
return(
<div>
        <Header/>
        <div className="parentContainerModify">
        <div className="childContainerModify">
          <div className="imageContainer">
            <img src="phyton.jpg"alt="phy"className="pic"/>
          </div>
          <h1 className="title">Phyton</h1>
          <p className="description">
          Python is a high-level, interpreted programming language known for its readability and simplicity, widely used for web development, data analysis, artificial intelligence, scientific computing, and automation, thanks to its extensive libraries and frameworks.
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