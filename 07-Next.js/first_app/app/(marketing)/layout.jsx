export default function serviceLayout({ children }) {
    return (

        <section>

            <header style={{ background: "green" }}>Header</header>

            <div>layout</div>
            {children}
            <footer style={{ background: "green" }}>Footer</footer>


        </section>
    )
}
