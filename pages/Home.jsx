const { Link } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section className="home-page container">
<<<<<<< HEAD
                <div className="hero">Welcome to your app</div>
=======
                <div className="hero">Welcome to your new favorite app</div>

>>>>>>> 3459820417279cf6178e62be1c356b0b9c23b9a8
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
