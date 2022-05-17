const InterviewCard = ({responses}) => {
    return (
        
            <section>
            { responses !== [] && responses.sort((a,b) => b.id- a.id).map(data => <article key={data.id}> 
                <p>{data.prompt}</p>
                {data.apiResponses}
                </article>)
            }
            </section> 

        
    )
}

export default InterviewCard;