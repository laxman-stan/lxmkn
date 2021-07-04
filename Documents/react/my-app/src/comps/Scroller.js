export default function scroller(){








const parentStyle={
    width: "100vw",
    height: "100vh",
    background: "green",
    position: "fixed",
    top: "0",
    left: "0",
    overflowY: "scroll"
}

const childStyle={
    width: "100vw",
    height: "calc( 100vh + 1px )",
    background: "blue",
    opacity: "0.3"
    
}






    return(
        <>
        <div style={parentStyle} className="parent">
            <div className="child" style={childStyle}></div>
        </div>

        </>
    )
}