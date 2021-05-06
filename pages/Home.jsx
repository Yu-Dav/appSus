const { Link } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section className="home-page container">
                <div className="hero">Hero - Welcome to your app</div>

                <Link to="/email">
                    <div className="mail">link to mail</div>
                </Link>

                <Link to="/keep">
                <div className="keep">link to keep</div>
                </Link>
            </section>
        )
    }
}
