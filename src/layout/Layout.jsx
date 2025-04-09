import styles from "./Layout.module.css"
const Layout = ({children}) => {
  return (
        <>
          <header className={styles.header}>
            <h1>Crypto App</h1>
            <p>
                <a href="https://botostart.it">Botostart</a> | React.js Full Course
            </p>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Developed by Azam with love</p>
          </footer>
        </>
          )
}

export default Layout