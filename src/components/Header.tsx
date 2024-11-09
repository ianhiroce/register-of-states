import "./Header.css"

export function Header() {
  return (
    <>
    <div className="header-content">

      <div className="menu-icon">☰</div>

      <p className="client-name">Nome do Cliente da Empresa</p>
      <img src='../assets/bandeira.jpg' alt="Bandeira do Brasil" />      

    </div>

    <div className="header-title">
      <h3 className="page-title">ESTADOS</h3>
    </div>
    
    </>
  )
}