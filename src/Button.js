
export default function Button({handler, ext, type, isQuote, id, innerHtml}) {
    return( 
        <button onClick={()=>handler(ext, type, isQuote )} className ='button' id={id}>{innerHtml}</button>
    )
}