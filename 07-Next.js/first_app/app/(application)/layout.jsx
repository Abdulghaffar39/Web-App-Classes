export default function serviceLayout({ children }) {
    return (

        <section>

            <header style={{background: "blue"}}>Header application</header>
            <div>layout</div>
            {children}
            <footer style={{background: "blue"}}>Header application</footer>

        </section>
    )
}
