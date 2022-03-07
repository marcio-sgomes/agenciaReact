import React from "react";

function Inicio() {
    return (
            <div className='container-fluid bg-grey'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo slideanim'></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Nossos Valores</h2><br />
                        <h4><strong>MISSÃO:</strong> Levar para você  + seguraça, + diverção, + alegria, + emoção, + economia</h4><br />
                        <p><strong>Visão:</strong> +Plus tem a missão de cumprir e mudar a ideia de viajar. A ideia é proporcionar + tempo para todos que querem poder viajar sem ter que fazer + coisas além do que deveria.<br/>
                        Nossa ideia é juntar tudo o que precisa para nós ou seja, alugar carro, hospedagem, passeios, café, almoço, jantar e tudo o que desejar.<br/>
                        Basta entrar em contato conosco e montar o seu pacote de viagem. Além dos que já tem em nosso site.</p>
                        <img src={require('./img_viagens/logo-removebg-preview.png')} alt='logo'/>

                    </div>
                </div>
            </div>
    );
}

export default Inicio;