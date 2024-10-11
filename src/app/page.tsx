import Link from "next/link";
import Header from "./components/header";
export default function Responsive() {
    return (
      <body>
        <Header/>
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
          <img src="Typescript.png"alt="Typescript"className="pic"/>
          </div>
          <h1 className="title">Typescript</h1>
          <p className="description">
          TypeScript is a typed superset of JavaScript. 
        {" "}
          </p>
          <Link href={"/ts"}>
          <button className="readMore">Read More</button>
          </Link>
        </div>
  
        <div className="childContainer">
          <div className="imageContainer">
            <img src="css.png"alt="CSS"className="pic"/>
          </div>
          <h1 className="title">CSS</h1>
          <p className="description">CSS styles HTML elements to control layout, design, and presentation.
        {" "}
          </p>
          <Link href={"/css"}>
          <button className="readMore">Read More</button>
          </Link>
        </div>
  
        <div className="childContainer">
          <div className="imageContainer">
            <img src="NEXTJS.PNG"alt="JS"className="pic"/>
          </div>
          <h1 className="title">Next JS</h1>
          <p className="description">
          Next.js is a React framework for building fast and server-rendered.
        {" "}
          </p>
          <Link href={"/nextjs"}>
          <button className="readMore">Read More</button>
          </Link>        
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <img src="JavaScript.png"alt="java"className="pic"/>
          </div>
          <h1 className="title">Java Script</h1>
          <p className="description">
          JavaScript is a versatile programming language  
        {" "}
          </p>
          <Link href={"/js"}>
          <button className="readMore">Read More</button>
          </Link>        
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <img src="phyton.jpg"alt="phy"className="pic"/>
          </div>
          <h1 className="title">Phyton</h1>
          <p className="description">
          Python is a high-level, versatile programming language
        {" "}
          </p>
          <Link href={"/phyton"}>
          <button className="readMore">Read More</button>
          </Link>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <img src="csharp.png"alt="c#"className="pic"/>
          </div>
          <h1 className="title">C Sharp</h1>
          <p className="description">
          C# is a modern, object-oriented programming language 
        {" "}
          </p>
          <Link href={"/csharp"}> 
          <button className="readMore">Read More</button>
          </Link>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <img src="word.jpg"alt="word"className="pic"/>
          </div>
          <h1 className="title">MS Word</h1>
          <p className="description">
          Microsoft Word is a word processing software used for creating and editing.
        {" "}
          </p>
          <Link href={"/msword"}>
          <button className="readMore">Read More</button>
          </Link>
          </div>
        <div className="childContainer">
          <div className="imageContainer">
            <img src="excel.jpg"alt="excel"className="pic"/>
          </div>
          <h1 className="title">MS Excel</h1>
          <p className="description">
          Microsoft Excel is a spreadsheet application used for data organization.
        {" "}
          </p>
          <Link href={"/msexcel"}>
          <button className="readMore">Read More</button>
          </Link>        
        </div>
        </div>
        <footer>
        <div className="footer">
              <h1 className="footername">Mussawir Sohail</h1>
              <div className="RESOLVE" >
                <a href="https://www.linkedin.com/in/mussawir-sohail-7602b6262/" target="blank"><img src="linkedin.png" alt="Linkedin" className="edit"/></a>
                <a href="https://github.com/mussawirsohail"target = "blank"><img src="github.png" alt="Github" className="edit"/></a>
                              
                              
              </div>
              <p className="web"> © Web Developer. All rights deserved</p>
              </div>
              </footer>    
      </body>
    );
  }