const InterviewCard = ({responses}) => {
    return (
        
            <section>
            {responses.map(card => <article> 
                <p>{card.prompt}</p>
                
                </article>)}
            </section>

        
    )
}

export default InterviewCard;