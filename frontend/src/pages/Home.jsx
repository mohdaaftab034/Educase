import "../styles/home.css";

export default function Home({ navigate }) {
    return (
        <div className="phone-frame">
            {/* Floating bubbles */}
            <div className="bubbles-area">
                <div className="bubble b1">12</div>
                <div className="bubble b2">6</div>
                <div className="bubble b3">7</div>
                <div className="bubble b4">8</div>
                <div className="bubble b5">1</div>
                <div className="bubble b6">2</div>
                <div className="bubble b7">3</div>
                <div className="bubble b8">4</div>
                <div className="bubble b9">5</div>
                <div className="bubble b10">13</div>
                <div className="bubble b11">15</div>
            </div>

            {/* Bottom content */}
            <div className="home-content">
                <h1 className="home-title">Welcome to PopX</h1>
                <p className="home-subtitle">
                    Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit,
                </p>

                <button className="btn-primary" onClick={() => navigate("register")}>
                    Create Account
                </button>
                <button className="btn-secondary" onClick={() => navigate("login")}>
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
}