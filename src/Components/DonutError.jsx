const DonutError = ({codeInput}) => {
    return(
        <div className="error-container flex-column">
            <label className="donut-big-error">Error!</label>
            <div className="all-errors flex-column">
                {!codeInput.includes(";") ? 
                <label className="donut-error">Missing ; on line 2 (fix it)</label> :
                <>
                    <label className="donut-error">Random error 1</label>
                    <label className="donut-error">Fatal mistake PC about to boom!</label>
                    <label className="donut-error">You stupid</label>
                    <label className="donut-error">Just give up already</label>
                </>
                }
            </div>
        </div>
    )
}

export default DonutError;