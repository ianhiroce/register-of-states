export function Register() {
  return (
    <div className="modal-container">
      <form id="form" action="form" className="modal-form">
        <h3>Adicionar Estado</h3>
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="code">Código</label>
            <input
              type="number"
              placeholder="__"
              maxLength={ 2 }
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uf">UF</label>
            <input
              type="text"
              placeholder="UF"
              maxLength={ 2 }
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Informe o nome do estado"
              className="input-field"
            />
            <span className="error-message">Mensagem de erro</span>
          </div>
          <div className="form-group">
            <label htmlFor="region">Região</label>
            <select className="input-field select-field">
              <option>Selecione</option>
              <option>Norte</option>
              <option>Nordeste</option>
              <option>Sul</option>
              <option>Suldeste</option>
              <option>Centro-Oeste</option>              
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="extinction-date">Data de Extinção</label>
            <input
              type="text"
              placeholder="__/__/____"
              className="input-field date-field"
            />
            <button type="button" className="calendar-button">📅</button>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="save-button">Salvar</button>
          <button type="button" className="cancel-button">Cancelar</button>
        </div>
      </form>
    </div>
  );
}
