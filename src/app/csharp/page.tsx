import Header from "../components/header";
export default function csharp(){
return(
<div>
    <Header/>
        <div className="parentContainerModify">
        <div className="childContainerModify">
        <div className="imageContainer">
        <img src="csharp.png"alt="c#"className="pic"/>
        </div>
        <h1 className="title">C Sharp</h1>
        <p className="description">
        C# (C Sharp) is a modern, object-oriented programming language developed by Microsoft for building a wide range of applications on the .NET framework, including web, desktop, and mobile applications, known for its type safety and rich features.
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