export function ProductCard(props) {
    
    return(
        <article 
         style={{
            width: "100%",
            border: "1px solid white",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
            <h2>{props.product.title}</h2>
            <img
                src={props.product.imagesrc}
                alt={props.product.title}
                width="128px"
                height="128px"
            />
            <p>Specifications: </p>
            <ul>
                <li>{props.product.specifications[0]}</li>
                <li> {props.product.specifications[1]}</li>
                <li>{props.product.specifications[2]}</li>
            </ul>
            <button>
                Buy(from ${props.product.price})
            </button>
        </article>
     ); 
}