import "../Styles/AboutStyles.css";

const About = () => {
    return(
        <div className="viewport flex-column">
            <h1 className="theme-font-family heading">About</h1>
            <label className="theme-font-family" style={{fontSize: "2.1rem"}}>Welcome to my portfolio!</label>
            <p className="theme-font-family">Hello! I am a student in computer science as well as an aspiring programmer. <br/> I like playing video games and sports and watching useless youtube videos.
            <br/> In this portfolio website, I will talk about my journey so far, the skills I have acquired, the skills I plan on learning, the way I learn and a lot more. I hope you will like going through everything.
            <br/> Now without further ado, let's dive in.</p>
        </div>
    )
}

export default About;