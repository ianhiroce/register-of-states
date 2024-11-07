import "./Register.css"
import { useNavigate } from "react-router-dom";

export function Register() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    alert("Formulário enviado")
  }

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className="modal-container">
      <form id="form" action="form" className="modal-form" onSubmit={ handleSubmit }>
        <h3>Adicionar Estado</h3>
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="code">Código</label>
            <input
              type="number"
              placeholder="_ _"
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
              type="date"
              placeholder="__/__/____                     📅"
              className="input-field date-field"
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="save-button">Salvar</button>
          <button type="button" className="cancel-button" onClick={ handleCancel }>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
