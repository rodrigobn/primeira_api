/**
 * O arquivo helpers é responsável por inicializar as configurações de testes que serão usadas em todos
 * os testes de integração, removendo a necessidade de ter de realizar configurações em cada cenário
 * de teste.
 */

import supertest from 'supertest' //módulos necessários para executar os testes de integração
import chai from 'chai' //módulos necessários para executar os testes de integração
import app from '../../src/app.js' //aplicação express


/**
 * Globais fazem parte do Mocha, tudo que for definido como global poderá ser 
 * acessado em qualquer teste sem a necessidade de ser importado
 */
global.app = app
global.request = supertest(app)
global.expect = chai.expect