
describe('UsersController', () => {

    var $controller, UsersController, UsersFactory;

    var userList = [
        { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
        { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
        { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
        { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));
    beforeEach(angular.mock.module('api.users'));
    beforeEach(inject(function (_$controller_, _Users_) {

        $controller = _$controller_;

        UsersFactory = _Users_;

        spyOn(UsersFactory, 'all').and.callFake(function () {
            return userList;
        });

        UsersController = $controller('UsersController', { Users: UsersFactory });

    }))

    it('shoud be defined', () => {
        expect(UsersController).toBeDefined();
    });


    it('should initialize with a call to Users.all()', () => {
        expect(UsersFactory.all).toHaveBeenCalled();
        expect(UsersController.users).toEqual(userList);


    });



});




