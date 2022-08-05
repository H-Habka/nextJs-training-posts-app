import Nav from "./Nav"

const MainLayout = ({children}) => {
  return (
    <div>
        <Nav />
        <main>{children}</main>
    </div>
  )
}

export default MainLayout