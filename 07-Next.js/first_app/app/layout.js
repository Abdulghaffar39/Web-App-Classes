export const metadata = {

  title: {

    template: "%s | Technical Agency",
    default: "Technical Agency",
  }
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body>

        <header style={{ background: "green" }}>Header</header>
        {children}
        <footer style={{ background: "green" }}>Footer</footer>

      </body>

    </html>
  );
}
