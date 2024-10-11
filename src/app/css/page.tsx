import Header from "../components/header";
export default function css(){
return(
    <div>
        <Header/>
        <div className="parentContainerModify">
        <div className="childContainerModify">
          <div className="imageContainer">
            <img src="css.png"alt="CSS"className="pic"/>
          </div>
          <h1 className="title">CSS</h1>
          <p className="description">CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of HTML documents, allowing developers to control design elements such as colors, fonts, spacing, and responsive layouts for different devices.
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