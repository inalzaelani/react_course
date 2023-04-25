import Style from 'styled-components'

const H3 = Style.h3`
    margin : 20px 0;
    font-size : 20px;
    font-weight : 600;
    text-align : center;
    font-family : 'Quicksand', sans-serif;
    
`

const EmptyList =(props)=>{
    return(
        <H3>{props.text}</H3>
    )
}
export default EmptyList