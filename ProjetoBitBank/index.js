import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rafael', 5000, 999855533);
diretor.cadastrarSenha("12345");
const gerente = new Gerente('Suelen', 2000, 665512346);
gerente.cadastrarSenha("123");
const cliente = new Cliente("Pedro", 7776332266, "789");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "12345");

const clienteLogado = SistemaAutenticacao.login(cliente,"789");

console.log(gerenteEstaLogado, diretorEstalogado, clienteLogado);