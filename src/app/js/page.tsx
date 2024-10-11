import Header from "../components/header"
export default function js(){
    return(
    <div>
        <Header/>
        <div className="parentContainerModify">
        <div className="childContainerModify">
            <div className="imageContainer">
                <img src="JavaScript.png"alt="java"className="pic"/>
            </div>
            <h1 className="title">Java Script</h1>
            <p className="description">
            JavaScript is a high-level, dynamic programming language commonly used to create interactive effects within web browsers, enabling developers to build responsive and engaging user interfaces, manipulate the Document Object Model (DOM), and handle asynchronous events.
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