import Link from "next/link";
import Header from "../components/header";
export default function Msexcel(){
return(
    <div>
        <Header/>
        <div className="parentContainerModify"> 
        <div className="childContainerModify">
            <div className="imageContainer">
            <img src="excel.jpg"alt="excel"className="pic"/>
            </div>
            <h1 className="title">MS Excel</h1>
            <p className="description">
            Microsoft Excel is a spreadsheet application developed by Microsoft, designed for data organization and analysis. It allows users to create tables, perform calculations using formulas, and visualize data with charts and graphs. Excel supports complex data analysis through features like pivot tables and functions. Its versatility makes it essential for tasks in finance, accounting, and data management.
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