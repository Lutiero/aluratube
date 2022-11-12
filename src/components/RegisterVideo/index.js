import React, { useState } from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({});
        }
    }
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: '', url: '' }
    });
    const [formVisible, setFormVisible] = useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>
            {formVisible
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setFormVisible(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
                                X
                            </button>
                            <input
                                type="text"
                                name="titulo"
                                placeholder="Título do vídeo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                type="text"
                                name="url"
                                placeholder="URL"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}