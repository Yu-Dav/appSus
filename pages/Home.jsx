const { Link } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section className="home-page container">
                <div className="hero">Welcome to your app</div>
                <Link to="/keep">
                    <div className="keep">
                        <img src="../assets/img/home-keep.jpg" alt="" />
                    </div>
                </Link>
                <Link to="/email">
                    <div className="mail">
                        <img src="../assets/img/home-email.jpg" alt="" />
                    </div>
                </Link>
            </section>
        )
    }
}
