import "./Inicio.css"
import audnLogo from "../../assets/logo-large.svg"

function Inicio() {
    return (
        <>
            <div className="inicio-top-gradient"></div>
            <div className="inicio-img"><img src="https://s3-alpha-sig.figma.com/img/aa2f/36c0/a746f7d5f282311ee9a5d9aba5746e99?Expires=1692576000&Signature=nA7E5jX4BYugZSz-pV2IXUo2gGqYqG-OIFqCzG09fapjw~4WZYG-e~bUTqLZyUip4QNZrOauH9pwpA1gT9Ki7iWMbZ8tRmU0AKAeqhf2D1NFAqZK2TGqhby18AFIQ~6u5DIszDnwZ2KKgjiSREdM7Z-d4gS87qhluuSIQH7aNJCNRxwjOuNQvZ3jmhAvFwlsXeoK~-OmmG70fsuviXU3WQk-heXllfclg0S899WSbm4l7IxmZZ61h-ibS1pc-Zk1Ipi8Wc2eESXyNAb2KjjJEqApQ7T~7r~2ip~btqVhxgU6awmcw6EVl4Q52D1QqrGxzvHYtSewI39AKRWIoaTllw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
            <div>
                <img src={audnLogo} alt="Auden Logo" className="audenLogo" />
                <h2 className="slogan">Música a medida.</h2>
            </div>
            <button className="inicio-register-button">Registrarse Gratis</button>
            <button className="inicio-login-button">Iniciar Sesión</button>
            <div className="inicio-bottom-gradient"></div>
        </>
    );
}

export default Inicio;