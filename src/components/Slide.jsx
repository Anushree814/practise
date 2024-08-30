export default function Slide({data}){
    return(
        <div className="card">
            <h1>
        {data.title}
            </h1>
            <p>{data.text}</p>
        </div>
    )
}