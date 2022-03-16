import React from "react";


import './Cadastro.css';
function Cadastro(){
    return(
        
                <form className="form-horizontal">
                    <fieldset>
                        <div className="panel panel-primary">
                            <div className="panel-heading">Cadastro de Cliente</div>

                            <div className="panel-body">
                                <div className="form-group">
                                    
                                    <div className="col-md-11 control-label">
                                        <p className="help-block"><h11>*</h11> Campo Obrigatório </p>
                                    </div>
                                </div>

                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">Nome <h11>*</h11></label>
                                    <div className="col-md-8">
                                        <input id="Nome" name="Nome" placeholder="" className="form-control input-md" required="" type="text"/>
                                    </div>
                                </div>

                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">CPF <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required="" type="text" maxlength="11" pattern="[0-9]+$"/>
                                    </div>

                                    <label className="col-md-1 control-label" for="Nome">Nascimento<h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="dtnasc" name="dtnasc" placeholder="DD/MM/AAAA" className="form-control input-md" required="" type="text" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"/>
                                    </div>

                                    {/* Multiple Radios (inline) */}

                                    <label className="col-md-1 control-label" for="radios">Sexo <h11>*</h11></label>
                                    <div className="col-md-4">
                                        <label required="" className="radio-inline" for="radios-0" >
                                            <input name="sexo" id="sexo" value="feminino" type="radio" required/>
                                                Feminino
                                        </label>
                                        <label className="radio-inline" for="radios-1">
                                            <input name="sexo" id="sexo" value="masculino" type="radio"/>
                                                Masculino
                                        </label>
                                    </div>
                                </div>

                                {/* Prepended text*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Telefone <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required="" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                                OnKeyPress="formatar('## #####-####', this)"/>
                                        </div>
                                    </div>

                                    <label className="col-md-1 control-label" for="prependedtext">Telefone</label>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                                OnKeyPress="formatar('## #####-####', this)"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Prepended text*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Email <h11>*</h11></label>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input id="prependedtext" name="prependedtext" className="form-control" placeholder="email@email.com" required="" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                        </div>
                                    </div>
                                </div>


                                {/* Search input*/}
                                <div className="form-group">

                    
                                    <label className="col-md-2 control-label" for="CEP">CEP <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required="" type="search" maxlength="8" pattern="[0-9]+$"/>

                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-primary" onclick="pesquisacep(cep.value)">Pesquisar</button>
                                    </div>
                                </div>

                                {/* Prepended text*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Endereço</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <span className="input-group-addon">Rua</span>
                                            <input id="rua" name="rua" className="form-control" placeholder="" required=""  type="text"/>
                                        </div>

                                    </div>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon">Nº <h11>*</h11></span>
                                            <input id="numero" name="numero" className="form-control" placeholder="01" required="" type="text"/>
                                        </div>

                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-addon">Bairro</span>
                                            <input id="bairro" name="bairro" className="form-control" placeholder="" required=""  type="text"/>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext"></label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <span className="input-group-addon">Cidade</span>
                                            <input id="cidade" name="cidade" className="form-control" placeholder="" required="" readonly="readonly" type="text"/>
                                        </div>

                                    </div>

                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon">Estado</span>
                                            <input id="estado" name="estado" className="form-control" placeholder="" required="" readonly="readonly" type="text"/>
                                        </div>

                                    </div>
                                </div>

                                {/* Select Basic */}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Estado Civil">Estado Civil <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <select required id="Estado Civil" name="Estado Civil" className="form-control">
                                            <option value=""></option>
                                            <option value="Solteiro(a)">Solteiro(a)</option>
                                            <option value="Casado(a)">Casado(a)</option>
                                            <option value="Divorciado(a)">Divorciado(a)</option>
                                            <option value="Viuvo(a)">Viuvo(a)</option>
                                        </select>
                                    </div>

                                    {/* Prepended checkbox */}

                                    <label className="col-md-1 control-label" for="Filhos">Filhos<h11>*</h11></label>
                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <label className="radio-inline" for="radios-0">
                                                    <input type="radio" name="filhos" id="filhos" value="nao" onclick="desabilita('filhos_qtd')" required/>
                                                        Não
                                                </label>
                                                <label className="radio-inline" for="radios-1">
                                                    <input type="radio" name="filhos" id="filhos" value="sim" onclick="habilita('filhos_qtd')"/>
                                                        Sim
                                                </label>
                                            </span>
                                            <input id="filhos_qtd" name="filhos_qtd" className="form-control" type="text" placeholder="Quantos?" pattern="[0-9]+$" />

                                        </div>

                                    </div>
                                </div>


                                {/* Select Basic */}
                                <div className="form-group">

                                    <label className="col-md-2 control-label" for="selectbasic">Escolaridade <h11>*</h11></label>

                                    <div className="col-md-3">
                                        <select required id="escolaridade" name="escolaridade" className="form-control">
                                            <option value=""></option>
                                            <option value="Analfabeto">Analfabeto</option>
                                            <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                                            <option value="Fundamental Completo">Fundamental Completo</option>
                                            <option value="Médio Incompleto">Médio Incompleto</option>
                                            <option value="Médio Completo">Médio Completo</option>
                                            <option value="Superior Incompleto">Superior Incompleto</option>
                                            <option value="Superior Completo">Superior Completo</option>
                                        </select>
                                    </div>


                                    {/* Text input*/}

                                    <label className="col-md-1 control-label" for="profissao">Profissão<h11>*</h11></label>
                                    <div className="col-md-4">
                                        <input id="profissao" name="profissao" type="text" placeholder="" className="form-control input-md" required=""/>

                                    </div>
                                </div>

                                
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="textinput">Como ficou sabendo da +Plus?</label>
                                    <div className="col-md-4">
                                        <input id="textinput" name="textinput" placeholder="" className="form-control input-md" type="text"/>

                                    </div>

                                </div>


                                
                                {/* Button (Double) */}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Cadastrar"></label>
                                    <div className="col-md-8">
                                        <button id="Cadastrar" name="Cadastrar" className="btn btn-success" type="Submit">Cadastrar</button>
                                        <button id="Cancelar" name="Cancelar" className="btn btn-danger" type="Reset">Cancelar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </fieldset>
                </form>
    );
    
}

export default Cadastro;