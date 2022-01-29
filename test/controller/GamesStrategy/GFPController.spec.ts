import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import nock from 'nock';
import httpMock from 'node-mocks-http';
import sinon from 'sinon';
import GFPController from '../../../src/controller/GFPController';
import { GamesStrategy } from '../../../src/services/strategiesImp/GamesStrategy';
import * as constans from './constans';
import Game from '../../../src/models/database/Game/GameDef';
import { Model } from 'sequelize/dist';


let sandbox: any;

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('GFPController', () => {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        nock.cleanAll();
    });

    afterEach(() => {
        sandbox.restore(); // Unwraps the spy
        nock.cleanAll();
    });

    describe('Create Game', () => {

        it('Given a game When create method is called Then game is create successfully', async () => {

            sinon.stub(GamesStrategy.prototype, 'saveGFP').resolves(constans.responseOkCreate);
           
            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'POST',
                url: '/gfp/add'
            });

            const response = httpMock.createResponse();

            await GFPController.create(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);
            assert.isObject(responseAPI.data);

            responseAPI.data.status.should.be.equals(200);
            responseAPI.data.description.should.be.equals('Creación del juego exitosa');
        });
    });

    describe('get All Games', () => {

        it('Given a request When get all method is called Then it returns all games', async () => {

            sinon.stub(GamesStrategy.prototype, 'getAllGFP').resolves(constans.responseOkAllGames);

            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'GET',
                url: '/gfp/all'
            });

            const response = httpMock.createResponse();

            await GFPController.getAll(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);

            responseAPI.games[0].name.should.be.equals('Fortnite');
            responseAPI.games[0].description.should.be.equals('The best game');
        });
    });

    describe('get One Game', () => {

        it('Given a id When getGFPById method is called Then it returns the game', async () => {

            sinon.stub(GamesStrategy.prototype, 'getGFPById').resolves(constans.responseOkItemGames);

            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'GET',
                url: '/gfp/all',
                params: {
                    id: 10
                }
            });

            const response = httpMock.createResponse();

            await GFPController.getById(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);

            responseAPI.name.should.be.equals('FortniteOnline');
            responseAPI.description.should.be.equals('The best game');
        });
    });

    describe('Update Game', () => {

        it('Given a game When updateGFPById method is called Then it returns the game', async () => {

            sinon.stub(GamesStrategy.prototype, 'updateGFPById').resolves(constans.responseOkUpdate);

            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'PUT',
                url: '/gfp/update',
                params: {
                    id: 10
                }
            });

            const response = httpMock.createResponse();

            await GFPController.update(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);

            assert.isObject(responseAPI);
            assert.isObject(responseAPI.data);

            responseAPI.data.status.should.be.equals(200);
            responseAPI.data.description.should.be.equals('Actualización del juego exitosa');
        });
    });

    describe('Delete game Game', () => {

        it('Given a id When deleteGFPById method is called Then it returns the game', async () => {

            sinon.stub(GamesStrategy.prototype, 'deleteGFPById').resolves(constans.responseOkDelete);

            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'DELETE',
                url: '/gfp/delete',
                params: {
                    id: 10
                }
            });

            const response = httpMock.createResponse();

            await GFPController.delete(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);

            assert.isObject(responseAPI);
            assert.isObject(responseAPI.data);

            responseAPI.data.status.should.be.equals(200);
            responseAPI.data.description.should.be.equals('Eliminación del juego exitosa');
        });

        it('Given a id When deleteGFPById method is called Then it returns fail', async () => {

            sinon.stub(GamesStrategy.prototype, 'deleteGFPById').throws('error');

            const request = httpMock.createRequest({
                body: constans.bodyCreate,
                headers: constans.headersGame,
                method: 'DELETE',
                url: '/gfp/delete',
                params: {
                    id: 10
                }
            });

            const response = httpMock.createResponse();

            await GFPController.delete(request, response);

            const responseAPI = response._getData();

            assert.isObject(responseAPI);

            assert.isObject(responseAPI);
            assert.isObject(responseAPI.data);

            responseAPI.data.status.should.be.equals(200);
            responseAPI.data.description.should.be.equals('Eliminación del juego exitosa');
        });
    });
});
