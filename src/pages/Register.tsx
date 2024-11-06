export function Register() {
  return (
    <>
      <form id="form" action="form">
        <h3>Adicionar Estado</h3>
        <div className="form-content">
          <label htmlFor="code">Código</label>
          <input
          type="number"
          placeholder="__"
          maxLength={ 2 }
          />
          <label htmlFor="">UF</label>
          <input
          type="text"
          placeholder="UF"
          maxLength={ 2 }
          />
          <label htmlFor="">Nome</label>
          <input
          type="text"
          placeholder="Informe o nome do estado"
          />
          <label htmlFor="">Região</label>
          <input
          type="text"
          placeholder="Selecione"
          />
        </div>
      </form>
    </>
  )
}