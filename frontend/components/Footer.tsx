export default function Footer() {
    return (
        <footer
            className="footer"
            style={{
                background: "#f5f7f6",
                marginTop: "60px",
            }}
        >
            <div
                className="container"
                style={{
                    textAlign: "center",
                    padding: "30px 0",
                }}
            >
                <p>
                    © 2026 Journey Planner • Built with Next.js &
                    FastAPI
                </p>
            </div>
        </footer>
    );
}