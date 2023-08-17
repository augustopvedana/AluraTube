import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);   
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            setValues({
                ...values,
                titulo: value,
            });
        }
            
        


    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Digite o titulo", url: "https://youtube..."}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    /*
        * O que precisamos para o form funcionar?
         -> Pegar os dados, que precisam vir do state
                - Titulo
                - URL do video
         -> Precisamos ter um onSubmit do nosso form;
         -> Limpar o formulario apos o submit;

    */

    return (
        <StyledRegisterVideo>
           <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
           </button>
            {/* No JavaScript vai se usar muito:
                -> Ternário
                -> Operadores de Curto-Circuito */}

            {formVisivel 
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                    }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(false)}>
                            x
                        </button>
                        <input 
                        placeholder="Título do vídeo" 
                        value={formCadastro.values.titulo} 
                        onChange={formCadastro.handleChange}
                        /> 
                        <input 
                        placeholder="URL" 
                        value={formCadastro.values.url} 
                        onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
                )
                :false}
             </StyledRegisterVideo>
    )
}



    // falta o botão para adicionar
    // modal
    // -> Precisamos controlar o state
    // -> Formulario em si