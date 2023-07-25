import {NavLink ,Link} from "react-router-dom"
import classes from "../styles/MainHeader.module.css"

const MainHeader =() =>{
    return(
        <header className={classes.header}>
            <nav className={classes.navo}>
                <ul className={classes.navss}> 
                    <div>
                        <div className={classes.title}><div className ={classes.brandname}><h2 id={classes.titlename}>MUSINSA</h2></div><div className={classes.mainsearch}><input className={classes.searchtext} type="text" placeholder="2023 시즌오프 최대 80% 할인"/></div></div>
                        
                        <div className={classes.naviga}>
                            <NavLink  className={classes.mars} activeClassName={classes.active} to = "/welcome">23 시즌오프</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/products">PLUS배송</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/ranking">랭킹</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/update">업데이트</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/codi">코디</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/sale">세일</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/special">스페셜</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/magazine">매거진</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/tv">TV</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/event">이벤트</NavLink>
                            <NavLink className={classes.mars} activeClassName={classes.active} to = "/brand">브랜드</NavLink>
                        </div>

                    </div>
                       
                       
                    
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;