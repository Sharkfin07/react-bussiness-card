import profilePicture from './assets/profile-picture.jpg'
import githubIcon from './assets/github-icon.png'
import instagramIcon from './assets/instagram-icon.png'
import facebookIcon from './assets/facebook-icon.png'
import './App.css'

function App() {
    let profileWebsite = 'https://sharkfin07.github.io/css-personal-website/';
    let profileEmail = 'mzidanek@gmail.com'
    return (
        <>
            <main className="card">
                <section className="card-photo">
                    <img src={profilePicture} alt="Profile picture of Mohammad Zidane Kurnianto" />
                </section>
                <section className="card-header">
                    <h1 className="header-name">Mohammad Zidane Kurnianto</h1>
                    <p className="header-profession">Frontend Developer</p>
                    <a className="header-website" href={profileWebsite}>sharkfin07.github.io/css-personal-website/</a>
                    <a className="btn header-email" href={`mailto:${profileEmail}`}>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="currentColor"/>
                        </svg>
                        <span>Email</span>
                    </a>
                </section>
                <section className="card-body">
                    <section className="body-item">
                        <h2>About</h2>
                        <p>I am an Information Systems student with interest in software development and machine learning. I try to keep up with the world of programming. I am currently studying React JS!</p>
                    </section>
                    <section className="body-item">
                        <h2>Interests</h2>
                        <p>Game fanatic. Guitar player. Not so <i>pro</i>-grammer. Avid progressive and classical music enjoyer. Quite fond of matcha drinks.</p>
                    </section>
                </section>
                <section className="card-footer">
                    <a className="social-icon" href="https://github.com/Sharkfin07">
                        <img src={githubIcon} alt="Github profile" />
                    </a>
                    <a className="social-icon" href="https://www.instagram.com/mohzidane_k/">
                        <img src={instagramIcon} alt="Instagram profile" />
                    </a>
                    <a className="social-icon" href="https://www.facebook.com/mohammad.zidanekurnianto.1">
                        <img src={facebookIcon} alt="Facebook profile" />
                    </a>
                </section>
            </main>
        </>
    )
}

export default App