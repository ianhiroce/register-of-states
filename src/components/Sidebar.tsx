import "./Sidebar.css"

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Nome da Empresa</h2>

      <h3>Cadastros Comuns</h3>
      <div>
        <ul>
          <li><a href="#">Países</a></li>
          <li><a href="#">Estados</a></li>
          <li><a href="#">Municípios</a></li>
          <li><a href="#">Tipo de Logradouro</a></li>
          <li><a href="#">Natureza Jurídica</a></li>
          <li><a href="#">Atividade Econômica</a></li>
          <li><a href="#">Regiões</a></li>
        </ul>
      </div>
      
      <h3>Grupo de Acessos</h3>
      <h3>Usuários</h3>
    </div>
  )
}