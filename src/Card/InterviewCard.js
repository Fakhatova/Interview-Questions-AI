const InterviewCard = ({responses}) => {
    return (
            <section>
            { responses !== [] && responses.sort((a,b) => b.id- a.id).map(data => <article key={data.id}> 
                <h4>Prompt: {data.prompt} </h4>
                {data.apiResponses}
                </article>)
            }
            </section> 

        
    )
}

export default InterviewCard;