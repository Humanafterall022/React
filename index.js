
function Page(){
    return(
        <div>
            <h1>Cosas que me gustan de React</h1>
            <ol>
                <li>Composable</li>
                <li>Usa JS</li>
                <li>DInero</li>
            </ol>
        </div>
    )
}


function Header(){
    return(
        <nav>
            <img src="./foto.png"></img>
        </nav>
    )
}

function Footer(){
    return(
        <footer>
            <small>"© 20xx  development. All rights reserved."</small>
        </footer>
    )
}
ReactDOM.render(<div>
                <Header/>
                <Page/>
                <Footer/>
                </div>
, document.getElementById("root"))